import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})



export class PostService {
  
 private url:string = environment.apiUrl+"/posts";
  constructor(private client: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.client.get<Post[]>(this.url);
  }

  getAllInPage(begin: number, amountPerPage: number): Observable<Post[]> {
    return this.client.get<Post[]>(this.url + "/page?start=" + begin + "&limit=" + amountPerPage);
  }

  getById(id: string) {
    return this.client.get<Post>(`${this.url}/${id}`);
  }

  updatePost(postId, updatedPost) {

  }

  addPost(post:Post):Observable<Post>{
    return this.client.post<Post>(`${this.url}`,post);
  }
}
