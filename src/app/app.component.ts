import { HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestingService } from './_services/testing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Speed Test';

  progress = 0;
  url = '';

  startTime: any;
  endTime: any;
  currentTime: any;
  oldTime: any;
  speed: number = 0;

  speedRecords:number[] = [];

  bytesReceied: number = 0;
  oldbytes: number = 0;
  constructor(private test:TestingService){

  }

  ngOnInit(){
    this.startDownload();
  }

  
  
  startDownload(){
    this.test.download(this.url).subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {

        this.progress = Math.round((100 * event.loaded) / event.total!);    
        this.currentTime = new Date().getTime();

        if (this.progress === 0) {
          this.startTime = new Date().getTime();
          this.oldTime = this.startTime;
        }

        this.bytesReceied = event.loaded / 1000000;

        this.speed =
          (this.bytesReceied - this.oldbytes) /
          ((this.currentTime - this.oldTime) / 1000);
        
        if(this.speed >= 0 && this.speed < 999999999){
          this.speedRecords.push(this.speed);
        }        

        this.oldTime = this.currentTime;    
        this.oldbytes = this.bytesReceied;

      }
    
    });
  }

  minSp(){
    return this.speedRecords.sort((a,b) => a-b)[0];
  }

  maxSp(){
    return this.speedRecords.sort((a,b) => b-a)[0];
  }

  getAvgSpeed(){
    let avg = 0;
    for (const i of this.speedRecords) {
      avg+=i;
    }
    return avg/this.speedRecords.length;
  }
}
