import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Prototype } from '../models/prototype.model';

@Injectable({ providedIn: 'root' })
export class PrototypeService {

    prototypes: Prototype[] = [];
    prototype: Prototype;

    constructor(private http: HttpClient) { }

    getPrototypes() {
        return this.http.get<Prototype[]>(`${environment.apiUrl}prototypes/`);
    }

    getPrototype(id: string) {
        return this.http.get<Prototype>(`${environment.apiUrl}prototypes/${id}`);
    }

    newPrototype(form: any) {
        return this.http.post(`${environment.apiUrl}prototypes/`, form);
    }

    updatePrototype(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}prototypes/${id}/`, form);
    }    


}