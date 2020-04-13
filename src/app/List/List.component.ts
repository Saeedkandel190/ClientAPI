import { Component, OnInit } from '@angular/core';
import {HttpService, Employy} from '../Services/HttpService/http.service';
@Component({
  selector: 'app-List',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.css']
})
export class ListComponent implements OnInit {
datalist: Array<Employy>;
myobject: object;
public isVisible: boolean;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getData();
    this.isVisible= false;

  }

  getData(): void{
    this.http.GetData().subscribe(data => {
      this.datalist = data;
    });
  }

  Show(): void{
this.isVisible= true;
  }
 

}
