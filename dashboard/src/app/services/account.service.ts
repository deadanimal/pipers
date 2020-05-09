import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Account } from '../models/account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {

    accounts: Account[] = [];
    account: Account;

    constructor(private http: HttpClient) { }

    getAccounts() {
        return this.http.get<Account[]>(`${environment.apiUrl}accounts/`);
    }

    getAccount(id: string) {
        return this.http.get<Account>(`${environment.apiUrl}accounts/${id}`);
    }

    newAccount(form: any) {
        return this.http.post(`${environment.apiUrl}accounts/`, form);
    }

    updateAccount(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}accounts/${id}/`, form);
    }    


}