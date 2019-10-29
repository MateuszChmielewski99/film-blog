import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class PostService {

 private url:string = 'http://localhost:8080/post';

  constructor(private client:HttpClient) { }

  getAll():Observable<Post[]>{
    return this.client.get<Post[]>(this.url);
  }

  getById(id: number) {
      return this.client.get<Post>(`${this.url}/${id}`);
  }

  updatePost(postId, updatedPost){
    
  }
}
