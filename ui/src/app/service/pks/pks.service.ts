import { Observable } from 'rxjs';
import { hostAPI } from 'src/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class PksService {
    constructor(private http: HttpClient) { }

    getPks(): Observable<any>{
        return this.http.get<any>(`${hostAPI}/admin/getpks`);
    }

    addValueOfTitle(title: string, value: string ){
        return this.http.post<any>(`${hostAPI}/admin/pks/addValueOfTitle`,{title: title, value: value});
    }

    deleteValueOfTitle(title: string, value: string){
        return this.http.post<any>(`${hostAPI}/admin/pks/deleteValueOfTitle`,{title: title, value: value});
    }

    getAllClassSurvey(){
        return this.http.get<any>(`${hostAPI}/admin/classSurvey/getAll`);
    }

    deleteClass(mamonhoc: string){
        return this.http.post<any>(`${hostAPI}/admin/classSurvey/xoaClass`, {mamonhoc:mamonhoc})
    }

    createCuocKs(mamonhoc: string){
        return this.http.get<any>(`${hostAPI}/admin/pks/createCuocKs/${mamonhoc}`);
    }

    sendDanhGia(mamonhoc: string, msv: number, phieudanhgia: any[]){
        return this.http.post<any>(`${hostAPI}/student/sendDanhGia`,{mamonhoc:mamonhoc, msv:msv, phieudanhgia:phieudanhgia});
    }

    getAllKQKS(){
        return this.http.get<any>(`${hostAPI}/admin/pks/getAllKQKS`);
    }
    
    getKQKS(mamonhoc: string){
        return this.http.post<any>(`${hostAPI}/admin/pks/getKQKS`,{mamonhoc:mamonhoc});
    }

    xoaKS(mamonhoc: string){
        return this.http.post<any>(`${hostAPI}/admin/pks/xoaKS`,{mamonhoc:mamonhoc});
    }

    ketThucKS(mamonhoc: string){
        return this.http.post<any>(`${hostAPI}/admin/pks/ketThucKS`,{mamonhoc:mamonhoc});
    }

    getAllKSActive(){
        return this.http.get<any>(`${hostAPI}/admin/pks/getAllKSActive`);
    }
}
