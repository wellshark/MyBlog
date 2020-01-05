import {Component, EventEmitter, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import Utils from '../utils';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  title = '';
  desc = '';
  private date: Date;
  headerSettings = {
    isPost: true,
    isAdmin: true
  };
  isModalShow = false;

  constructor(private postService: PostService,
              private auth: AuthService
  ) {
    this.date = new Date();
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      date => {
        this.posts = date.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Post;
          }
        );
      }
    );
  }

  create(postFields): void {
    this.postService.createPost({
      id: Utils.getUniqueId(),
      title: postFields.title,
      description: postFields.description
    });
  }
  stopRouting(event: Event) {
    event.stopPropagation();
  }
  delete(id: string) {
    this.postService.deletePost(id);
  }


}
