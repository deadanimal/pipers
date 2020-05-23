import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Maintenance } from '../models/maintenance.model';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {

    maintenances: Maintenance[] = [];
    maintenance: Maintenance;

    constructor(private http: HttpClient) { }

    getMaintenances() {
        return this.http.get<Maintenance[]>(`${environment.apiUrl}maintenances/`);
    }

    getMaintenance(id: string) {
        return this.http.get<Maintenance>(`${environment.apiUrl}maintenances/${id}`);
    }

    newMaintenance(form: any) {
        return this.http.post(`${environment.apiUrl}maintenances/`, form);
    }

    updateMaintenance(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}maintenances/${id}/`, form);
    }    


}