import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripItemComponent } from './trip-item/trip-item.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripSearchComponent } from './trip-search/trip-search.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  {
    path:'',
    component: TripSearchComponent
  },
  {
    path:'create',
    component: CreateTripComponent
  },
  {
    path:'search',
    component: TripSearchComponent
  },
  {
    path:'view',
    component: TripDetailComponent
  }
]

@NgModule({
  declarations: [
    CreateTripComponent,
    TripListComponent,
    TripItemComponent,
    TripDetailComponent,
    TripSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    IonicModule,
    SharedModule,
    NgbDropdown
  ],
  exports : [TripListComponent,TripItemComponent]
})
export class TripModule { }
