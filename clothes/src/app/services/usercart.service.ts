import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsercartService {
  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get(
      'https://api.escuelajs.co/api/v1/carts/' + localStorage.getItem('id')
    );
  }
}
