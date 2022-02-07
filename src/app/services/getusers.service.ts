import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IUsers} from './IUsers'

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http :HttpClient) { }
   url:string = "https://jsonplaceholder.typicode.com/users";
  getUsers():Observable<IUsers[]>{
      return this.http.get<IUsers[]>(this.url)
  }
}
