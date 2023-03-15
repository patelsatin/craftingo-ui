import { UserinfoService } from './../../../services/user-info/userinfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private uService:UserinfoService) { }

  ngOnInit() {
  }
  
  handleClick(){
     this.uService.getAllEmp().subscribe(res => console.log(res));
  }

}
