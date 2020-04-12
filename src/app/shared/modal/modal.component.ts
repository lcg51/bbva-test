import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean;
  @Output() closeModalEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public closeModal() {
    this.closeModalEmitter.emit('close');
  }

}
