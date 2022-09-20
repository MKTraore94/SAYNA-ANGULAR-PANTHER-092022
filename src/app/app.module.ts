import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { PopupboxComponent } from './components/popupbox/popupbox.component';
import { AcceuilModule } from './acceuil/acceuil.module';
import { WakandaModule } from './wakanda/wakanda.module';
import { EshopModule } from './eshop/eshop.module';
import { EnigmeModule } from './enigme/enigme.module';
import { CompteModule } from './compte/compte.module';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    ScrollBarComponent,
    PopupboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule,
    WakandaModule,
    EshopModule,
    EnigmeModule,
    CompteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
