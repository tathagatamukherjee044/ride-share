import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user  : any={};

  constructor(
    private authService : AuthService,
    private nav :NavController,
    ){}
  onSubmit(){
    console.log(this.user);
    this.authService.authenticateUser(this.user).subscribe(res =>{
      console.log(res);
      if(res.success == true){
        localStorage.setItem('token',res.token)
        this.nav.navigateRoot("/create")
      }else {
        alert("wrong password") 
      }
      

    });
  }

  goTo(page: string | any[] | UrlTree){
    this.nav.navigateRoot(page)
  }

  loginWithGoogle(){
    this.authService.getGoogleOAuthURL()
  }

  
  
}
