import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { TripModule } from '../trip/trip.module';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes : Routes = [
  {
    path:'trips',
    component: TripsComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent,
    TripsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TripModule
  ]
})
export class UserModule { }
