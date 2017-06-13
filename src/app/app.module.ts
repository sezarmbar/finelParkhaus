import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AgmCoreModule } from 'angular2-google-maps/core';

import 'hammerjs';


import { ServiceAppRoutingModule } from './app-routing.module';
// service
import { serivceModul } from './service/';
//pipe
import { ParkTablePipe } from './pages/haus-park/pipe';

import { AppComponent } from './app.component';
import { SliderComponent } from './share/slider';
import { HomeComponent , DialogContent } from './pages/home';
import { HausTableComponent , HausParkComponent , HausMapComponent , DirectionsMapDirective , SideMapComponent , JsonPolyLineDirective} from './pages/haus-park';


@NgModule({
  declarations: [
    AppComponent,
    DialogContent,
    SliderComponent,
    HomeComponent,
    HausParkComponent,
    HausMapComponent,
    DirectionsMapDirective,
    SideMapComponent,
    JsonPolyLineDirective,
    HausTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule,
    ServiceAppRoutingModule,
    ParkTablePipe,
    serivceModul,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI4N7QdySwfP8aO0oWipZPbGKJHGAUI_M'
    })
  ],
  entryComponents: [DialogContent],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
