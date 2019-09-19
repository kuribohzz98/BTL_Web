import { PksService } from './../../../service/pks/pks.service';
import { FileResourceService } from './../../../service/file-resource.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';

@Component({
  selector: 'kuri-ql-cac-cuoc-ks',
  templateUrl: './ql-cac-cuoc-ks.component.html',
  styleUrls: ['./ql-cac-cuoc-ks.component.css']
})
export class QlCacCuocKsComponent implements OnInit {
  @ViewChild('fileExcel1') imdi : ElementRef;
  tenFileExcel: any;
  hiddenfile: any;
  classSurvey: any[];
  xks: number;
  ksActive: any[];
  ketthucks : number;
  constructor(
    private fileResource: FileResourceService,
    private pksService : PksService
  ) { }

  ngOnInit() {
    this.xks = 0;
    this.ketthucks = 0;
    this.ksActive = [];
    this.pksService.getAllClassSurvey().subscribe(res => {
      this.classSurvey = res;
    })
    this.pksService.getAllKSActive().subscribe(res => {
      console.log(res)
      if(res == null){
        this.ksActive = [];
      }
      else{
        if(res.length == 0){
          this.ksActive = [];
        }
        else{
          res.map(data => {
            this.ksActive.push(data.mamonhoc)
          })
        }
      }
    })
    console.log(this.ksActive)
  }
  
  getClassKs(index) {
    this.pksService.createCuocKs(this.classSurvey[index].mamonhoc).subscribe(res => {
      if(res.message == 'Tao khao sat thanh cong'){
        alert('Tạo khảo sát thành công');
      }
      else{
        alert('Cuộc khảo sát đã tồn tại');
      }
    })
  }

  getxoaKS(index){
    this.xks = index;
  }

  xoaKS(){
    this.pksService.xoaKS(this.classSurvey[this.xks].mamonhoc).subscribe(ress => {
      this.pksService.getAllKSActive().subscribe(res => {
        if(res == null){
          this.ksActive = [];
        }
        else{
          if(res.length == 0){
            this.ksActive = [];
          }
          else{
            res.map(data => {
              this.ksActive.push(data.mamonhoc)
            })
          }
        }
      })
    })
  }
  getketThucKS(index){
    this.pksService.ketThucKS(this.classSurvey[index].mamonhoc).subscribe(ress => {
      this.pksService.getAllKSActive().subscribe(res => {
        if(res == null){
          this.ksActive = [];
        }
        else{
          if(res.length == 0){
            this.ksActive = [];
          }
          else{
            res.map(data => {
              this.ksActive.push(data.mamonhoc)
            })
          }
        }
      })
    })
  }
}
