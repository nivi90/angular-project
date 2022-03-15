import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../shared/material.module';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment/comment.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostComponent,
    PostListComponent,
    CommentListComponent,
    CommentComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }