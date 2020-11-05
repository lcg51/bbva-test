import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  InputComponent
} from './input/input.component';
import {
  TimerBlockComponent
} from './timer-block/timer-block.component';


@NgModule({
  declarations: [
    InputComponent,
    TimerBlockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    TimerBlockComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
