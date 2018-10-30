import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartListComponent, CartSummaryComponent, CheckoutComponent]
})
export class CartModule { }
