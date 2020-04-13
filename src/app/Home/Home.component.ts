import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
count: number = 0 ;
name: string;
  constructor() { }

  ngOnInit() {
  }
  CounterClicked(){
    this.count += 1;
  }

}
