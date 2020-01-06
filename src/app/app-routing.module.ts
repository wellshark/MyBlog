import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailComponent} from './post-list/post-detail/post-detail.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'posts', component: PostListComponent, canActivate: [AuthGuardService]},
  {path: 'detail/:id', component: PostDetailComponent, canActivate: [AuthGuardService]},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
