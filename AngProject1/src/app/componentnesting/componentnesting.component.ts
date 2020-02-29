import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentnesting',
  templateUrl: './componentnesting.component.html',
  styleUrls: ['./componentnesting.component.css']
})
export class ComponentnestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  componentnesting2Response(event){
    console.log(event);
  }
}
