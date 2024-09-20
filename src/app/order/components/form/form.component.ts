import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { MenuService } from '../../../menu/service/menu.service';
import { ServeTableService } from '../../../serve-table/service/serve-table.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  id: any = null
  order: any = {
    orderId: '',
    userId: '',
    fullname: '',
    status: '',
    guest: '',
    serveTableId: '',
    serveTableName: '',
    menuList: []
  }
  statusOrderList: any = []
  serveTableList: any = []

  constructor(public router: Router, private activeroute: ActivatedRoute, private orderService: OrderService, private menuService: MenuService, private serveTableService: ServeTableService) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
    if(this.id!=null && this.id!='') {
      this.getOrderById()
    }else {
      this.getServeTableList()
    }
    this.getStatusOrderList()
  }

  getStatusOrderList(): void {
    this.orderService.getStatusOrderList().then(res => {
      this.statusOrderList = res.data
    }).catch(err => {
      alert(err.error.message);
    })
  }

  getServeTableList(): void {
    this.serveTableService.getServeTableList().then(res => {
      this.serveTableList = res.data
    }).catch(err => {
      alert(err.error.message);
    })
  }

  getOrderById(): void {
    this.orderService.getOrderById(this.id).then(res => {
      this.order = res.data
    }).catch(err => {
      alert(err.error.message);
      this.router.navigate(['order/home'])
    })
  }

  onSubmit(): void {
    if(this.id!=null &&this.id!='') {
      if(this.order.fullname=='') {
        alert('Please input fullname')
      }else if(this.order.status=='') {
        alert('Please select status')
      }else if(this.order.guest<=0) {
        alert('Please input guest')
      }else {
        this.orderService.updateOrder({orderId: this.order.orderId, status:this.order.status}).then(res => {
          this.getOrderById()
        }).catch(err => {
          alert(err.error.message)
        })
      }
    }else {

    }
  }

}
