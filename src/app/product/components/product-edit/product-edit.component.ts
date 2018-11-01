import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // create/initial form load
  brands$: Observable<Brand[]>;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id is', id);
    if (id) {
        // get product by id
        this.productService.getProduct(id)
            .subscribe(product => {
              this.product = product;
            });
    }

    this.brands$ = this.productService.getBrands();
  }

  saveProduct() {
    this.productService.saveProduct(this.product)
                      .subscribe(savedProduct => {
                        alert('product saved successfully');
                      });
  }

  resetForm() {
  }

}
