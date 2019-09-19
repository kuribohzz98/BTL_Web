import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';
import { hostAPI } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }
  login(username: string, password: string) {
    return this.http.post<any>(`${hostAPI}/login`,{username: username, password: password})
    .pipe(
      map(user => {
        if(user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    )
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}