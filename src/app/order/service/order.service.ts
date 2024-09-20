import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BrowserStorageService } from '../../service/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private http = inject(HttpClient)
  private localstorage = inject(BrowserStorageService)

  // constructor(private http: HttpClient) { }

  getStatusOrderList(): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/util/findByConfig/StatusOrder`, {headers}).toPromise();
  }

  getOrderList(): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/order/get`, {headers}).toPromise()
  }

  getOrderById(id: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/order/get/${id}`, {headers}).toPromise()
  }

  addOrder(payload: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.post(`http://localhost:8080/api/v1/order/add`, {headers}).toPromise()
  }

  updateOrder(payload: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.put(`http://localhost:8080/api/v1/order/update/${payload.orderId}`,payload, {headers}).toPromise()
  }

}
