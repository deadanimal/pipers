import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as jwt_decode from 'jwt-decode';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    currentUser: any;

    constructor(private http: HttpClient) {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            this.currentUser = JSON.parse(currentUser);
        }
        
    }



    login(username, password) {
        
        return this.http.post(`${environment.authUrl}token/`, { username, password } )
            .pipe(map(token => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentToken', JSON.stringify(token));

                return token;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentToken');
        localStorage.removeItem('currentUser');
    }

    getOwnUserDetail(id: string) {
        return this.http.get<User>(`${environment.apiUrl}users/${id}`)
            .pipe(map(data=> {

                this.currentUser = data;
                localStorage.setItem('currentUser', JSON.stringify(data));                
                
                return data;
            }))
    }
}