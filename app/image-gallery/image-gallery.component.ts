import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ImageGalleryService} from "../Services/ImageServices/image-gallery-service";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {


 private visibleImages : any[] = [];

  constructor(private imageGalleryService : ImageGalleryService) {

   this.visibleImages =  this.imageGalleryService.getImages();
  }

  ngOnInit() {
  }

}
