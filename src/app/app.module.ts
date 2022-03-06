import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RbbModifyComponent } from './products/rbb-modify/rbb-modify.component';
import { RbbOnboardingComponent } from './products/rbb-onboarding/rbb-onboarding.component';
import { RzbModifyComponent } from './products/rzb-modify/rzb-modify.component';
import { IvbComponent } from './products/ivb/ivb.component';
import { RbbComponent } from './products/rbb/rbb.component';
import { RzbComponent } from './products/rzb/rzb.component';

@NgModule({
  declarations: [
    AppComponent,
    RbbOnboardingComponent,
    RbbModifyComponent,
    RzbModifyComponent,
    IvbComponent,
    RbbComponent,
    RzbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
