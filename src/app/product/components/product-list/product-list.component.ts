import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: Subscription;

  // step 1
  constructor(private productService: ProductService,
              private cartService: CartService) { }

  // step 2: HTML mounted into view/browser

  // step 4: component initialized
  fetchProducts() {
    this.subscription = this.productService
                            .getProducts()
                            .subscribe (products => {
                              console.log('got products');
                              this.products = products;
                            });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  ngOnDestroy() {
    console.log('product list on destroy');
    // cancel the pending calls
    this.subscription.unsubscribe();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
                       .subscribe ( () => {
                         console.log('product deleted');
                         this.fetchProducts();
                       });
  }


  addToCart(product: Product) {
    const item = new CartItem(product.id, product.name, product.price, 1);
    this.cartService.addItem(item);
  }
}
