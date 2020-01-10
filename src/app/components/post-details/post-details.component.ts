import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../interfaces/post.interface';
import {AuthService} from '../../services/auth.service';
import {ModalInputsService} from '../../services/modal-inputs.service';
import {Subscription} from 'rxjs';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post: Post;
  private subscription: Subscription;
  private subscriptionPost: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private auth: AuthService,
    private modalInputsService: ModalInputsService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    this.getPost(this.initModal);
    this.subscription = this.modalInputsService.onSave.subscribe(data => this.update(data));
    this.headerService.settings.isExit = true;
  }

  getPost(callback): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptionPost = this.postService.getPost(id).subscribe(post => {
      this.post = post.payload.data() as Post;
      callback.call(this);
    });

  }

  initModal(): void {
    this.modalInputsService.doCreate('Edit post', 'Save changes', this.post.title, this.post.description);
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
    this.headerService.settings.isExit = false;
    this.subscriptionPost.unsubscribe();
  }
}
