import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakanRoutingModule } from './wakan-routing.module';
import { WakanComponent } from './wakan.component';


@NgModule({
  declarations: [
    WakanComponent
  ],
  imports: [
    CommonModule,
    WakanRoutingModule
  ]
})
export class WakanModule { }
