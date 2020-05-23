import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Datatable } from '../models/datatable.model';

@Injectable({ providedIn: 'root' })
export class DatatableService {

    datatables: Datatable[] = [];
    datatable: Datatable;

    constructor(private http: HttpClient) { }

    getDatatables() {
        return this.http.get<Datatable[]>(`${environment.apiUrl}datatables/`);
    }

    getDatatable(id: string) {
        return this.http.get<Datatable>(`${environment.apiUrl}datatables/${id}`);
    }

    newDatatable(form: any) {
        return this.http.post(`${environment.apiUrl}datatables/`, form);
    }

    updateDatatable(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}datatables/${id}/`, form);
    }    


}