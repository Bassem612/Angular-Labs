import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  
  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/register";
  enroll(user:User){
    return this.http.post(this.url, user)
  }
}
