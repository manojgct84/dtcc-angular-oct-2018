import { DataService } from './../../../shared/services/data.service';
import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  message: string;
   
  // step 1
  constructor(public productService: ProductService,
    public cartService: CartService,
    public dataService: DataService) { }

  // step 2: HTML mounted into view/browser

  // step 4: component initialized
  fetchProducts() {
    this.products$ = this.productService
                            .getProducts();
  }

  ngOnInit() {
    this.fetchProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(1000)
                       .subscribe ( () => {
                         console.log('product deleted');
                         this.message = 'product deleted';
                         this.fetchProducts();
                       },
                       
                       error => {
                         console.log(error);
                         console.log('error in deleting product');
                         this.message = `error in deleting product ${error.status} ${error.statusText}  `;

                       }
                       );
  }


  addToCart(product: Product) {
    const item = new CartItem(product.id, product.name, product.price, 1);
    this.cartService.addItem(item);
  }
}
