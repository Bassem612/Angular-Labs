import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './../userName.validator';
import { ConfirmPasswordValidator } from './../ConfirmPasswordValidator';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb:FormBuilder ) { }
  // registerationForm = new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl('')
  // })

  registerationForm = this.fb.group({
    username:['',[Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin || adminstrator/)]], //  === this.fb.control  
    password:[''],
    confirmPassword:['']
  }, {validator : [ConfirmPasswordValidator]} 
  )

  get userName(){
    return this.registerationForm.get('username')
  }
  ngOnInit(): void {
  }

  // loadAPIData(){
  //   this.registerationForm.setValue({
  //     username: 'Bassem',
  //     password: '123',
  //     confirmPassword: '123'
  //   })
  // }

  loadAPIData(){
    this.registerationForm.patchValue({
      username: 'Bassem',
    })
  }

}
