import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl1: string = '';
  //constructor(private photosService: PhotosService) {}
  onClick1() {
    this.fetchPhoto();
  }

  onclick2() {
    this.fetchPhoto();
  }

  fetchPhoto1() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl1 = response.urls.regular;
    });
  }

  fetchPhoto2() {
    this.photosService.getPhoto().subscribe((x) => {
      this.photoUrl1 = x.urls.regular;
    });
  }

  //////////////////////////////////////////////////////////////////////////
  photoUrl: string = '';

  constructor(private photosService: PhotosService) {}

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit() {}
}
