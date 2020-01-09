import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalInputsService} from '../modal-inputs.service';
import {Subscription} from 'rxjs';
import {ModalSettings} from '../modal-settings.model';


@Component({
  selector: 'app-modal-inputs',
  templateUrl: './modal-inputs.component.html',
  styleUrls: ['./modal-inputs.component.scss']
})
export class ModalInputsComponent implements OnInit, OnDestroy {
  settings: ModalSettings;
  isModalVisible = false;
  private subscriptionOnCreate: Subscription;
  private subscriptionOnToggleVisibility: Subscription;
  private subscriptionOnEraseInputs: Subscription;

  constructor(private share: ModalInputsService) {
    this.modalSubscribeEvents();
  }

  ngOnInit() {
  }

  modalSubscribeEvents(): void {
    this.subscriptionOnCreate = this.share.onCreate.subscribe(settings => {
      this.settings = settings;
    });
    this.subscriptionOnToggleVisibility = this.share.onToggleVisibility.subscribe(() => {
      this.isModalVisible = !this.isModalVisible;
    });
    this.subscriptionOnEraseInputs = this.share.onEraseInputs.subscribe(() => {
      this.settings.title = this.settings.description = '';
    });
  }


  saveValues() {
    this.share.doSave(this.settings.title, this.settings.description);
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
