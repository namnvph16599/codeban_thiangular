import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  PORT = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.PORT)
  }
  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.PORT}/${Number(id)}`)
  }
  update(data: any): Observable<any> {
    return this.httpClient.patch(`${this.PORT}/${Number(data.id)}`, data)
  }
  remove(id: number): Observable<any> {
    return this.httpClient.delete(`${this.PORT}/${id}`)
  }
  add(data: any): Observable<any> {
    return this.httpClient.post(this.PORT, data)
  }
}
