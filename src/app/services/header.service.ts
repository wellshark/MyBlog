import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  onClick = new EventEmitter();
  settings = {
    isExit: false,
    isAdmin: false,
    isSignUpLink: false,
    isSignInLink: false
  };
  public doClick() {
    this.onClick.emit();
  }

}
