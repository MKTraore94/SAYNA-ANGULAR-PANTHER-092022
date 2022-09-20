import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupboxComponent } from './components/popupbox/popupbox.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';

const routes: Routes = [
  {path:'bar-nav',component:BarNavComponent},
  {path:'footer',component:FooterComponent},
  {path:'scroll-bar',component:ScrollBarComponent},
  {path:'popupbox',component:PopupboxComponent},
  {path:'acceuil', loadChildren:()=> import('./acceuil/acceuil.module').then((m)=>m.AcceuilModule),},
  {path:'wakanda', loadChildren:()=> import('./wakanda/wakanda.module').then((m)=>m.WakandaModule),},
  {path:'enigme', loadChildren:()=> import('./enigme/enigme.module').then((m)=>m.EnigmeModule),},
  {path:'eshop', loadChildren:()=> import('./eshop/eshop.module').then((m)=>m.EshopModule),},
  {path:'compte', loadChildren:()=> import('./compte/compte.module').then((m)=>m.CompteModule),}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
