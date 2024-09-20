import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { BrowserStorageService } from '../../../service/browser-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public orderService: OrderService, public localstorage: BrowserStorageService) {}

  orderList: any = []

  ngOnInit(): void {
    this.getOrderList()
  }

  getOrderList(): void {
    this.orderService.getOrderList().then(res => {
      this.orderList = res.data
    }).catch(err => {
      console.log(err.error.message)
    })
  }

  onCreate(): void {
    this.router.navigate(['order/form']);
  }

  onEdit(id: any): void {
    this.router.navigate(['order/form/'+id]);
  }

}
