import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServeTableService } from '../../service/serve-table.service';
import { BrowserStorageService } from '../../../service/browser-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public serveTableService: ServeTableService, public localstorage: BrowserStorageService) {}

  serveTableList: any = []

  ngOnInit(): void {
    this.getServeTableList()
  }

  getServeTableList(): void {
    this.serveTableService.getServeTableList().then(res => {
      this.serveTableList = res.data
    }).catch(err => {
      console.log(err.error.message)
    })
  }

  onCreate(): void {
    this.router.navigate(['serveTable/form']);
  }

  onEdit(id: any): void {
    this.router.navigate(['serveTable/form/'+id]);
  }

  onDelete(id: any): void {
    this.serveTableService.deleteMenu(id).then(res => {
      this.getServeTableList()
    }).catch(err => {
      alert(err.error.message)
    })
  }

}
