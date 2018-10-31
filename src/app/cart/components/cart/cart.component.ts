import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
    console.log('Cart component created');
  }

  ngOnInit() {
  }

  addItem() {
    let id = Math.ceil(Math.random() * 10000);
    let item = new CartItem(id,
                            'Product ' + id,
                            Math.ceil(Math.random() * 100),
                            1
                            );

    this.cartService.addItem(item);

  }

  empty() {
    this.cartService.empty();
  }
}
