import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { EshopComponent } from './eshop/eshop.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    EshopComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule,
    RouterModule
  ]
})
export class EshopModule { }
