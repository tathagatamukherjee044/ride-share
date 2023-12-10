import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { OauthComponent } from './oauth/oauth.component';
const routes : Routes = [
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'oauth',
    component: OauthComponent
  },
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OauthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IonicModule
  ]
})
export class LoginModule { }
