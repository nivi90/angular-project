import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IPost } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = environment.jsonplaceholderUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosts(): Observable<Array<IPost>>{
    const requestUrl = `${this.baseUrl}/posts`;
    return this.httpClient.get<Array<IPost>>(requestUrl).pipe(
      map((posts) => {
         return posts;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
 }

 getPostsByUserId(userId: number): Observable<Array<IPost>>{
   const requestUrl = `${this.baseUrl}/posts`;
   return this.httpClient.get<Array<IPost>>(requestUrl).pipe(
     map((posts) => {
        return posts.filter(post => post.userId == userId);
     }),
     catchError(error => {
       return throwError(error);
     })
   );
 }
}