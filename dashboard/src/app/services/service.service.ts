import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Service } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ServiceService {
    constructor(private http: HttpClient) { }

    getAllServices() {
        return this.http.get<Service[]>(`${environment.apiUrl}services/`);
    }

    getSpecificService(id: string) {
        return this.http.get<Service>(`${environment.apiUrl}services/${id}`);
    }

    createNewService() {
        return this.http.post<Service>(`${environment.apiUrl}services/`, {});
    }

    updateSpecificService(id: string) {
        return this.http.put<Service>(`${environment.apiUrl}services/${id}`, {});
    }    


}