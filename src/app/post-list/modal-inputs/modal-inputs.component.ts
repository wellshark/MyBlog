import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  emmitValue() {
    if (this.title && this.description) {
      this.onSave.emit({
        title: this.title,
        description: this.description
      });
      this.title = '';
      this.description = '';
    }

  }
}
