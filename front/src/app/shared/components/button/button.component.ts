import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import {
  Subject
} from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string;
  @Input() disabled: boolean;
  @Input() light: boolean;
  @Output() clickEmitter = new EventEmitter();
  public predict$ = new Subject < string > ();


  constructor() {}

  public click(ev: Event) {
    this.clickEmitter.emit(ev);
  }

}
