import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }


  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
 }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }

  // DELETE /api/products/2345

  deleteProduct(id): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/api/products/${id}`);
  }
}
