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
    return !(Object.keys(this.auth.user).length === 0);
  }
}
