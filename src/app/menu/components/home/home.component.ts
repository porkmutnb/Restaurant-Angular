import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserStorageService } from '../../../service/browser-storage.service';
import { MenuService } from '../../service/menu.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public menuService: MenuService, public localstorage: BrowserStorageService) {}

  menuList: any = []

  ngOnInit(): void {
    this.getMenuList()
  }

  getMenuList(): void {
    this.menuService.getMenuList().then(res => {
      this.menuList = res.data
    }).catch(err => {
      console.log(err.error.message)
    })
  }

  onCreate(): void {
    this.router.navigate(['menu/form']);
  }

  onEdit(id: any): void {
    this.router.navigate(['menu/form/'+id]);
  }

  onDelete(id: any): void {
    this.menuService.deleteMenu(id).then(res => {
      this.getMenuList()
    }).catch(err => {
      alert(err.error.message)
    })
  }

}
