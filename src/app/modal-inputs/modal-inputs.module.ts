import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalInputsComponent} from './modal-inputs.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ModalInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ModalInputsComponent
  ]
})
export class ModalInputsModule { }
