import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Gateway } from '../models/gateway.model';

@Injectable({ providedIn: 'root' })
export class GatewayService {

    gateways: Gateway[] = [];
    gateway: Gateway;

    constructor(private http: HttpClient) { }

    getGateways() {
        return this.http.get<Gateway[]>(`${environment.apiUrl}gateways/`);
    }

    getGateway(id: string) {
        return this.http.get<Gateway>(`${environment.apiUrl}gateways/${id}`);
    }

    newGateway(form: any) {
        return this.http.post(`${environment.apiUrl}gateways/`, form);
    }

    updateGateway(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}gateways/${id}/`, form);
    }    


}