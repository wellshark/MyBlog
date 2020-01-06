import {Component, EventEmitter, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import Utils from '../utils';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';
import {ModalInputsComponent} from './modal-inputs/modal-inputs.component';
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

  constructor(private postService: PostService,
              private auth: AuthService,
              private headerService: HeaderService,
              private modalInputsService: ModalInputsService
  ) {
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
    this.subscriptionOnClick = this.headerService.onClick.subscribe(() => {
      this.modalInputsService.onToggleVisibility.emit();
    });
    this.subscriptionOnSave = this.modalInputsService.onSave.subscribe(data => {
      this.create(data);
      this.modalInputsService.doEraseInputs();
    });
    this.modalInit();
  }

  modalInit() {
    this.modalInputsService.doCreate('Create post', 'Save', '', '');
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
  }

}
