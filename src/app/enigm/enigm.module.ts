import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmRoutingModule } from './enigm-routing.module';
import { EnigmComponent } from './enigm.component';


@NgModule({
  declarations: [
    EnigmComponent
  ],
  imports: [
    CommonModule,
    EnigmRoutingModule
  ]
})
export class EnigmModule { }
