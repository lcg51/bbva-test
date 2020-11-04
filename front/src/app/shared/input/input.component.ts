import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnChanges {

    public model = '';
    @Input() label: string;
    @Input() value: string;
    @Input() placeholder: string;
    @Input() type = 'text';
    @Input() validation: string;
    @Input() errorMsg: string;
    @Input() error = false;
    @Output() keyUpEmitter = new EventEmitter();
    public predict$ = new Subject<string>();


    constructor() {}

    ngOnChanges() {}

    public keyUp(event: Event) {
        let res = true;
        if (this.validation != null && this.model.length > 3) {
            const patt = new RegExp(this.validation);
            res = patt.test(this.model);
            this.error = !res;
        }
        this.keyUpEmitter.emit({valid: res, value: this.model});
    }
}
