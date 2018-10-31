import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 0;
  price = 99.99;
  title = 'Home';
  today: Date = new Date();

  hl = false;

  constructor() { }

  ngOnInit() {
  }

  divClicked() {
    console.log('Div clicked');
  }

  increment(e: Event) {
    console.log('button clicked');
    console.log(e);
    e.stopPropagation(); // cancel bubbling up event
    this.counter++;
  }

}
