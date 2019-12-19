import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { User } from '../models/User';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private url: string = environment.apiUrl + '';
  constructor(private http: HttpClient) { }
  private loggedIn = new BehaviorSubject<boolean>(this.checkIfUserAlreadySignIn());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  signIn(user: User):boolean{
    let result:boolean = false;
    //this.http.post<any>(this.url, user)
    of(true).subscribe(s => {
      console.log(s);
      this.loggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(user));
      result = true;
    },
      error => {
        this.loggedIn.next(false);
        result = false;
      });
    return result;
  }


  signOut(){
    this.loggedIn.next(false);
    localStorage.removeItem('user');
  }


  private checkIfUserAlreadySignIn():boolean{
    return !!localStorage.getItem('user');
  }
}