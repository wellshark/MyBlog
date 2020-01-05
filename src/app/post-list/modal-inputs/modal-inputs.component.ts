import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-modal-inputs',
  templateUrl: './modal-inputs.component.html',
  styleUrls: ['./modal-inputs.component.scss']
})
export class ModalInputsComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() isModalShow;
  @Output() onSave: EventEmitter<object> = new EventEmitter<object>();
  @Output() onClose = new EventEmitter();
  isEraseInputs = true;

  constructor() {
  }

  ngOnInit() {
    if (this.title && this.description) {
      this.isEraseInputs = false;
    }
  }

  emmitValue() {
    if (this.title && this.description) {
      this.onSave.emit({
        title: this.title,
        description: this.description
      });
      if (this.isEraseInputs) {
        this.title = '';
        this.description = '';
      }

    }

  }
}
