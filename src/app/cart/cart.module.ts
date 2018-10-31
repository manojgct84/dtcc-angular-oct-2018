import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
          CartComponent,
          CartListComponent,
          CartSummaryComponent,
          CheckoutComponent],

  exports: [
    CartComponent
  ]
})
export class CartModule { }
