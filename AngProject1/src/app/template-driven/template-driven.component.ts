import { Component, OnInit } from '@angular/core';
import {TemplateDrivenService} from './template-driven.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  response1:any;
  submitted:Boolean=false;
  constructor(private templateService:TemplateDrivenService) { }

  ngOnInit() {

  }
  onSubmit(event){
    console.log(event.value);
    this.submitted=true;
    this.templateService.postUserInfo(event.value).subscribe((response=>this.response1=response))
  }

}
