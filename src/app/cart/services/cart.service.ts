import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root' // angular 6 feature
})
export class CartService {
  // observed items
  private _items: CartItem[] = [];
  private _amount = 0;
  private _totalItems = 0;

  protected set items(value) {
    this._items = value;
    // next is publishing the items
    this.items$.next(this._items);
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
    this.amount$.next(this._amount);
  }

  get totalItems() {
    return this._totalItems;
  }

  set totalItems(value) {
    this._totalItems = value;
    this.totalItems$.next(this._totalItems);
  }

  // Observable, publish the cart items
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject(this._items);
  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);

  constructor() {
    console.log('Cart service created');
  }

  recalculate() {
    let amount =0,
        count = 0;

    for (let item of this._items) {
      amount += item.price * item.qty;
      count += item.qty;
    }
    
    // publish 
    this.amount = amount;
    // publish
    this.totalItems = count;
  }

  addItem(item: CartItem) {
    
    // mutable array
    this._items.push(item);
    // immutable array, clone the existing array, add new item at the end
    // let newItems = [...this._items, item];
    // this.items = newItems;

    // calls setter, publish the value
    this.items = this._items;

    this.recalculate();
  }

  empty() {
    // setter
   this.items = [];
   this.recalculate();
   }

  removeItem(id: number) {
    // TODO: remove item from items array
    // mutable
    let index = this._items.findIndex ( item => item.id === id);
    let item = this._items[index];

    this._items.splice(index, 1);
    this.items = this._items;
    this.recalculate();
  }
}
