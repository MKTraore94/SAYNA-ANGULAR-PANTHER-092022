import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeRoutingModule } from './enigme-routing.module';
import { EnigmeComponent } from './enigme/enigme.component';


@NgModule({
  declarations: [
    EnigmeComponent
  ],
  imports: [
    CommonModule,
    EnigmeRoutingModule,
    RouterModule
  ]
})
export class EnigmeModule { }
