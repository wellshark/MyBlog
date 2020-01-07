import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'posts', loadChildren: './post-list/post-list.module#PostListModule', canActivate: [AuthGuardService]},
  {path: 'detail/:id', loadChildren: './post-details/post-details.module#PostDetailsModule', canActivate: [AuthGuardService]},
  {path: 'signin', loadChildren: './sign-in/sign-in.module#SignInModule'},
  {path: 'signup', loadChildren: './sign-up/sign-up.module#SignUpModule'},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
