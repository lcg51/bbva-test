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
import {
  ButtonComponent
} from './button/button.component';


@NgModule({
  declarations: [
    InputComponent,
    TimerBlockComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    TimerBlockComponent,
    ButtonComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
