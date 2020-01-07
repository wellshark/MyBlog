import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalInputsComponent} from '../modal-inputs/modal-inputs.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
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
