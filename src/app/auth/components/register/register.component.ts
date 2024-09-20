import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router, public service: AuthService) {}

  formData: any = {
    username: '',
    password: '',
    fullname: '',
    birthdate: '',
    genderId: ''
  }

  genderList: any = [
    // { id: 1, value: 'Male'},
    // { id: 2, value: 'female'},
    // { id: 3, value: 'LGBTQ+'},
  ]

  ngOnInit(): void {
    this.getConfigGender()
  }

  getConfigGender(): void {
    this.service.getConfig_Gender().then(res => {
      this.genderList = res.data
    }).catch(err => {
      alert(err.error.message)
    })
  }

  onRegister(): void {
    if(this.formData.username=='') {
      alert('Please input username')
    }else if(this.formData.password=='') {
      alert('Please input password')
    }if(this.formData.fullname=='') {
      alert('Please input fullname')
    }else if(this.formData.birthdate=='') {
      alert('Please input birthdate')
    }else if(this.formData.genderId=='') {
      alert('Please select gender')
    }else {
      this.formData.genderId = parseInt(this.formData.genderId)
      console.log(this.formData)
      this.service.register(this.formData).then(res => {
        this.router.navigate(['auth/login']);
      }).catch(err => {
        alert(err.error.message)
      })
    }
  }

  onLogin(): void {
    this.router.navigate(['auth/login']);
  }

}
