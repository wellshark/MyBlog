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
  // @Input() settings;
  // @Output() onAdd = new EventEmitter();
  settings = {
    isExit: false,
    isAdmin: false,
    isSignUpLink: false,
    isSignInLink: false
  };

  // isShowModal = false;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private share: HeaderService) {
  }

  ngOnInit() {
    // console.log(this.settings);
    // this.setup();
    this.setup();
  }

  setup() {
    // console.log(this.route.snapshot.url[0].path);

    switch (this.route.snapshot.url[0].path) {
      case 'signup':
        this.settings.isSignInLink = true;
        break;
      case 'signin':
        this.settings.isSignUpLink = true;
        break;
      case 'posts':
        this.settings.isAdmin = this.auth.user.isAdmin;
        this.settings.isExit = true;
        break;
      case 'detail':
        this.settings.isExit = true;
        break;
    }
  }
}
