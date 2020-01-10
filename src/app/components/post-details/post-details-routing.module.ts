import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailsComponent} from './post-details.component';
import {ModalInputsComponent} from '../modal-inputs/modal-inputs.component';

const routes: Routes = [
  {
    path: '', component: PostDetailsComponent, children: [
      {path: '', component: ModalInputsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailsRoutingModule {
}
