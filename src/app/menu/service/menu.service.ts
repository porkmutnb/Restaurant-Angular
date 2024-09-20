import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BrowserStorageService } from '../../service/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private http = inject(HttpClient)
  private localstorage = inject(BrowserStorageService)

  // constructor(private http: HttpClient) { }

  getMenuList(): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/menu/get`, { headers }).toPromise();
  }

  getMenuById(id: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/menu/get/${id}`, { headers }).toPromise();
  }

  createMenu(menu: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.post(`http://localhost:8080/api/v1/menu/add`,menu, {headers}).toPromise()
  }

  updateMenu(menu: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.patch(`http://localhost:8080/api/v1/menu/edit/${menu.id}`,menu, {headers}).toPromise()
  }

  deleteMenu(id: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.delete(`http://localhost:8080/api/v1/menu/delete/${id}`, {headers}).toPromise()
  }

}
