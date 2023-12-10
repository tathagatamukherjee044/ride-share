import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  constructor(
    private authService : AuthService,
    private nav :NavController
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt = this.authService.getToken()
    console.log(jwt);
    
    return next.handle(request.clone({ setHeaders: { token: `${jwt}`  }
    })).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this.nav.navigateRoot("/auth/login")
            alert('Unauthorized access!')
            
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
  };
    //return next.handle(request);
  
}
