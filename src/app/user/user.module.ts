import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { TripModule } from '../trip/trip.module';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {
    path:'trips',
    component: TripsComponent
  },
  {
    path:'me',
    component: ProfileComponent
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
    TripModule,
    SharedModule
  ]
})
export class UserModule { }
