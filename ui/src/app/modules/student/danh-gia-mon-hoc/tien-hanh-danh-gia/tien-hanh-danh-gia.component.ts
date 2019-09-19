import { PksService } from './../../../../service/pks/pks.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'kuri-tien-hanh-danh-gia',
  templateUrl: './tien-hanh-danh-gia.component.html',
  styleUrls: ['./tien-hanh-danh-gia.component.css']
})
export class TienHanhDanhGiaComponent implements OnInit {
  public pks : any[];
  public content : object;
  public mamonhoc : string;
  public playerName: any[];
  public phieudanhgia: any[];
  constructor(
    private _location: Location,
    private pksService: PksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playerName = [];
    this.phieudanhgia = [];
    this.pksService.getPks().subscribe(data => {
      this.pks = data;
      data.map(res => {
        res.value.map(result => {
          this.playerName.push(result)
        })
      })
    })
    this.mamonhoc = this.router.url.split('/')[this.router.url.split('/').length-1].split('%20').join(' ')
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(){
    // this.playerName["Mục tiêu của môn học nêu rõ kiến thức và kĩ năng người học cần đạt được"]
    this.playerName.map(data => {
      this.phieudanhgia.push(this.playerName[data])
      
    })
    // console.log(this.phieudanhgia)
    this.pksService.sendDanhGia(this.mamonhoc, JSON.parse(localStorage.getItem('currentUser')).msv, this.phieudanhgia).subscribe(res => {
      alert("Kết quả của bạn đã được ghi nhận");
      this._location.back();
    })
  }
}
