import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from './../enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private enrollment:EnrollmentService, ) { }

  userModel:User = new User('Bassem', 'bassemdesouqi78@gmail.com',12345, 12345, "please select option")

  users:any = []

  onSubmit(){
    console.log(this.userModel); 
    this.enrollment.enroll(this.userModel).subscribe(res=>{
      console.log('success', res);

      this.users.push(res)
      localStorage.setItem("user", JSON.stringify(this.users))
      
      // localStorage.removeItem("users")
    },err =>{
      console.log('Error', err);
    })
  }

  ngOnInit(): void {
  }

}
