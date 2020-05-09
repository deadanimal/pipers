import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    users: User[] = [];
    user: User;

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}users/`);
    }

    getUser(id: string) {
        return this.http.get<User>(`${environment.apiUrl}users/${id}`);
    }

    newUser(form: any) {
        return this.http.post(`${environment.apiUrl}users/`, form);
    }

    updateUser(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}users/${id}/`, form);
    }        

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/v1/users/`);
    }
}