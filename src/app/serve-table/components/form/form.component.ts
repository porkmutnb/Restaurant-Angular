import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ServeTableService } from '../../service/serve-table.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  id: any = null
  serveTable: any = {
    id: '',
    name: '',
    seat: ''
  }

  constructor(public router: Router, private activeroute: ActivatedRoute, private serveTableService: ServeTableService) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
    if(this.id!=null && this.id!='') {
      this.getServeTableById()
    }
  }

  getServeTableById(): void {
    this.serveTableService.getServeTableById(this.id).then(res => {
      this.serveTable = res.data
    }).catch(err => {
      alert(err.error.message);
      this.router.navigate(['serveTable/home'])
    })
  }

  onSubmit(): void {
    if(this.serveTable.name=='') {
      alert('Please input name')
    }else if(this.serveTable.seat=='') {
      alert('Please input seat')
    }else {
      console.log(this.serveTable)
      if(this.id==null || this.id=='') {
        this.serveTableService.createServeTable(this.serveTable).then(res => {
          this.router.navigate(['serveTable/home'])
        }).catch(err => {
          alert(err.error.message)
        })
      }else {
        this.serveTableService.updateServeTable(this.serveTable).then(res => {
          this.getServeTableById()
        }).catch(err => {
          alert(err.error.message)
        })
      }
    }
  }

}
