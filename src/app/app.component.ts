import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
public visible: boolean;
    
ngOnInit() {
        this.visible = true;
  }
    
toggle(){
    this.visible = !this.visible;
}
    
}
