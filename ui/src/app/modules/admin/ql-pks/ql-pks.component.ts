import { PksService } from './../../../service/pks/pks.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PKS } from 'src/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'kuri-ql-pks',
  templateUrl: './ql-pks.component.html',
  styleUrls: ['./ql-pks.component.css']
})
export class QlPksComponent implements OnInit {
  public success: boolean;
  public fail: boolean;
  public addValueOfTitle: FormGroup;
  public coSoVatChat: PKS;
  public monHoc: PKS;
  public hoatDongGiangDay: PKS;
  public danhGiaKhac: PKS;
  public pks : any[];
  public title: string;
  public nameDanhGia: string;
  public titled: string;
  public valued: string;
  constructor(
    private pksService : PksService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.success = false;
    this.fail = false;
    this.nameDanhGia = "";
    this.pksService.getPks().subscribe(data => {
      this.pks = data;
    })
    this.addValueOfTitle = this.formBuilder.group({
      values: ['', Validators.required]
    })
  }
  get f() { return this.addValueOfTitle.controls; }

  themDanhGia(){
    this.pksService.addValueOfTitle(this.title, this.f.values.value)
    .pipe(first())
    .subscribe(data => {
      if(data.status == "error"){
        console.log(data.status)
      }
      if(data.status == "already exist"){
        this.fail = true;
        this.success = false;
      }
      if(data.status == "success"){
        this.pksService.getPks().subscribe(data => {
          this.pks = data;
        })
        this.success = true;
        this.fail = false;
      }
    }, err => {
      console.log(err)
    })
  }
  nameTitle(nameTitle: string){
    this.title = nameTitle;
  }
  deletePks(){
    this.pksService.deleteValueOfTitle(this.titled, this.valued).subscribe(data => {
      this.pksService.getPks().subscribe(data => {
      this.pks = data;
      })
    }, err => {
      console.log(err)
    })
  }
  getValueDeletePks(title: string, value: string){
    this.titled = title;
    this.valued = value;
  }
}
