import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../post.service';
import {Post} from '../../post.model';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post;
  isModalShow;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post = {
      id: post.payload.id,
      ...post.payload.data()
    } as Post);
  }

  update(postFields) {
    this.postService.updatePost(
      {
        id: this.post.id,
        title: postFields.title,
        description: postFields.description
      }
    );
  }
}
