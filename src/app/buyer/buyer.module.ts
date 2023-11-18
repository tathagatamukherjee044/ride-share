import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerItemComponent } from './buyer-item/buyer-item.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'list',
    component: BuyerListComponent
  }
]

@NgModule({
  declarations: [
    BuyerFormComponent,
    BuyerItemComponent,
    BuyerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class BuyerModule { }
