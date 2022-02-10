import { Component, OnInit } from '@angular/core';
import { User2 } from './../user2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userModel:User2 = new User2 ("bassemdesouqi78@gmail.com" , 123)

  ngOnInit(): void {
  }

}
