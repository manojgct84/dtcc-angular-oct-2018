import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';

import {NgForm, NgModel} from '@angular/forms';
import { IEditable } from 'src/app/shared/interface/ieditable';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, IEditable {


  @ViewChild("pName")
  inputElement: ElementRef;

  @ViewChild("productForm")
  form: NgForm;

  product: Product = new Product(); // create/initial form load
  brands$: Observable<Brand[]>;

  productClone: Product = new Product();

  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { }


  isDirty(): boolean {
    return this.form.dirty;
  }

  ngOnInit() {

    // input.focus()
    this.inputElement.nativeElement.focus();

    const id = this.route.snapshot.params['id'];
    console.log('id is', id);
    if (id) {
        // get product by id
        this.productService.getProduct(id)
            .subscribe(product => {
              this.product = product;
              this.productClone = {...product};
            });
    }

    this.brands$ = this.productService.getBrands();
  }

  saveProduct() {
    if (this.form.pristine) {
      alert('Form no changes found');
      return;
    }

    this.productService.saveProduct(this.product)
                      .subscribe(savedProduct => {
                        alert('product saved successfully');
                      });
  }

  resetForm() {
  }

}
