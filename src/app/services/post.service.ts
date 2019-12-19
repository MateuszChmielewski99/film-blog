import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';;
import { Observable, of } from 'rxjs';
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

  getPostsByUserId(id:any){
    // return this.client.get<Post[]>(`${this.url}/user/${id}/posts`);
    return of({id:1, data:{userId:1,title:"some title", description:"<p>some desc</p>", pictureUrl:"https://via.placeholder.com/150/771796", creationDate:"now", categories:[]}});
  }

  addPost(post:Post):Observable<Post>{
    return this.client.post<Post>(`${this.url}`,post);
  }
}
