import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Milestone } from '../models/milestone.model';

@Injectable({ providedIn: 'root' })
export class MilestoneService {

    milestones: Milestone[] = [];
    milestone: Milestone;

    constructor(private http: HttpClient) { }

    getMilestones() {
        return this.http.get<Milestone[]>(`${environment.apiUrl}milestones/`);
    }

    getMilestone(id: string) {
        return this.http.get<Milestone>(`${environment.apiUrl}milestones/${id}`);
    }

    newMilestone(form: any) {
        return this.http.post(`${environment.apiUrl}milestones/`, form);
    }

    updateMilestone(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}milestones/${id}/`, form);
    }    


}