import { Injectable, inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { BrowserStorageService } from './browser-storage.service';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private authService = inject(AuthService);  // ใช้ inject แทน constructor
  private router = inject(Router);  // ใช้ inject แทน constructor

  constructor(public localstorage: BrowserStorageService) { }

  async canActivate(): Promise<boolean> {
    const token = this.localstorage.getItem('token')
    if(token==null || token=='') {
      this.router.navigate(['auth']);
      return false;
    }else {
      const payload = { token: token }
      console.log(payload)
      try {
        const res = await this.authService.login(payload);  // รอผลลัพธ์จาก authService.login
        console.log('Login success:', res);
        return true;  // หาก login สำเร็จให้เข้าถึงหน้าได้
      } catch (err) {
        console.error('Login failed:', err);
        this.router.navigate(['auth']);
        return false;  // หากเกิดข้อผิดพลาดให้เปลี่ยนไปหน้า auth
      }
    }
    return true;
  }

}
