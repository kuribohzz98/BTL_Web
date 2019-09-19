import { StudentService } from './../../../service/student.service';
import { Component, OnInit} from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';

@Component({
  selector: 'kuri-my-class-student',
  templateUrl: './my-class-student.component.html',
  styleUrls: ['./my-class-student.component.css']
})
export class MyClassStudentComponent implements OnInit {
  public allMyClass : any[];
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getAllClass()
  }

  getAllClass(){
    if(JSON.parse(localStorage.getItem('currentUser')).title == titleAccount.student){
      this.studentService.getMyClass(JSON.parse(localStorage.getItem('currentUser')).msv).subscribe(res => {
        this.allMyClass = res
      })
    }
  }
}