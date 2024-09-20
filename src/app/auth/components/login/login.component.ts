import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { BrowserStorageService } from '../../../service/browser-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public service: AuthService, public localstorage: BrowserStorageService) {}

  formData: any = {
    username: '',
    password: ''
  }

  ngOnInit(): void {

  }

  onLogin(): void {
    if(this.formData.username=='') {
      alert('Please input username')
    }else if(this.formData.password=='') {
      alert('Please input password')
    }else {
      console.log(this.formData)
      this.service.login(this.formData).then(res => {
        console.log(res)
        this.localstorage.setItem('token', res.data.token)
        this.router.navigate(['menu']);
      }).catch(err => {
        alert(err.error.message)
        this.formData.username = ''
        this.formData.password = ''
      })
    }
  }

  onRegister(): void {
    this.router.navigate(['auth/register']);
  }

}
