import { UserinfoService } from './../../../services/user-info/userinfo.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss','../../../../assets/css/style.css']
})
export class RegistrationComponent implements OnInit {
  public userData : User = {name:"" , email:"" , phone :null , password:""};
  constructor(private userService: UserinfoService) { }

  ngOnInit() {
  }

  handleSubmit(){
    this.userService.registerUser(this.userData).subscribe(res =>{
      localStorage.setItem('id_token' , res);
    });
    
  }

}
