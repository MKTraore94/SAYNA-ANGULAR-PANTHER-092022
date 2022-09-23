import { NgModule, LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { PopupboxComponent } from './components/popupbox/popupbox.component';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';
import { EnigmModule } from './enigm/enigm.module';
import { WakanModule } from './wakan/wakan.module';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    ScrollBarComponent,
    PopupboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    WakanModule,
    StoreModule,
    EnigmModule,
    HttpClientModule,
    UserModule,
    NgxPaginationModule
  ],
  providers: [
      {
        provide: LOCALE_ID,
        useValue:'fr-FR'
      }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
