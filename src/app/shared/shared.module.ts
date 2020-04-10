import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
  declarations: [
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      SearchInputComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
