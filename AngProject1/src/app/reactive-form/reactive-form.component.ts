import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { ReactiveFormService } from './reactive-form.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  loginForm:FormGroup;
  response1:any;
  submitted:boolean=false

  constructor(private fb:FormBuilder,private reactiveService:ReactiveFormService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      email:['',Validators.required],
      phone_no:['',Validators.required]
    })
  }
  onSubmit(event){
    this.submitted =true
    console.log(event.value)
    this.reactiveService.postUserInfo(event.value).subscribe((response=>this.response1=response))
  }

}
