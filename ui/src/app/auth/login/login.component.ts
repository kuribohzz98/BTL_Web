import { Router } from '@angular/router';
import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/config/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'kuri-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public users : User;
  loginFail: boolean;
  constructor(
    private authService : AuthService,
    private formBuilder : FormBuilder,
    private router: Router
  ) { }
  ngOnInit() {
    this.loginFail = false;
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.authService.logout();
  }
  
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
        // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(data => {
      if(data.message != 'login fail'){
        this.loginFail = false;
        this.router.navigate(['']);
      }
      else{
        this.loginFail = true
      }
    })
  }
  hiddenloginFail(){
    this.loginFail = false;
  }
}
