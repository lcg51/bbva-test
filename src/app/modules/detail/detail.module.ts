import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class DetailModule { }
