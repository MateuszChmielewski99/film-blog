import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url:string = 'https://jsonplaceholder.typicode.com/comments?_limit=5'
  constructor(private client:HttpClient) { }
  
   getComments():Observable<Comment[]>{
    return this.client.get<Comment[]>(`${this.url}`);
  }
}
