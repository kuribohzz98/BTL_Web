import { TeacherService } from './../../../service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';


@Component({
  selector: 'kuri-lop-giang-day',
  templateUrl: './lop-giang-day.component.html',
  styleUrls: ['./lop-giang-day.component.css']
})
export class LopGiangDayComponent implements OnInit {
  public allMyClass : any[];
  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('currentUser')).title == titleAccount.teacher){
      this.teacherService.getMyClass(JSON.parse(localStorage.getItem('currentUser')).name).subscribe(res => {
        this.allMyClass = res;
      })
    }
  }
}
