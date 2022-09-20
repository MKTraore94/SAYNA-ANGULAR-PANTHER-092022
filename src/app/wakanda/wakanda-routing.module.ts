import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WakandaComponent } from './wakanda/wakanda.component';

const routes: Routes = [
  {path:'wakanda',component:WakandaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WakandaRoutingModule { }
