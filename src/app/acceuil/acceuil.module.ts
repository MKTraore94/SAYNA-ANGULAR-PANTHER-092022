import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AcceuilComponent
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    RouterModule
  ]
})
export class AcceuilModule { }
