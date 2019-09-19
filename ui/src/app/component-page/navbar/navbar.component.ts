import { roles } from './../../config/roles';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'kuri-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public User: object;
  public student : boolean;
  public teacher : boolean;
  public admin : boolean;
  constructor() { }

  ngOnInit() {
    this.student = false;
    this.teacher = false;
    this.admin = false;
    this.User ={ 
      title: JSON.parse(localStorage.getItem('currentUser')).title,
      name: JSON.parse(localStorage.getItem('currentUser')).name
    }
    this.checkUser(this.User);
  }
  checkUser(user){
    if(user.title == roles.admin){
      this.student = true;
      this.teacher = true; 
      this.admin = true;
    }
    else if(user.title == roles.student){
      this.student = true;
      this.teacher = false;
      this.admin = false;
    }
    else{
      this.student = false;
      this.teacher = true;
      this.admin = false;
    }
  }
}
