import { PksService } from './../../../../service/pks/pks.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'kuri-chi-tiet-ks',
  templateUrl: './chi-tiet-ks.component.html',
  styleUrls: ['./chi-tiet-ks.component.css']
})
export class ChiTietKsComponent implements OnInit {
  public mamonhoc: string;
  public pks : any;
  public playerName: string[];
  public tbc: number[];
  public phuongsai: number[];
  public mykq: any[];
  
  constructor(
    private _location: Location,
    private router: Router,
    private pksService: PksService
  ) { }

  ngOnInit() {
    this.playerName = [];
    this.tbc = [];
    this.phuongsai = [];
    this.pksService.getPks().subscribe(data => {
      this.pks = data;
      data.map(res => {
        res.value.map(result => {
          this.playerName.push(result)
          this.tbc.push(0)
          this.phuongsai.push(0)
        })
      })
    })
    this.mamonhoc = this.router.url.split('/')[this.router.url.split('/').length-1].split('%20').join(' ')
    this.pksService.getKQKS(this.mamonhoc).subscribe(res => {
      //console.log(res)
      this.mykq = res
      if(res != null){
        if(res.length != 0){
          if(res[0].danhgia.length != 0){
            for(let i=0; i<this.playerName.length; i++){
              for(let j=0; j<res[0].danhgia.length; j++){
                this.tbc[i] += (Number(res[0].danhgia[j].value[i])/Number(res[0].danhgia.length))
                // console.log(this.tbc[i])
              }
            }
          }
          
        }
      }
      this.getPhuongSai();
    })
  }
  
  backClicked() {
    this._location.back();
  }
  getPhuongSai(){
    for(let k=0; k<this.playerName.length; k++){
      for(let m=0; m<this.mykq[0].danhgia.length; m++){
        this.phuongsai[k] += Math.pow(Number(this.mykq[0].danhgia[m].value[k])-Number(this.tbc[k]),2)/Number(this.mykq[0].danhgia.length-1)
      }
    }
  }
}
