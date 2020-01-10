import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostDetailsComponent} from './post-details.component';
import {PostDetailsRoutingModule} from './post-details-routing.module';
import {ModalInputsModule} from '../modal-inputs/modal-inputs.module';


@NgModule({
  declarations: [
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    ModalInputsModule

  ],
})
export class PostDetailsModule {
}
