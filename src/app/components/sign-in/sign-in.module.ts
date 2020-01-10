import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in.component';
import {SignInRoutingModule} from './sign-in-routing.module';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    SignInRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
