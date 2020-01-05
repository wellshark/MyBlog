import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) {
  }

  getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  getPost(postId: string) {
    return this.firestore.collection('posts/').doc(postId).snapshotChanges();
  }

  createPost(post: Post) {
    return this.firestore.collection('posts').doc(post.id).set(post);
  }

  updatePost(post: Post) {
    return this.firestore.doc('posts/' + post.id).update(post);
  }

  deletePost(postId: string) {
    return this.firestore.doc('posts/' + postId).delete();
  }
}
