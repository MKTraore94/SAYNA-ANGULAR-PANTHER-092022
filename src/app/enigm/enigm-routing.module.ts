import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmComponent } from './enigm.component';

const routes: Routes = [{ path: '', component: EnigmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmRoutingModule { }
