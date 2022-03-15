import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlbumsComponent } from './albums.component'
import { AlbumsRoutingModule } from './albums-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MaterialModule
  ]
})
export class AlbumsModule { }