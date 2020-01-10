import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalInputsComponent} from './modal-inputs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ModalInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalInputsComponent
  ]
})
export class ModalInputsModule { }
