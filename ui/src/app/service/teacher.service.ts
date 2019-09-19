import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../config/user';
import { hostAPI } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    constructor(private http: HttpClient) { }

    getMyClass(name: string){
        return this.http.post<any>(`${hostAPI}/teacher/getMyClass`,{name: name});
    }
}