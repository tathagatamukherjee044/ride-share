import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IonicModule } from '@ionic/angular';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    HomeLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgbDropdownModule,
    RouterModule,
    AppModule,
    MatSidenavModule
  ]
})
export class LayoutsModule { }
