import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() settings;
  @Output() onAdd = new EventEmitter();
  isShowModal = false;

  constructor(private route: ActivatedRoute,
              private auth: AuthService) {
  }

  ngOnInit() {
    // console.log(this.settings);
    // this.setup();
  }

  // setup() {
  //   console.log(this.route.snapshot.url[0].path);
  //   switch (this.route.snapshot.url[0].path) {
  //     case 'signup':
  //       this.settings.controlButtons = true;
  //   }
  // }
}
