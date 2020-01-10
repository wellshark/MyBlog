import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignUpComponent} from './sign-up.component';
import {SignUpRoutingModule} from './sign-up-routing.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    SignUpRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
