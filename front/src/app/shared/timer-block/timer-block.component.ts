import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-timer-block',
  templateUrl: './timer-block.component.html',
  styleUrls: ['./timer-block.component.scss']
})
export class TimerBlockComponent implements OnChanges {

  @Input() days: string;
  @Input() hours: string;
  @Input() minutes: string;
  @Input() seconds: string;
  @Output() keyUpEmitter = new EventEmitter();

  constructor() {}

  ngOnChanges(changes) {
      console.log(changes);
  }
}
