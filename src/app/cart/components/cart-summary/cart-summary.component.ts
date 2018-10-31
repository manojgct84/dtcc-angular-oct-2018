import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  amount$: Observable<number>;
  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.amount$ = this.cartService.amount$;
    this.totalItems$ = this.cartService.totalItems$;
  }

  ngOnInit() {

  }

}
