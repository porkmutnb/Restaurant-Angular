import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BrowserStorageService } from '../../service/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServeTableService {

  private http = inject(HttpClient)
  private localstorage = inject(BrowserStorageService)

  // constructor(private http: HttpClient) { }

  getServeTableList(): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/serveTable/get`, {headers}).toPromise()
  }

  getServeTableById(id: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.get(`http://localhost:8080/api/v1/serveTable/get/${id}`, {headers}).toPromise()
  }

  createServeTable(serveTable: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.post(`http://localhost:8080/api/v1/serveTable/add`,serveTable, {headers}).toPromise()
  }

  updateServeTable(serveTable: any): Promise<any> {
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.patch(`http://localhost:8080/api/v1/serveTable/edit/${serveTable.id}`,serveTable, {headers}).toPromise()
  }

  deleteMenu(id: any): Promise<any>{
    const headers = new HttpHeaders({ 'token': String(this.localstorage.getItem('token')) })
    return this.http.delete(`http://localhost:8080/api/v1/serveTable/delete/${id}`, {headers}).toPromise()
  }
 
}
