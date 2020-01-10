import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalInputsService} from '../../services/modal-inputs.service';
import {Subscription} from 'rxjs';
import {ModalSettings} from '../../interfaces/modal-settings.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-modal-inputs',
  templateUrl: './modal-inputs.component.html',
  styleUrls: ['./modal-inputs.component.scss']
})
export class ModalInputsComponent implements OnInit, OnDestroy {
  settings: ModalSettings;
  isModalVisible = false;
  form: FormGroup;
  private subscriptionOnCreate: Subscription;
  private subscriptionOnToggleVisibility: Subscription;
  private subscriptionOnEraseInputs: Subscription;

  constructor(private share: ModalInputsService) {
    this.formGroupSettings();
    this.modalSubscribeEvents();
  }

  ngOnInit() {
  }

  setFormData(): void {
    this.form.patchValue({title: this.settings.title, description: this.settings.description});
  }

  formGroupSettings(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  modalSubscribeEvents(): void {
    this.subscriptionOnCreate = this.share.onCreate.subscribe(settings => {
      this.settings = settings;
      this.setFormData();
    });
    this.subscriptionOnToggleVisibility = this.share.onToggleVisibility.subscribe(() => {
      this.isModalVisible = !this.isModalVisible;
    });
    this.subscriptionOnEraseInputs = this.share.onEraseInputs.subscribe(() => {
      this.settings.title = this.settings.description = '';
    });
  }


  saveValues() {
    if (this.form.valid) {
      this.share.doSave(this.form.value.title, this.form.value.description);
    }
  }

  toggleVisibility() {
    this.share.doToggleVisibility();
  }

  ngOnDestroy() {
    this.subscriptionOnCreate.unsubscribe();
    this.subscriptionOnToggleVisibility.unsubscribe();
    this.subscriptionOnEraseInputs.unsubscribe();
  }
}
