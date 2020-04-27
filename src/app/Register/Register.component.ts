import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../Services/HttpService/Auth/Auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  SrcAudio: any;
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
        this.CreateFile(this.res.helloTest);
          this.Message="User Resgistered Successfully"
   });
}
  cancel()
  {
    this.editRegisterMode.emit();
   
  }

  EmptyMessage(){
  this.Message='';
  }

  changeAudio(src: any){
  
  

    this.SrcAudio=src;
    return false;
      }
    
      CreateFile(data: any)
      {
        
       const blob = new Blob([data], { type: 'audio/wav' });
        
        let url= window.URL.createObjectURL(blob);
        alert(url);
        this.SrcAudio= url;
      }
}

