import {Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    isAdmin: false,
    id: ''
  };

  constructor() {
    this.user.id = '';
  }

  signIn(user: User) {
    this.user.id = user.id;
    this.user.isAdmin = user.isAdmin;
  }

  signOut() {
    this.user.id = '';
  }
}
