import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items$: Observable<CartItem[]>;

  constructor(public cartService: CartService) { 
    this.items$ = cartService.items$;
  }

  ngOnInit() {
    // susbcription
    // items is published in .next(this._items) method
    // FIXME: unsubscribe
    // this.cartService.items$
    //                 .subscribe( items => {
    //                   this.items = items;
    //                 });
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
     
  }

}
