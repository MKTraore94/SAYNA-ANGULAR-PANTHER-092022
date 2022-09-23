import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WakanComponent } from './wakan.component';

const routes: Routes = [{ path: '', component: WakanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WakanRoutingModule { }
