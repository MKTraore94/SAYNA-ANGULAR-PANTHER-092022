import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakandaRoutingModule } from './wakanda-routing.module';
import { WakandaComponent } from './wakanda/wakanda.component';


@NgModule({
  declarations: [
    WakandaComponent
  ],
  imports: [
    CommonModule,
    WakandaRoutingModule,
    RouterModule
  ]
})
export class WakandaModule { }
