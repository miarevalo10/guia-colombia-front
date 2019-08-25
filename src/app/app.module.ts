import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TravelListComponent } from './travel-list/travel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
