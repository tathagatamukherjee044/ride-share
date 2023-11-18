import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BuyerModule } from './buyer/buyer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TripModule } from './trip/trip.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HTTPInterceptor } from './http.interceptor';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    IonicModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  // providers: [{ 
  //   provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi:true
  // },],
  bootstrap: [AppComponent]
})
export class AppModule { }
