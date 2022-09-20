import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CompteComponent } from './compte/compte.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CompteComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    RouterModule
  ]
})
export class CompteModule { }
