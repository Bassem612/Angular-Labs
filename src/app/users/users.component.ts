import { Component, OnInit } from '@angular/core';
import { GetusersService } from './../services/getusers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:GetusersService) { }

  usersList:any;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data =>{
         this.usersList = data
      }
    )
  }

}
