import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnChanges {

    public model = '';
    @Input() label: string;
    @Input() placeholder: string;
    @Input() errorMsg: string;
    @Input() items: Array<any>;
    @Input() error = true;
    @Output() keyUpEmitter = new EventEmitter();
    @Output() selectValueEmitter = new EventEmitter();
    public predict$ = new Subject<string>();
    public itemsF: Array<any>;
    public indexSelected = -1;
    public showItems = false;

    constructor() {}

    ngOnChanges() {
        this.itemsF = (this.items != null) ? this.items : [];
    }

    public toggleItems() {
        this.showItems = !this.showItems;
        console.log(this.showItems);
    }

    public filter() {
        this.itemsF = this.items.filter(item => item.name.toLowerCase().includes(this.model.toLowerCase()));
    }

    public selectValue(item: any) {
        this.model = item.name;
        this.indexSelected = -1;
        this.selectValueEmitter.emit(item);
        this.showItems = false;
    }
}
