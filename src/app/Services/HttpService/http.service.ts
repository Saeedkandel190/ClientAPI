import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private httpClient: HttpClient) { }

GetData(){
  return this.httpClient.get<Array<Employy>>('http://localhost:50085/weatherforecast/');
}

PostData(employyToAdd: Employy){

  return this.httpClient.post('http://localhost:50085/weatherforecast', employyToAdd);
}
}

export class Employy{
  public id: number ;
  public temperatureC: number;
  public date: string;
  public temperatureF: number;
  public summary: string;


  constructor(){

  }
 
}
