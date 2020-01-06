import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalInputsService {
  settings = {
    title: '',
    description: '',
    modalTitle: '',
    modalButtonText: ''
  };
  onCreate: EventEmitter<object> = new EventEmitter();
  onSave: EventEmitter<object> = new EventEmitter();
  onToggleVisibility = new EventEmitter();
  onEraseInputs = new EventEmitter();

  constructor() {
  }

  doCreate(modalTitle, modalButtonText, title, description): void {
    this.settings.modalTitle = modalTitle;
    this.settings.modalButtonText = modalButtonText;
    this.settings.title = title;
    this.settings.description = description;
    this.onCreate.emit(this.settings);
  }

  doSave(title, description): void {
    this.settings.title = title;
    this.settings.description = description;
    this.onSave.emit(this.settings);
    this.doToggleVisibility();
  }

  doToggleVisibility(): void {
    this.onToggleVisibility.emit();
  }

  doEraseInputs(): void {
    this.onEraseInputs.emit();
  }
}
