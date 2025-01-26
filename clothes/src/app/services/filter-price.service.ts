import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class filterPriceService {
  constructor(private http: HttpClient) {}
  filterPrice(min: number, max: number): Observable<Products> {
    return this.http.get<Products>(
      `https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}&categoryId=1`
    );
  }
}
