import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import Utils from '../utils';
import {AuthService} from '../auth.service';
import {HeaderService} from '../header.service';
import {ModalInputsService} from '../modal-inputs.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  private subscriptionOnClick: Subscription;
  private subscriptionOnSave: Subscription;
  private subscriptionGetPosts: Subscription;

  constructor(private postService: PostService,
              private auth: AuthService,
              private headerService: HeaderService,
              private modalInputsService: ModalInputsService,
  ) {
  }

  ngOnInit() {
    this.modalInit();
    this.getPosts();
    this.headerInit();
  }

  headerInit(): void {
    this.headerService.settings.isExit = true;
    this.headerService.settings.isAdmin = this.auth.user.isAdmin;
    this.subscriptionOnClick = this.headerService.onClick.subscribe(() => {
      this.modalInputsService.onToggleVisibility.emit();
    });
  }

  modalInit() {
    this.modalInputsService.doCreate('Create post', 'Save', '', '');
    this.subscriptionOnSave = this.modalInputsService.onSave.subscribe(data => {
      this.saveModalData(data);
    });
  }

  getPosts(): void {
    this.subscriptionGetPosts = this.postService.getPosts().subscribe(
      date => {
        this.posts = date.map(e => {
            return e.payload.doc.data() as Post;
          }
        );
      }
    );
  }

  saveModalData(data): void {
    this.create(data);
    this.modalInputsService.doEraseInputs();
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

  ngOnDestroy() {
    this.subscriptionOnClick.unsubscribe();
    this.subscriptionOnSave.unsubscribe();
    this.subscriptionGetPosts.unsubscribe();
    this.headerService.settings.isExit = false;
    this.headerService.settings.isAdmin = false;
  }

}
