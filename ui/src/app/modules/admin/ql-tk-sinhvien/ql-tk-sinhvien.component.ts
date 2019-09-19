import { ConfirmPasswordEditValidator, ConfirmPasswordAddValidator } from './../../../shared/confirm-password.validator';
import { UserService } from './../../../service/user.service';
import { FileResourceService } from './../../../service/file-resource.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from 'src/app/config/user';
import { titleAccount } from 'src/app/config/titleAccount';
@Component({
  selector: 'kuri-ql-tk-sinhvien',
  templateUrl: './ql-tk-sinhvien.component.html',
  styleUrls: ['./ql-tk-sinhvien.component.css']
})
export class QlTkSinhvienComponent implements OnInit {
  @ViewChild('fileExcel1') imdi : ElementRef;
  tenFileExcel: any;
  hiddenfile: any;
  formEdit: FormGroup;
  success: boolean;
  fail: boolean;
  view: any;
  edit: any;
  delete: any;
  hienlentt : boolean;
  hienlenedit: boolean;
  editstatus: boolean;
  addstatus: boolean;
  successEdit: boolean;
  failEdit: boolean;
  account : any[];
  public register: User = {
    title: '',
    name: '',
    msv: '',
    vnuemail: '',
    khoadt: '',
    username: '',
    password: ''
  }
  public addAccount: FormGroup;
  constructor(
    private fileResource : FileResourceService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.success = false;
    this.fail = false;
    this.hiddenfile = false;
    this.view = 0;
    this.edit = 0;
    this.hienlentt = false;
    this.hienlenedit = false;
    this.successEdit = false;
    this.failEdit = false;
    this.editstatus = false;
    this.addstatus = false;
    this.userService.getAll(titleAccount.student).subscribe(data => {
      this.account = data;
    })
    this.addAccount = this.formBuilder.group({
      addName: ['', Validators.required],
      addMsv: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      addVnuEmail: ['', Validators.compose([Validators.required, Validators.email])],
      addKhoaDt: ['', Validators.required],
      addUserName: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      addPassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      addrePassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    },{validator: ConfirmPasswordAddValidator.MatchPassword })
    this.formEdit = this.formBuilder.group({
      editName: ['', Validators.required],
      editMsv: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      editVnuEmail: ['', Validators.compose([Validators.required, Validators.email])],
      editKhoaDt: ['', Validators.required],
      editUserName: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      editPassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      editrePassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }
  
  get f() { return this.addAccount.controls; }
  get g() { return this.formEdit.controls;}

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
    console.log(this.imdi.nativeElement.files[0])
    let filess = this.imdi.nativeElement;
    if(filess.files.length > 0){
      filess = filess.files;
      this.fileResource.uploadFile(filess,titleAccount.student).subscribe(res => {
        if(res.message === 'upfile success'){
          console.log(res.message);
        }
        else{
          console.log(res.message);
        }
      },
      err => {
        console.log(err)
      }
      )
    }
  }
  createAccount(){
    this.addstatus = true;
    if (this.addAccount.invalid) {
      return;
    }
    else{
      this.register.title = titleAccount.student;
      this.register.name = this.f.addName.value;
      this.register.msv = this.f.addMsv.value;
      this.register.vnuemail = this.f.addVnuEmail.value;
      this.register.khoadt = this.f.addKhoaDt.value;
      this.register.username = this.f.addUserName.value;
      this.register.password = this.f.addPassWord.value;
      this.userService.register(this.register).subscribe(res => {
        if(res.message == 'Created'){
          this.success = true;
          this.fail = false;
          this.userService.getAll(titleAccount.teacher).subscribe(data => {
            this.account = data;
          })
        }
        if(res.message == 'Account already exit'){
          this.success = false;
          this.fail = true;
        }
      })
    }
  }
  editAccount(){
    this.editstatus = true;
    if (this.formEdit.invalid) {
      return;
    }
    else{
      this.register.title = titleAccount.student;
      this.register.name = this.g.editName.value!="" ? this.g.editName.value : this.account[this.edit].name;
      this.register.msv = this.g.editMsv.value!="" ? this.g.editMsv.value : this.account[this.edit].msv;
      this.register.vnuemail = this.g.editVnuEmail.value!="" ? this.g.editVnuEmail.value : this.account[this.edit].vnuemail;
      this.register.khoadt = this.g.editKhoaDt.value!="" ? this.g.editKhoaDt.value : this.account[this.edit].khoadt;
      this.register.username = this.g.editUserName.value!="" ? this.g.editUserName.value : this.account[this.edit].username;
      this.register.password = this.g.editPassWord.value!="" ? this.g.editPassWord.value : this.account[this.edit].password;
      this.userService.edit(this.account[this.edit].username, this.register).subscribe(res => {
        if(res == 'edit success'){
          this.failEdit = false;
          this.successEdit = true;
          this.userService.getAll(titleAccount.student).subscribe(data => {
            this.account = data;
          })
        }
        else{
          this.failEdit = false;
          this.successEdit = true;
        }
      })
    }
    
  }
  getTT(index: any){
    this.view = index;
    this.hienlentt = true;
  }
  getTTdelete(index: any){
    this.delete = this.account[index]
  }
  getTTedit(index: any){
    this.edit = index;
    this.hienlenedit = true;
  }
  xoaTk(){
    this.userService.delete(this.delete.username, titleAccount.student).subscribe(res => {
      this.userService.getAll(titleAccount.student).subscribe(data => {
        this.account = data;
      })
    })
  }
}
