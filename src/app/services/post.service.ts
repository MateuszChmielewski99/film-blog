import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll():Post[]{
    return [
      {
        id:1,
        userId:1,
        description:"Opis",
        title:"Tytuł",
        pictureUrl:"./assets/ramen.jpg",
        date: new Date().toDateString()
      },
      {
        id:2,
        userId:1,
        description:"Opis2",
        title:"Tytuł2",
        pictureUrl:"https://via.placeholder.com/600/92c952",
        date: new Date().toDateString()
      }
    ]
  }
}
