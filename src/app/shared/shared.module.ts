import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { NavigateComponent } from './navigate/navigate.component';


@NgModule({
  declarations: [
    SearchInputComponent,
    NavigateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      SearchInputComponent,
      NavigateComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
