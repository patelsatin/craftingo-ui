import { UserinfoService } from './../../../services/user-info/userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/css/style.css','./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userName: string;
  private password: string;
  
  constructor(private userProfileService : UserinfoService, private router: Router){

  }

  ngOnInit() {
  }

  handleSubmit(){
     this.userProfileService.getUserInfo(this.userName,this.password).subscribe((res)=>{
        localStorage.setItem('id_token' , res);
        this.router.navigate(["/"]);
     });
  }

}
