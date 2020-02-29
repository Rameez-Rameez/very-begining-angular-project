import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentnesting1',
  templateUrl: './componentnesting1.component.html',
  styleUrls: ['./componentnesting1.component.css']
})
export class Componentnesting1Component implements OnInit {
@Input() name:string;
  constructor() { }

  ngOnInit() {
    console.log("name="+this.name);
  }
}
