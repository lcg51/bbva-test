import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    SearchInputComponent,
    NavigateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      SearchInputComponent,
      NavigateComponent,
      ModalComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
