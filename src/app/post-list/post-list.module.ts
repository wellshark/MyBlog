import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostListComponent} from './post-list.component';
import {PostListRoutingModule} from './post-list-routing.module';
import {ModalInputsModule} from '../modal-inputs/modal-inputs.module';



@NgModule({
  declarations: [
    PostListComponent,
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    ModalInputsModule
  ],
})
export class PostListModule { }
