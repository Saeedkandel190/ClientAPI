import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
registerMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  registerToggle(){
    this.registerMode=true;
  }
  ToggleRegisterFromChild(){
this.registerMode=false;
  }

}
