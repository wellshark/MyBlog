import {EventEmitter, Injectable} from '@angular/core';
import {ModalSettings} from './modal-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ModalInputsService {
  settings: ModalSettings;
  onCreate: EventEmitter<object> = new EventEmitter();
  onSave: EventEmitter<object> = new EventEmitter();
  onToggleVisibility = new EventEmitter();
  onEraseInputs = new EventEmitter();

  constructor() {
  }

  doCreate(modalTitle, modalButtonText, title, description): void {
    this.settings = {
      title,
      description,
      modalTitle,
      modalButtonText
    };
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
