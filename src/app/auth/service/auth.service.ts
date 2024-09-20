import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  // constructor(private http: HttpClient) { }

  login(payload: any): Promise<any> {
    return this.http.post(`http://localhost:8080/api/v1/auth/login`, payload).toPromise();
  }

  register(payload: any): Promise<any> {
    return this.http.post(`http://localhost:8080/api/v1/auth/register`, payload).toPromise();
  }

  logout(payload: any): Promise<any> {
    return this.http.post(`http://localhost:8080/api/v1/auth/logout`, payload).toPromise();
  }

  getConfig_Gender(): Promise<any> {
    return this.http.get(`http://localhost:8080/api/v1/util/findByConfig/Gender`).toPromise();
  }

}
