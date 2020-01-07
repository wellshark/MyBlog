import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // settings = {
  //   isExit: false,
  //   isAdmin: true,
  //   isSignUpLink: false,
  //   isSignInLink: false
  // };
  settings;

  constructor(
              private auth: AuthService,
              private share: HeaderService) {
  }

  ngOnInit() {
    this.settings = this.share.settings;
  }

  // setup() {
  //   switch (this.route.snapshot.url[0].path) {
  //     case 'signup':
  //       this.settings.isSignInLink = true;
  //       break;
  //     case 'signin':
  //       this.settings.isSignUpLink = true;
  //       break;
  //     case 'posts':
  //       this.settings.isAdmin = this.auth.user.isAdmin;
  //       this.settings.isExit = true;
  //       break;
  //     case 'detail':
  //       this.settings.isExit = true;
  //       break;
  //   }
  // }
}
