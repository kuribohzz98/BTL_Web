import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostAPI } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class FileResourceService {
    constructor(private http: HttpClient) { }
    uploadFile(files: File[], typeFile: string): Observable<any> {
        const formData = new FormData();
        [].forEach.call(files, (file, index) => {
            formData.append('kuri-file', file);
            formData.append('typeFile', typeFile);
        });
    return this.http.post(`${hostAPI}/admin/uploadExcel`, formData);
  }
}