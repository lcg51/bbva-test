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
} from './components/input/input.component';
import {
  TimerBlockComponent
} from './components/timer-block/timer-block.component';
import {
  ButtonComponent
} from './components/button/button.component';


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
