import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IAlbum } from 'src/app/shared/models/album';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'title', 'userId'];

  public listOfAlbums: Array<IAlbum> = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  getAllAlbums() {
    console.log('the called');
    this.albumsService.getAllAlbums().subscribe((albums) => {
      this.listOfAlbums = albums;
      console.log('the listOfAlbums', this.listOfAlbums);
    }, error => {
      console.log('the error ', error)
    });
  }

  navigateToAlbumsByUserId(album: IAlbum) {
    this.router.navigate(['albums', album.id]);
  }


}


