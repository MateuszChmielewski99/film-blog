import { Injectable } from '@angular/core';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})



export class PostService {

  private posts = [
    {
      id: 1,
      userId: 1,
      description: "Opis",
      title: "Tytuł",
      pictureUrl: "./assets/ramen.jpg",
      date: new Date().toDateString(),
      category: ["soup"]
    },
    {
      id: 2,
      userId: 1,
      description: "Opis2",
      title: "Tytuł2",
      pictureUrl: "https://via.placeholder.com/600/92c952",
      date: new Date().toDateString(),
      category: []
    }
  ];

  constructor() { }

  getAll(): Post[] {
    return this.posts;
  }

  getById(id: number) {
    if (id >= this.posts.length)
      return new Post();
    else
      return this.posts[id];
  }
}
