import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../config/user';
import { hostAPI } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(title: string) {
        return this.http.post<any>(`${hostAPI}/admin/account/getUser`, {title: title});
    }

    getUser(id: number) {
        return this.http.get(`${hostAPI}/admin/account/` + id);
    }

    register(user: User) {
        return this.http.post<any>(`${hostAPI}/admin/account/register`, user);
    }

    edit(username_old: any, user: User ) {
        return this.http.post(`${hostAPI}/admin/account/editUser`, {username_old: username_old, user: user});
    }

    delete(username: any, title: string) {
        return this.http.post(`${hostAPI}/admin/account/deleteUser`,{username: username, title: title} );
    }
}