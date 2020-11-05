import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';


import {
  HttpClientModule
} from '@angular/common/http';
import {
  HomeComponent
} from './home.component';
import {
  HomeRoutingModule
} from './home-routing.module';
import {
  SharedModule
} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule {}
