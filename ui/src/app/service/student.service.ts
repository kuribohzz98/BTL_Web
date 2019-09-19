import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../config/user';
import { hostAPI } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    constructor(private http: HttpClient) { }

    getMyClass(msv: number){
        return this.http.get<any>(`${hostAPI}/student/getMyClass/${msv}`);
    }

    getDsMonHocCanDanhGia(mamonhoc: string){
        return this.http.post<any>(`${hostAPI}/student/getDanhSachMonHocCanDanhGia`,{mamonhoc: mamonhoc})
    }
}