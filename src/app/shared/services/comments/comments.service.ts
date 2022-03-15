import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IComment } from '../../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = environment.jsonplaceholderUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllComments(): Observable<Array<IComment>>{
    const requestUrl = `${this.baseUrl}/comments`;
    return this.httpClient.get<Array<IComment>>(requestUrl).pipe(
      map((comments) => {
         return comments;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
 }

 getCommentsByPostId(postId: number): Observable<Array<IComment>>{
   const requestUrl = `${this.baseUrl}/comments`;
   return this.httpClient.get<Array<IComment>>(requestUrl).pipe(
     map((comments) => {
        return comments.filter(comment =>  comment.postId == postId);
     }),
     catchError(error => {
       return throwError(error);
     })
   );
  }

}