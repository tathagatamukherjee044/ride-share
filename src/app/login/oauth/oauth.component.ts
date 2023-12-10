import { Component } from '@angular/core';
import { ActivatedRoute, Navigation, Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent {

  userDataEncoded: string | null = null;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService,
    private nav :NavController,
  ){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if(params['data']){
        this.userDataEncoded = params['data']
        const userData = JSON.parse(atob(this.userDataEncoded as string))
        console.log(userData);
        
        this.authService.setUser(userData)
        this.nav.navigateRoot("/create")
      }
    })
    console.log();
    
  }

}
