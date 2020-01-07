import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalInputsService} from '../modal-inputs.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-modal-inputs',
  templateUrl: './modal-inputs.component.html',
  styleUrls: ['./modal-inputs.component.scss']
})
export class ModalInputsComponent implements OnInit, OnDestroy {
  modalTitle;
  modalButtonText;
  title;
  description;
  isModalVisible = false;
  private subscriptionOnCreate: Subscription;
  private subscriptionOnToggleVisibility: Subscription;
  private subscriptionOnEraseInputs: Subscription;

  constructor(private share: ModalInputsService) {
    this.subscriptionOnCreate = this.share.onCreate.subscribe(settings => {
      this.title = settings.title;
      this.description = settings.description;
      this.modalTitle = settings.modalTitle;
      this.modalButtonText = settings.modalButtonText;
    });
    this.subscriptionOnToggleVisibility = this.share.onToggleVisibility.subscribe(() => {
      this.isModalVisible = !this.isModalVisible;
    });
    this.subscriptionOnEraseInputs = this.share.onEraseInputs.subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptionOnCreate.unsubscribe();
    this.subscriptionOnToggleVisibility.unsubscribe();
    this.subscriptionOnEraseInputs.unsubscribe();
  }
}
