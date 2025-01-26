import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class TopSalesService {
  constructor(private http: HttpClient) {}
  getTopSales(): Observable<Products> {
    return this.http.get<Products>(
      'https://api.escuelajs.co/api/v1/products/?price_min=50&price_max=200&categoryId=1'
    );
  }
}
