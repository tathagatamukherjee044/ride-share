import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerModule } from './seller/seller.module';
import { SellerFormComponent } from './seller/seller-form/seller-form.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', 
    component : HomeLayoutComponent,
    loadChildren: () => import('./trip/trip.module').then(m => m.TripModule)
  },
  // { path: '', 
  // loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  // },
  { path: 'auth', 
    component : AuthLayoutComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'user', 
    component : HomeLayoutComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
