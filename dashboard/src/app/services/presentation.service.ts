import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Presentation } from '../models/presentation.model';

@Injectable({ providedIn: 'root' })
export class PresentationService {

    presentations: Presentation[] = [];
    presentation: Presentation;

    constructor(private http: HttpClient) { }

    getPresentations() {
        return this.http.get<Presentation[]>(`${environment.apiUrl}presentations/`);
    }

    getPresentation(id: string) {
        return this.http.get<Presentation>(`${environment.apiUrl}presentations/${id}`);
    }

    reschedulePresentation(id: string, form: any) {
        return this.http.post(`${environment.apiUrl}presentations/${id}/reschedule`, form);
    }    

    newPresentation(form: any) {
        return this.http.post(`${environment.apiUrl}presentations/`, form);
    }

    updatePresentation(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}presentations/${id}/`, form);
    }    


}