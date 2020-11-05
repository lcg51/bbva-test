import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login.routes';
import { LoginComponent } from './pages/login.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginRoutingModule,
    InfiniteScrollModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
