import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserStorageService } from '../../../service/browser-storage.service';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  name: string = ``

  constructor(public router: Router, public authService: AuthService, public localstorage: BrowserStorageService) {}

  ngOnInit(): void {
    this.name = atob(String(this.localstorage.getItem('token'))).split('|')[1]
  }

  onTab(action: string): void {
    switch (action) {
      case 'Menu':
        this.router.navigate(['menu/home']);
        break;
      case 'Order':
        this.router.navigate(['order']);
        break;
      case 'ServeTable':
        this.router.navigate(['serveTable/home']);
        break;
    }
  }

  onLogout(): void {
    const payload = { token: this.localstorage.getItem('token') }
    this.authService.login(payload).then(res => {
      console.log(res)
      this.localstorage.setItem('token', '')
      this.router.navigate(['auth']);
    }).catch(err => {
      alert(err.error.message)
    })
  }

}
