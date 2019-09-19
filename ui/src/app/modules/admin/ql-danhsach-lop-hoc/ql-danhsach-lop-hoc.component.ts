import { PksService } from './../../../service/pks/pks.service';
import { FileResourceService } from 'src/app/service/file-resource.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';

@Component({
  selector: 'kuri-ql-danhsach-lop-hoc',
  templateUrl: './ql-danhsach-lop-hoc.component.html',
  styleUrls: ['./ql-danhsach-lop-hoc.component.css']
})
export class QlDanhsachLopHocComponent implements OnInit {
  @ViewChild('fileExcel1') imdi : ElementRef;
  tenFileExcel: any;
  hiddenfile: any;
  classSurvey: any;
  indexView: number;
  viewTT: boolean;
  deleteTT: number;
  constructor(
    private fileResource: FileResourceService,
    private pksService : PksService
  ) { }

  ngOnInit() {
    this.indexView = 0;
    this.deleteTT = 0;
    this.viewTT = false;
    this.pksService.getAllClassSurvey().subscribe(res => {
      this.classSurvey = res;
    })
    
  }
  showAddFile(){
    this.hiddenfile = !this.hiddenfile
    if(this.hiddenfile == false && this.tenFileExcel != null){
      this.imdi.nativeElement = null;
      this.tenFileExcel = null;
    }
  }
  uploadTenFile(){
    this.tenFileExcel = this.imdi.nativeElement.files[0].name;
  }
  upLoadFileExcel(){
    console.log(this.imdi.nativeElement.files)
    let filess = this.imdi.nativeElement;
    if(filess.files.length > 0){
      filess = filess.files;
      this.fileResource.uploadFile(filess, titleAccount.class).subscribe(res => {
        
      }, err => {
        console.log(err)
      })
    }
  }
  getClass(index){
    this.indexView = index;
    this.viewTT = true;
  }
  getIndexXoa(index){
    this.deleteTT = index;
  }
  xoaClass(){
    this.pksService.deleteClass(this.classSurvey[this.deleteTT].mamonhoc).subscribe(res => {
      this.pksService.getAllClassSurvey().subscribe(res => {
        this.classSurvey = res;
      })
    })
  }
}
