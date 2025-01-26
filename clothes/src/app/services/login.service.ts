import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(body: any): Observable<any> {
    return this.http.post<any>(
      'https://api.escuelajs.co/api/v1/auth/login',
      body
    );
  }
}
