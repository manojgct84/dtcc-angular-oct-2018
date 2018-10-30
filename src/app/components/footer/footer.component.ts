import { Address } from './../../shared/models/address';
import { Component, OnInit,
         Input,

         Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @Input is a property binding
  // <app-footer year="2018" > -- fixed value
   // <app-footer [year]="2018 + 2" /> -- expression, pass 2020 to year

   // Input parent to child 
  @Input('x-year') // alias name
  year: number;

  @Input()
  company: string;

  @Input()
  address: Address;

  // Output, child to parent, always through events only
  // Output is an event binding, custom event (contactEvent)

  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('typeof year, address', typeof this.year, typeof this.address);
  }

  contactClicked() {
    // child component raise event
    // parent should subscribe/listen for the event
    // emitted values can be accessed as $event
    console.log('publishing event');
    this.contactEvent.emit(this.address);
  }

}
