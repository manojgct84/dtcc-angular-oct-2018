import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  highlightColor = 'yellow';

  // address is undefined
  address: Address;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('time out called ');
      this.address = {
        city: 'Chennai',
        state: 'TN'
      };
    }, 3000);
  }

}
