import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgCryptoService, PkiService } from 'projects/ng-crypto/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NgCryptoService,
    PkiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
