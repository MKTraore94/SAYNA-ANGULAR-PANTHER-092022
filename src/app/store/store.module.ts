import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AsideComponent } from './aside/aside.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    CommandeComponent,
    ProductsComponent,
    SingleProductComponent,
    AsideComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
 
})
export class StoreModule { }
