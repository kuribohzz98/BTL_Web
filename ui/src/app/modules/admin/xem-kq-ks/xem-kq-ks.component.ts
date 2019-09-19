import { PksService } from './../../../service/pks/pks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kuri-xem-kq-ks',
  templateUrl: './xem-kq-ks.component.html',
  styleUrls: ['./xem-kq-ks.component.css']
})
export class XemKqKsComponent implements OnInit {
  public tbCong : number[];
  // public
  classSurvey: any[];
  public cacCuocKs: any[];
  constructor(
    private pksService: PksService
  ) { }
  
  ngOnInit() {
    this.classSurvey = [];
    this.pksService.getAllClassSurvey().subscribe(res => {
      this.pksService.getAllKQKS().subscribe(resl => {
        if(resl != null){
          if(resl.length != 0){
            resl.map(data => {
              res.map(date => {
                if(data.mamonhoc == date.mamonhoc){
                  this.classSurvey.push(date)
                }
              })
            })
          }
        }
      })
    })
    
    // this.tbCong.length = 19;
    // this.tbCong = 0;
    // this.pksService.getAllKQKS().subscribe(res => {
    //   // console.log(res)
    //     res.map(data => {
    //       if(data.danhgia.length != 0){
    //           data.danhgia.map(sv => {
    //               sv.value.map(data => {
    //                   this.tbCong += (Number(data)/sv.value.length)
    //               })
    //           })
    //       }
    //   })
    //   console.log(this.tbCong)
    // })
  }
  // getClassKs(index) {
  //   this.pksService.createCuocKs(this.classSurvey[index].mamonhoc).subscribe(res => {
  //     console.log(res)
  //   })
  // }
}
