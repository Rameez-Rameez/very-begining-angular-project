import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentnesting2',
  templateUrl: './componentnesting2.component.html',
  styleUrls: ['./componentnesting2.component.css']
})
export class Componentnesting2Component implements OnInit {
@Input() age:string;
@Output() clickMessage=new EventEmitter;
  constructor() { }

  ngOnInit() {
    console.log("age="+this.age)
  }
  componentnesting2Clicked(event){
    this.clickMessage.emit("the button is clicked")
  }

}
