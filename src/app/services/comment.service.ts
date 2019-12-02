import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url:string = environment.apiUrl+"/comments";
  private headers: HttpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  constructor(private client: HttpClient) { }

  addComent(comment: Comment): Observable<any> {
    return this.client.post<Comment>(this.url,comment,{headers:this.headers});
  }

  getComments(postId: string): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.url}?postId=${postId}`);
  }

  getCaptchaValidataion(response): Observable<any> {
    return this.client.get<any>(`${this.url}/captcha?captchaResponse=${response}`);
  }


}
