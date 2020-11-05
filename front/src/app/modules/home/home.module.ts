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
} from './pages/home.component';
import {
  HomeRoutingModule
} from './home.routes';
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
