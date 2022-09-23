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
  // {path:'acceuil', loadChildren:()=> import('./acceuil/acceuil.module').then((m)=>m.AcceuilModule),},
  // {path:'wakanda', loadChildren:()=> import('./wakanda/wakanda.module').then((m)=>m.WakandaModule),},
  // {path:'enigme', loadChildren:()=> import('./enigme/enigme.module').then((m)=>m.EnigmeModule),},
  // {path:'eshop', loadChildren:()=> import('./eshop/eshop.module').then((m)=>m.EshopModule),},
  // {path:'compte', loadChildren:()=> import('./compte/compte.module').then((m)=>m.CompteModule),},
  { path: 'compte', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'eshop', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'accueil', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'enigme', loadChildren: () => import('./enigm/enigm.module').then(m => m.EnigmModule) },
  { path: 'wakanda', loadChildren: () => import('./wakan/wakan.module').then(m => m.WakanModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
