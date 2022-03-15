import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IComment } from 'src/app/shared/models/comment';
import { CommentsService } from 'src/app/shared/services/comments/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, OnChanges {

  @Input() postId: number | undefined;
  public listOfComments: Array<IComment> = [];

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.postId) {
      this.getAllCommentsByPostId(this.postId);
    }
  }

  getAllCommentsByPostId(postId: number) {
    this.commentsService.getCommentsByPostId(postId).subscribe(comments => {
      this.listOfComments = comments;
    }, (error) => {
      console.log('the error is ', error);
    });
  }

}