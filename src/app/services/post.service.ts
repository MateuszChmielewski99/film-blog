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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Tytuł2",
      pictureUrl: "https://via.placeholder.com/600/92c952",
      date: new Date().toDateString(),
      category: ["test1","test2"]
    }
  ];

  constructor() { }

  getAll(): Post[] {
    return this.posts;
  }

  getById(id: number) {
      return this.posts[id - 1];
  }
}
