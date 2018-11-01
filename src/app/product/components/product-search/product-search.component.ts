import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

import {FormBuilder,
        FormGroup,
        FormControl } from '@angular/forms';

import {map,
        filter,
        debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  products$: Observable<Product[]>;
  searchText: string;

  searchForm: FormGroup; // <form
  searchControl: FormControl; // <input 

  constructor(private productService: ProductService,
              private builder: FormBuilder) { 
        
      this.searchControl = new FormControl('iphone');

      this.searchForm = this.builder.group({
        // formControlName: control variable
        'searchBox': this.searchControl
      });
  }

  ngOnInit() {
    this.searchControl
        .valueChanges

        .pipe(map(value => value.trim()))
        .pipe(filter(value => !!value)) // !! null, undefined, empty string

        .pipe(filter(value => value.length >= 2))

        .pipe(debounceTime(400)) // wait 400 milli-seconds before calling subscribe
 
        .subscribe (value => {
          console.log(`**${value}**`);
          this.searchText = value;
          this.products$ = this.productService.searchProducts(value);
        });
  }

}
