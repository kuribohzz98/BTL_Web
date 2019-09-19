import { PksService } from './../../service/pks/pks.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { titleAccount } from 'src/app/config/titleAccount';
import { FileResourceService } from 'src/app/service/file-resource.service';

@Component({
  selector: 'kuri-class-survey',
  templateUrl: './class-survey.component.html',
  styleUrls: ['./class-survey.component.css']
})
export class ClassSurveyComponent implements OnInit {

  @ViewChild('fileExcel1') imdi : ElementRef;
  tenFileExcel: any;
  hiddenfile: any;
  classSurvey: any;
  constructor(
    private fileResource: FileResourceService,
    private pksService : PksService
  ) { }

  ngOnInit() {
    this.pksService.getAllClassSurvey().subscribe(res => {
      this.classSurvey = res;
    })
  }

}
