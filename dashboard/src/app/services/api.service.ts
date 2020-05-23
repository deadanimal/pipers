import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Api } from '../models/api.model';

@Injectable({ providedIn: 'root' })
export class ApiService {

    apis: Api[] = [];
    api: Api;

    constructor(private http: HttpClient) { }

    getApis() {
        return this.http.get<Api[]>(`${environment.apiUrl}apis/`);
    }

    getApi(id: string) {
        return this.http.get<Api>(`${environment.apiUrl}apis/${id}`);
    }

    newApi(form: any) {
        return this.http.post(`${environment.apiUrl}apis/`, form);
    }

    updateApi(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}apis/${id}/`, form);
    }    


}