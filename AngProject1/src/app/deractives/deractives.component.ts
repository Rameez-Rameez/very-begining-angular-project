import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deractives',
  templateUrl: './deractives.component.html',
  styleUrls: ['./deractives.component.css']
})

export class DeractivesComponent implements OnInit {
imageToBshown:boolean=true;
array:number[]=[1,2,3,4,5,6,7,8,9,0];
  constructor() { }
  ngOnInit() {
  }
  imgUrl:string="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png";
  
}
