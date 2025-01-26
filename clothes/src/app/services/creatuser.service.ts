import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatUser } from '../shared/interfaces/signup.interface';

@Injectable({
  providedIn: 'root',
})
export class CreatuserService {
  constructor(private http: HttpClient) {}
  creatUser(body: CreatUser): Observable<any> {
    return this.http.post<any>('https://api.escuelajs.co/api/v1/users', body);
  }
}
