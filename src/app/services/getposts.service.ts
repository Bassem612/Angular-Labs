import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPosts} from './IPosts'

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {

  constructor(private http:HttpClient) { }
 
  url:string = "https://jsonplaceholder.typicode.com/posts"
  getPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.url)
  }
}
