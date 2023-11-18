import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerFormComponent } from './seller-form/seller-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerItemComponent } from './seller-item/seller-item.component';

const routes : Routes = [
  {
    path:'form',
    component: SellerFormComponent
  }
]

@NgModule({
  declarations: [
    SellerFormComponent,
    SellerListComponent,
    SellerItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class SellerModule { }
