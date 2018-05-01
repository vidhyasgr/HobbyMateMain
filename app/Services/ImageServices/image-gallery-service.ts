import {Injectable} from "@angular/core";
/**
 * Created by vidhyasagar on 29.03.18.
 */




@Injectable()
export class ImageGalleryService {

  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getSingleImage(id : number){

    return IMAGES.slice(0).find(images => images.id == id);
  }

}

  const IMAGES = [
  {"id": 1, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 2, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 3, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 4, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 5, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 6, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 7, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"},
  {"id": 8, "category" : "boats", "caption" : "View from a boat", "url" : "./assets/images/action-adult-dance.jpg"}

];

