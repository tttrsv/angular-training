import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
public visible: boolean;
public timerStarted: boolean;
public title = "App Component Title";
public message:string;
timeLeft: number = 10;
interval;
    
ngOnInit() {
        this.visible = false;
  }
    
toggle(){
    this.visible = !this.visible;
}
  

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timerStarted = true;
        this.timeLeft--;
      } else{
        this.timerStarted = false;
          this.message = 'Timer finished';
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  displayContent(visible:boolean){
    this.visible = visible;
  }
    
}
