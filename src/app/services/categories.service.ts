import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(client:HttpClient) { }

  getAll():Observable<string[]>{
    return of(["category1","category2","babeczki"]);
  }
}
