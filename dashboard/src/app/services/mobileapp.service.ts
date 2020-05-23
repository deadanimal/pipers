import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Mobileapp } from '../models/mobileapp.model';

@Injectable({ providedIn: 'root' })
export class MobileappService {

    mobileapps: Mobileapp[] = [];
    mobileapp: Mobileapp;

    constructor(private http: HttpClient) { }

    getMobileapps() {
        return this.http.get<Mobileapp[]>(`${environment.apiUrl}mobileapps/`);
    }

    getMobileapp(id: string) {
        return this.http.get<Mobileapp>(`${environment.apiUrl}mobileapps/${id}`);
    }

    newMobileapp(form: any) {
        return this.http.post(`${environment.apiUrl}mobileapps/`, form);
    }

    updateMobileapp(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}mobileapps/${id}/`, form);
    }    


}