import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  id: any = null
  menu: any = {
    id: '',
    name: '',
    image: ''
  }

  constructor(public router: Router, private activeroute: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
    if(this.id!=null && this.id!='') {
      this.getMenuById()
    }
  }

  getMenuById(): void {
    this.menuService.getMenuById(this.id).then(res => {
      this.menu = res.data
    }).catch(err => {
      alert(err.error.message);
      this.router.navigate(['menu/home'])
    })
  }

  onSubmit(): void {
    if(this.menu.name=='') {
      alert('Please input name')
    }else {
      console.log(this.menu)
      if(this.id==null || this.id=='') {
        this.menuService.createMenu(this.menu).then(res => {
          this.router.navigate(['menu/home'])
        }).catch(err => {
          alert(err.error.message)
        })
      }else {
        this.menuService.updateMenu(this.menu).then(res => {
          this.getMenuById()
        }).catch(err => {
          alert(err.error.message)
        })
      }
    }
  }

}
