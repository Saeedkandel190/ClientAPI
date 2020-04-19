import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseURL:string = "http://localhost:50085/api/auth/";
token:string ="";
constructor(private http:HttpClient) { }
login(model:any)
{
  return this.http.post(this.baseURL + 'login/', model).pipe(
    map(( Response: any)=>{
      const user=Response;
      if(user)
      {
        this.token=user.token;
        localStorage.setItem('token',user.token);
      }
    })
  );
}
Register(model:any){
 return  this.http.post(this.baseURL+'register',model);
}

}
