import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/HttpService/Auth/Auth.service';
import { error } from 'protractor';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  model:any ={};
  constructor(private httpService:AuthService) { }

  ngOnInit() {
  }

  login(){
           this.httpService.login(this.model).subscribe(next =>{
             console.log('hello i finished'),error =>{
               console.log(error)
             }
           });
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    let logged=false;
    if(token)
      logged=true;
      else
      logged=false;

      
    return logged; 
  }

  loggedOut(){
    localStorage.removeItem('token');
  }
}
