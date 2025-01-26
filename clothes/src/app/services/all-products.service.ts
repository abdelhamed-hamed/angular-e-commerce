import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from '../shared/interfaces/products.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Products> {
    return this.http.get<Products>(
      'https://api.escuelajs.co/api/v1/products/?categoryId=1'
    );
  }
}
