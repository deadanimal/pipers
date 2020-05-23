import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Wireframe } from '../models/wireframe.model';

@Injectable({ providedIn: 'root' })
export class WireframeService {

    wireframes: Wireframe[] = [];
    wireframe: Wireframe;

    constructor(private http: HttpClient) { }

    getWireframes() {
        return this.http.get<Wireframe[]>(`${environment.apiUrl}wireframes/`);
    }

    getWireframe(id: string) {
        return this.http.get<Wireframe>(`${environment.apiUrl}wireframes/${id}`);
    }

    newWireframe(form: any) {
        return this.http.post(`${environment.apiUrl}wireframes/`, form);
    }

    updateWireframe(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}wireframes/${id}/`, form);
    }    


}