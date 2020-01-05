import {Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {};

  constructor() {
  }

  signIn(user: User) {
    this.user = user;
  }

  signOut() {
    this.user = {};
  }
}
