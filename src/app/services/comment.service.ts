import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comment} from '../models/comment';
import { CommentDto } from '../models/comment-dto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'http://localhost:8000/comment'
  constructor(private client: HttpClient) { }

  addComent(comment:CommentDto):Observable<any>{
    return this.client.post<CommentDto>(this.url, comment);
  }

  getComments(postId:number): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.url}?postId=${postId}`);
  }


}
