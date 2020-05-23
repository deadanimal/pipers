import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Deployment } from '../models/deployment.model';

@Injectable({ providedIn: 'root' })
export class DeploymentService {

    deployments: Deployment[] = [];
    deployment: Deployment;

    constructor(private http: HttpClient) { }

    getDeployments() {
        return this.http.get<Deployment[]>(`${environment.apiUrl}deployments/`);
    }

    getDeployment(id: string) {
        return this.http.get<Deployment>(`${environment.apiUrl}deployments/${id}`);
    }

    newDeployment(form: any) {
        return this.http.post(`${environment.apiUrl}deployments/`, form);
    }

    updateDeployment(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}deployments/${id}/`, form);
    }    


}