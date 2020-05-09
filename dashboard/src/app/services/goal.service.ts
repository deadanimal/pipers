import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Goal } from '../models/goal.model';

@Injectable({ providedIn: 'root' })
export class GoalService {

    goals: Goal[] = [];
    goal: Goal;

    constructor(private http: HttpClient) { }

    getGoals() {
        return this.http.get<Goal[]>(`${environment.apiUrl}goals/`);
    }

    getGoal(id: string) {
        return this.http.get<Goal>(`${environment.apiUrl}goals/${id}`);
    }

    newGoal(form: any) {
        return this.http.post(`${environment.apiUrl}goals/`, form);
    }

    updateGoal(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}goals/${id}/`, form);
    }    


}