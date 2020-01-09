import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settings;

  constructor(
    private auth: AuthService,
    private share: HeaderService) {
  }

  ngOnInit() {
    this.settings = this.share.settings;
  }

}
