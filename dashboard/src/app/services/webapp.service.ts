import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Webapp } from '../models/webapp.model';

@Injectable({ providedIn: 'root' })
export class WebappService {

    webapps: Webapp[] = [];
    webapp: Webapp;

    constructor(private http: HttpClient) { }

    getWebapps() {
        return this.http.get<Webapp[]>(`${environment.apiUrl}webapps/`);
    }

    getWebapp(id: string) {
        return this.http.get<Webapp>(`${environment.apiUrl}webapps/${id}`);
    }

    newWebapp(form: any) {
        return this.http.post(`${environment.apiUrl}webapps/`, form);
    }

    updateWebapp(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}webapps/${id}/`, form);
    }    


}