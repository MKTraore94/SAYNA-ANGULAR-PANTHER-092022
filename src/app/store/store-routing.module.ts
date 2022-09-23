import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path:'cart',component: CartComponent},
  { path:'eshop/product/id',component: SingleProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
