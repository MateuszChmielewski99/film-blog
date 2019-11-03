import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'http://localhost:8000/comment'
  constructor(private client: HttpClient) { }

  addComent(comment:Comment):Observable<any>{
    return this.client.post<Comment>(this.url, comment);
  }

  getComments(): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.url}`);
  }


}
