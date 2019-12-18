import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { User } from '../models/User';
import { userInfo } from 'os';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSubject: Subject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new Subject<User>();
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.;
  // }

  login(email: string, password: string) {
    // this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
    let tmp: User = { id: 1, email: "some@mail.com" };
    return of(tmp).pipe(map(s => {
      if (!!s) {
        localStorage.setItem("user", JSON.stringify(s))
        this.currentUserSubject.next(s);
      }
    }));
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}