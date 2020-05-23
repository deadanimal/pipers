import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Diagram } from '../models/diagram.model';

@Injectable({ providedIn: 'root' })
export class DiagramService {

    diagrams: Diagram[] = [];
    diagram: Diagram;

    constructor(private http: HttpClient) { }

    generateUML(form: any) {
        return this.http.post(`${environment.apiUrl}diagrams/generate_uml/`, form);
    }    

    getDiagrams() {
        return this.http.get<Diagram[]>(`${environment.apiUrl}diagrams/`);
    }

    getDiagram(id: string) {
        return this.http.get<Diagram>(`${environment.apiUrl}diagrams/${id}`);
    }

    newDiagram(form: any) {
        return this.http.post(`${environment.apiUrl}diagrams/`, form);
    }

    updateDiagram(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}diagrams/${id}/`, form);
    }    

    deleteDiagram(id: string) {
        return this.http.delete(`${environment.apiUrl}diagrams/${id}/`);
    }  


}