import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Post} from './post.model';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User) {
    return this.firestore.collection('users').doc(user.id).set(user);
  }
}
