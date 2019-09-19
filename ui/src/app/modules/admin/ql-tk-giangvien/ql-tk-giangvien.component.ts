import { ConfirmPasswordEditValidator, ConfirmPasswordAddValidator } from './../../../shared/confirm-password.validator';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileResourceService } from './../../../service/file-resource.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/config/user';
import { titleAccount } from 'src/app/config/titleAccount';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'kuri-ql-tk-giangvien',
  templateUrl: './ql-tk-giangvien.component.html',
  styleUrls: ['./ql-tk-giangvien.component.css']
})
export class QlTkGiangvienComponent implements OnInit {
  @ViewChild('fileExcel1') imdi : ElementRef;
  tenFileExcel: any;
  hiddenfile: any;
  addAccount: FormGroup;
  formEdit: FormGroup;
  success: boolean;
  fail: boolean;
  account : any[];
  view: any;
  edit: any;
  editstatus: boolean;
  addstatus: boolean;
  delete: any;
  hienlentt : boolean;
  hienlenedit: boolean;
  successEdit: boolean;
  failEdit: boolean;
  headElements = ['STT','Họ và Tên', 'Tên đăng nhập'];
  editSubmited: boolean;
  public register: User = {
    title: '',
    name: '',
    msv: '',
    vnuemail: '',
    khoadt: '',
    username: '',
    password: ''
  }
  constructor(
    private fileResource : FileResourceService,
    private userService : UserService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.success = false;
    this.fail = false;
    this.hiddenfile = false;
    this.view = 0;
    this.edit = 0;
    this.editstatus = false;
    this.addstatus = false;
    this.hienlentt = false;
    this.successEdit = false;
    this.failEdit = false;
    this.hienlenedit = false;
    this.userService.getAll(titleAccount.teacher).subscribe(data => {
      this.account = data;
    })
    this.addAccount = this.formBuilder.group({
      addName: ['', Validators.required],
      addVnuEmail: ['', Validators.compose([Validators.required, Validators.email])],
      addUserName: ['', Validators.required],
      addPassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      addrePassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    },{validator: ConfirmPasswordAddValidator.MatchPassword })
    this.formEdit = this.formBuilder.group({
      editName: ['', Validators.required],
      editVnuEmail: ['', Validators.compose([Validators.required, Validators.email])],
      editUserName: ['', Validators.required],
      editPassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      editrePassWord: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    },{validator: ConfirmPasswordEditValidator.MatchPassword })
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
    console.log(this.imdi.nativeElement.files)
    let filess = this.imdi.nativeElement;
    if(filess.files.length > 0){
      filess = filess.files;
      this.fileResource.uploadFile(filess, titleAccount.teacher).subscribe(res => {
        
      }, err => {
        console.log(err)
      })
    }
  }
  createAccount(){
    this.addstatus = true;
    if (this.addAccount.invalid) {
      return;
    }
    else{
      this.register.title = titleAccount.teacher;
      this.register.name = this.f.addName.value;
      this.register.vnuemail = this.f.addVnuEmail.value;
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
      this.register.title = titleAccount.teacher;
      this.register.name = this.g.editName.value!="" ? this.g.editName.value : this.account[this.edit].name;
      this.register.vnuemail = this.g.editVnuEmail.value!="" ? this.g.editVnuEmail.value : this.account[this.edit].vnuemail;
      this.register.username = this.g.editUserName.value!="" ? this.g.editUserName.value : this.account[this.edit].username;
      this.register.password = this.g.editPassWord.value!="" ? this.g.editPassWord.value : this.account[this.edit].password;
      this.userService.edit(this.account[this.edit].username, this.register).subscribe(res => {
        if(res == 'edit success'){
          this.failEdit = false;
          this.successEdit = true;
          this.userService.getAll(titleAccount.teacher).subscribe(data => {
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
    this.userService.delete(this.delete.username, titleAccount.teacher).subscribe(res => {
      this.userService.getAll(titleAccount.teacher).subscribe(data => {
        this.account = data;
      })
    })
  }
}
