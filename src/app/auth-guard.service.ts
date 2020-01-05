import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, private router: Router) {
  }

  canActivate() {
    console.log(this.auth.user);
    console.log(Object.keys(this.auth.user).length);
    // if (Object.keys(this.auth.user).length === 0) {
    //   return false;
    // } else {
    //   return true;
    // }
    return !(Object.keys(this.auth.user).length === 0);
  }
}
