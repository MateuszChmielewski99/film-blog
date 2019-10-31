import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments?_limit=5'
  constructor(private client: HttpClient) { }

  addComent(comment:Comment):Observable<any>{
    return this.client.post<Comment>(this.url, comment);
  }

  getComments(): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.url}`);
  }


}
