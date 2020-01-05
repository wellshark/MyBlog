import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {PostListComponent} from './post-list/post-list.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {HeaderComponent} from './header/header.component';
import {PostDetailComponent} from './post-list/post-detail/post-detail.component';
import {ModalInputsComponent} from './post-list/modal-inputs/modal-inputs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {HeaderService} from './header.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    PostDetailComponent,
    ModalInputsComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFirestore,
    AuthGuardService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
