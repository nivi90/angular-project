import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {  Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { IAlbum } from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = environment.jsonplaceholderUrl;

  constructor(
    private httpClient: HttpClient
  ) { }
  getAllAlbums(): Observable<Array<IAlbum>> {
    const requestUrl = `${this.baseUrl}/albums`;
    return this.httpClient.get<Array<IAlbum>>(requestUrl).pipe(
      map((albums) => {
        return albums;
      }),
    catchError(error => {
      return throwError(error);
    })
    );

  }


  getAlbumByUserId(userId: number): Observable<IAlbum> {
    const requestUrl = `${this.baseUrl}/albums/${userId}`;
    return this.httpClient.get<IAlbum>(requestUrl).pipe(
      map((album) => {
        return album;
      }),
    catchError(error => {
      return throwError(error);
    })
    );


  }

}
