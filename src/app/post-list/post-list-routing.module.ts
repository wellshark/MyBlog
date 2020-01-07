import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-list.component';
import {ModalInputsComponent} from '../modal-inputs/modal-inputs.component';

const routes: Routes = [
  {
    path: '', component: PostListComponent, children: [{path: '', component: ModalInputsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListRoutingModule {
}
