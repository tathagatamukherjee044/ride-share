import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService : AuthService,
    private nav : NavController
    ){}


  newUser : any={};
  onSubmit(){
    console.log(this.newUser);
    console.log(this.newUser);
    this.authService.createUser(this.newUser).subscribe(res =>{
      console.log(res);
      // if(res.success == true){
      //   this.newUser.navigateRoot("/create")
      // }
      // alert("wrong password")

    });
    
  }

  goTo(page: string | any[] | UrlTree){
    this.nav.navigateRoot(page)
  }

}
