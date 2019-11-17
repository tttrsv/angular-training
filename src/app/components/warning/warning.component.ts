import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
    template: '<h2>ERROR!!! :(</h2>',
  styles: ['h2 {color:red;}']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
