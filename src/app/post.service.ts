import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Post} from './post.mode';

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
    return this.firestore.collection('posts/').doc(postId).get();

  }

  createPost(post: Post) {
    return this.firestore.collection('posts').doc(post.id).set(post);
  }

  updatePost(post: Post): void {
    delete post.id;
    this.firestore.doc('posts/' + post.id).update(post);
  }

  deletePost(postId: string) {
    return this.firestore.doc('posts/' + postId).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }
}
