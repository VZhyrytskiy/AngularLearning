import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
