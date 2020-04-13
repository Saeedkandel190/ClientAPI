import { Component, OnInit } from '@angular/core';
import { HttpService, Employy } from '../Services/HttpService/http.service';
import { ListComponent } from '../List/List.component';

@Component({
  selector: 'app-NewItem',
  templateUrl: './NewItem.component.html',
  styleUrls: ['./NewItem.component.css']
})
export class NewItemComponent implements OnInit {
    temperatureC: string;
    temperatureF: string;
     currentEmployee: Employy = new Employy();
  constructor(private http: HttpService,private listcmp: ListComponent) { }

  ngOnInit() {
  }

  postdata(): void{
   this.currentEmployee.id =0;
   this.currentEmployee.temperatureC =parseInt(this.temperatureC);
   this.currentEmployee.temperatureF =parseInt(this.temperatureF);
    this.http.PostData(this.currentEmployee).subscribe(data=>{
    this.listcmp.getData();
    this.listcmp.isVisible=false;
    
    })
  }
}
