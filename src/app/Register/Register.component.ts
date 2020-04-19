import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../Services/HttpService/Auth/Auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any={};
  @Input() RegisterMode:boolean;
  @Output() editRegisterMode = new EventEmitter();
  Message:string= '';
  res: any;
  constructor(private httpClientService:AuthService) { }

  ngOnInit() {
  }
   
  Register(){
    this.Message='';
   this.httpClientService.Register(this.model).subscribe(Response=>{
    
        this.res=Response;
        
          this.Message="User Resgistered Successfully"
   },error =>
  {
    this.res=error;
    
    if(this.res.error.errors!=null)
    {
     if(this.res.error.errors.userName!=null)
        this.Message=this.res.error.errors.userName;
        if(this.res.error.errors.userPassword!=null)
        this.Message+= "   "+this.res.error.errors.userPassword;
    }
    else
   this.Message=this.res.error;
  });
}
  cancel()
  {
    this.editRegisterMode.emit();
   
  }

  EmptyMessage(){
  this.Message='';
  }
}

