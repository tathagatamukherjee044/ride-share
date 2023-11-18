import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDisplayComponent } from './card-display/card-display.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { IonicModule } from '@ionic/angular';
import { TripModule } from '../trip/trip.module';



@NgModule({
  declarations: [
    CardDisplayComponent,
    ListDisplayComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports : [
    ListDisplayComponent
  ]
})
export class SharedModule { }
