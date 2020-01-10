import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'posts', loadChildren: './components/post-list/post-list.module#PostListModule', canActivate: [AuthGuardService]},
  {path: 'detail/:id', loadChildren: './components/post-details/post-details.module#PostDetailsModule', canActivate: [AuthGuardService]},
  {path: 'signin', loadChildren: './components/sign-in/sign-in.module#SignInModule'},
  {path: 'signup', loadChildren: './components/sign-up/sign-up.module#SignUpModule'},
  {path: '**', loadChildren: './components/page-not-found/page-not-found.module#PageNotFoundModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
