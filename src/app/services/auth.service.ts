import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  authenticateUser(userModel: any): Observable<any> {
    return this.http.post('http://localhost:8080/auth/login',userModel).pipe(map(res =>{
      return res;
    }))
  }
  createUser(userModel: any) {
    return this.http.post('http://localhost:8080/auth/signup',userModel).pipe(res =>{
      return res;
    })
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
