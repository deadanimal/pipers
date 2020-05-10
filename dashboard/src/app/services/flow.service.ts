import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Flow } from '../models/flow.model';

@Injectable({ providedIn: 'root' })
export class FlowService {

    flows: Flow[] = [];
    flow: Flow;

    constructor(private http: HttpClient) { }

    getFlows() {
        return this.http.get<Flow[]>(`${environment.apiUrl}flows/`);
    }

    getFlow(id: string) {
        return this.http.get<Flow>(`${environment.apiUrl}flows/${id}`);
    }

    newFlow(form: any) {
        return this.http.post(`${environment.apiUrl}flows/`, form);
    }

    updateFlow(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}flows/${id}/`, form);
    }    


}