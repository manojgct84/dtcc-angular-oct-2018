// checkout.component.ts

import { CheckoutService, State, City } from './../../services/checkout.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


import {map,
  filter} from 'rxjs/operators';

import { FormGroup, FormControl,
          FormBuilder,
          Validators,
          Validator,
          AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';


// return type is an object, key is a string, value is boolean
function CountryValidator(control: AbstractControl): {
        [key: string]: boolean;
    } {

    console.log('value ', control.value);

    if (control.value === 'IN' || control.value === 'India') {
        return;
    }

    return {
        invalidCountry: true
    };
}

interface EmailCtrl {
  name: string;
  control: AbstractControl;
  controlName: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],

  providers: [
    // CheckoutService instance is exclusive to checkout component
    CheckoutService,
  ]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  fullNameControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;
  countryControl: FormControl;


  states$: Observable<State[]>;
  cities$: Observable<City[]>;


  emails: EmailCtrl[] = [];

  constructor(private cartService: CartService,
             private checkoutService: CheckoutService,
             private formBuilder: FormBuilder) {
      console.log('checkout component created');

      this.fullNameControl = new FormControl('', [Validators.required,
                                                  Validators.minLength(3),
                                                  Validators.maxLength(50)]);
      this.stateControl = new FormControl('');
      this.cityControl = new FormControl('');
      this.countryControl = new FormControl('', CountryValidator);

       this.checkoutForm = formBuilder.group({
          'fullName': this.fullNameControl,
          'state': this.stateControl,
          'city': this.cityControl,
          'country': this.countryControl
      });
  }

  get form() { return this.checkoutForm.controls; }


  ngOnInit() {
    this.states$ = this.checkoutService.getStates();

    this.stateControl.valueChanges
    .pipe (filter (value => !!value))
    .subscribe ( (value: any) => {
        this.cities$ = this.checkoutService.getCities(value);
    });
  }

  addEmail() {
     const id = Math.ceil(Math.random() * 10000);
     const emailControl = new FormControl('');

     const ctrl: EmailCtrl = {
       name: 'Email' + id,
       controlName: 'emailControl' + id,
       control: emailControl
     };

     this.emails.push(ctrl);

     this.checkoutForm.addControl(ctrl.controlName, emailControl);

     emailControl.valueChanges
                 .subscribe ( value => {
                   console.log('email is ', value);
                 });
  }

  removeEmail(email: EmailCtrl) {
    this.checkoutForm.removeControl(email.controlName);
    const index = this.emails.findIndex(e => e.name === email.name);
    this.emails.splice(index, 1);
  }

}
