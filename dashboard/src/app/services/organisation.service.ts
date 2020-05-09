import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Organisation } from '../models/organisation.model';

@Injectable({ providedIn: 'root' })
export class OrganisationService {

    organisations: Organisation[] = [];
    organisation: Organisation;

    constructor(private http: HttpClient) { }

    getOrganisations() {
        return this.http.get<Organisation[]>(`${environment.apiUrl}organisations/`);
    }

    getOrganisation(id: string) {
        return this.http.get<Organisation>(`${environment.apiUrl}organisations/${id}`);
    }

    newOrganisation(form: any) {
        return this.http.post(`${environment.apiUrl}organisations/`, form);
    }

    updateOrganisation(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}organisations/${id}/`, form);
    }    


}