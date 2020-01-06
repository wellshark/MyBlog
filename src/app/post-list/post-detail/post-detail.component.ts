import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../post.service';
import {Post} from '../../post.model';
import {AuthService} from '../../auth.service';
import {ModalInputsService} from '../../modal-inputs.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private auth: AuthService,
    private modalInputsService: ModalInputsService
  ) {
  }

  ngOnInit() {
    this.getPost();
    this.subscription = this.modalInputsService.onSave.subscribe(data => this.update(data));

  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      this.post = {
        id: post.payload.id,
        ...post.payload.data()
      } as Post;
      this.modalInputsService.doCreate('Edit post', 'Save changes', this.post.title, this.post.description);
    });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
