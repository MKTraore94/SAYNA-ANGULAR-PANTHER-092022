import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { EshopComponent } from './eshop/eshop.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path:'eshop',component:EshopComponent},
  {path:'products',component:ProductsComponent},
  {path:'single-product',component:SingleProductComponent},
  {path:'cart',component:CartComponent},
  {path:'commande',component:CommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EshopRoutingModule { }
