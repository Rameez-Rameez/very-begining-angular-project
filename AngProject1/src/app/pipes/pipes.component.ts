import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name:string='Rameez Raja';
  date:Date=new Date()
  constructor() { }

  ngOnInit() {
  }

}
