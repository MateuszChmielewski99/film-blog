import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class PostService {

 private url:string = 'http://localhost:5000/foodblogcloudeapi/us-central1/api/posts';

  constructor(private client:HttpClient) { }

  getAll():Observable<Post[]>{
    return this.client.get<Post[]>(this.url);
  }

  getAllInPage(begin:number, amountPerPage:number):Observable<Post[]>{
    return this.client.get<Post[]>(this.url + "/page?start=" + begin + "&limit=" + amountPerPage);
  }

  getById(id: string) {
      return this.client.get<Post>(`${this.url}/${id}`);
  }

  updatePost(postId, updatedPost){
    
  }
}
