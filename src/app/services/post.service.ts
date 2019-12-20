import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { Observable, of, observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})



export class PostService {
  
 private url:string = environment.apiUrl+"/posts";
 private headers:HttpHeaders;
 
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization',"Bearer " + localStorage.getItem('jwt'));
   }

  getAll(): Observable<Post[]> {
    return this.client.get<Post[]>(this.url);
  }

  getAllInPage(begin: number, amountPerPage: number): Observable<Post[]> {
    return this.client.get<Post[]>(this.url + "/page?start=" + begin + "&limit=" + amountPerPage);
  }

  getById(id: string) {
    return this.client.get<Post>(`${this.url}/${id}`);
  }

  getPostsByUserId(id:any){
    // return this.client.get<Post[]>(`${this.url}/user/${id}/posts`);
    return of({id:1, data:{userId:1,title:"some title", description:"<p>some desc</p>", pictureUrl:"https://via.placeholder.com/150/771796", creationDate:"now", categories:["category1"]}});
  }

  addPost(post:Post):Observable<Post>{
    return this.client.post<Post>(`${this.url}`,post);
  }

  delete(id:any){
    
    // return this.client.delete<Post>(`${this.url}/${id}`, {headers:headers});
    return of(true);
  }

  update(post:Post){
   // return this.client.put<Post>(`${this.url}/${post.id}`,post,{headers:this.headers});
   return of(true);
  }
}
