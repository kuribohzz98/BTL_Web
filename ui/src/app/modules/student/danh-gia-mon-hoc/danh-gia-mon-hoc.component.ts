import { StudentService } from './../../../service/student.service';
import { Component, OnInit } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';

@Component({
  selector: 'kuri-danh-gia-mon-hoc',
  templateUrl: './danh-gia-mon-hoc.component.html',
  styleUrls: ['./danh-gia-mon-hoc.component.css']
})
export class DanhGiaMonHocComponent implements OnInit {
  public dsMonHocDanhGia: any[];
  hiddenDS: boolean
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.dsMonHocDanhGia = [];
    this.getAllClass();
    this.hiddenDS = false;
  }
  getAllClass(){
    if(JSON.parse(localStorage.getItem('currentUser')).title == titleAccount.student){
      this.studentService.getMyClass(JSON.parse(localStorage.getItem('currentUser')).msv).subscribe(res => {
        if(res.message == 'class not found'){
  
        }
        else{
          res.map(data => {
            this.studentService.getDsMonHocCanDanhGia(data.mamonhoc).subscribe(result => {
              if(result.mamonhoc == 'not found'){
                if(this.dsMonHocDanhGia.length == 0){
                  this.hiddenDS = true;
                }
              }
              else{
                this.hiddenDS = false;
                this.dsMonHocDanhGia.push(data);
              }
            })
          })
        }
      })
    }
  }
}
