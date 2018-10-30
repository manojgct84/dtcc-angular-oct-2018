import { Address } from './shared/models/address';
import {Component} from '@angular/core';

// MVC - Model, View, Controller - No controller in Angular
// MVC - Model, View, Component
// MVW - Model, View, Whatever

@Component({
    selector: 'app-root', // custom html tag <app-root ></app-root>
    templateUrl: 'app.component.html', // View
    styleUrls: [  // scopped styles
        'app.component.css'
    ]
})
export class AppComponent { // Component

    // Models, binded to View
    appTitle: string = 'Product App';

    copyrightYear = 2018;

    address: Address = {
        city: 'Chennai',
        state: 'TN',
        pincode: 68 // optional
    };

    ngOnInit() {
         
    }

    // this function to be called when child emit event
    contactHandler(addr: Address) {
        alert(JSON.stringify(addr));
    }
}
