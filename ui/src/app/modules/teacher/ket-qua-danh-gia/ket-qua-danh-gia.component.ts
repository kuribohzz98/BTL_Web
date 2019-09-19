import { TeacherService } from './../../../service/teacher.service';
import { PksService } from './../../../service/pks/pks.service';
import { Component, OnInit } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';
import { Router } from '@angular/router';
@Component({
  selector: 'kuri-ket-qua-danh-gia',
  templateUrl: './ket-qua-danh-gia.component.html',
  styleUrls: ['./ket-qua-danh-gia.component.css']
})
export class KetQuaDanhGiaComponent implements OnInit {
  public cacCuocKs: any[];
  allMyClass: any[];
  constructor(
    private pksService: PksService,
    private teacherService: TeacherService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.allMyClass = [];
    if(JSON.parse(localStorage.getItem('currentUser')).title == titleAccount.teacher){
      this.teacherService.getMyClass(JSON.parse(localStorage.getItem('currentUser')).name).subscribe(res => {
        this.pksService.getAllKQKS().subscribe(resl => {
          if(resl != null){
            if(resl.length != 0){
              resl.map(data => {
                res.map(date => {
                  if(data.mamonhoc == date.mamonhoc){
                    this.allMyClass.push(date)
                  }
                })
              })
            }
          }
        })
      })
    }

}
}