import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
    template: '<h2>ERROR!!! :(</h2>',
  styles: ['h2 {color:red;}']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
