import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      InputComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
