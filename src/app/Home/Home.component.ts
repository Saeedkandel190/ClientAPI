import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
count: number = 0 ;
name: string;
SrcAudio: string;
fileUrl: any;
  constructor() { }

  ngOnInit() {
    this.CreateFile();
  }
  CounterClicked(){
    this.count += 1;
  }

  displayTest(){
    console.log('im testing');
  }
  playAudio(){
    alert('ggg');
    const  audio = new Audio();
    audio.src = '../../assets/file_example_MP3_2MG.mp3';
    audio.load();
    audio.play();
  }
  changeAudio(src: any){
  
  

this.SrcAudio=src;
return false;
  }

  CreateFile()
  {
    const data = ""
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = window.URL.createObjectURL(blob);
    this.SrcAudio=this.fileUrl;
  }

}
