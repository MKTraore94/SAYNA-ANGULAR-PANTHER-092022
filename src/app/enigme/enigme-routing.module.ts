import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeComponent } from './enigme/enigme.component';

const routes: Routes = [
  {path:'enigme',component:EnigmeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeRoutingModule { }
