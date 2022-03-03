import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferInitation } from './Implementor/offer-initation';
import { Product } from './Products/product';
import { RbbComponent } from './Products/rbb/rbb.component';

import { RzbComponent } from './Products/rzb/rzb.component';

@NgModule({
  declarations: [
    AppComponent,
    RzbComponent,
    RbbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[OfferInitation],
  bootstrap: [AppComponent]
})
export class AppModule { }
