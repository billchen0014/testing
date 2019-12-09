import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtHeaderComponent } from './at-header/at-header.component';
import { MapsComponent } from './maps/maps.component';
import { CompassComponent } from './compass/compass.component';
import { BearingSliderComponent } from './bearing-slider/bearing-slider.component';
import { StatusComponent } from './status/status.component';
@NgModule({
  declarations: [
    AppComponent,
    AtHeaderComponent,
    MapsComponent,
    CompassComponent,
    BearingSliderComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
