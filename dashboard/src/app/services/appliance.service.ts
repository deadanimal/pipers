import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Appliance } from '../models/appliance.model';

@Injectable({ providedIn: 'root' })
export class ApplianceService {

    appliances: Appliance[] = [];
    appliance: Appliance;

    constructor(private http: HttpClient) { }

    getAppliances() {
        return this.http.get<Appliance[]>(`${environment.apiUrl}appliances/`);
    }

    getAppliance(id: string) {
        return this.http.get<Appliance>(`${environment.apiUrl}appliances/${id}`);
    }

    newAppliance(form: any) {
        return this.http.post(`${environment.apiUrl}appliances/`, form);
    }

    updateAppliance(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}appliances/${id}/`, form);
    }    


}