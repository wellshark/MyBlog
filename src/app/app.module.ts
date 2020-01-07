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
import {PostDetailsComponent} from './post-details/post-details.component';
import {ModalInputsComponent} from './modal-inputs/modal-inputs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {HeaderService} from './header.service';
import {ModalInputsService} from './modal-inputs.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    AngularFirestore,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
