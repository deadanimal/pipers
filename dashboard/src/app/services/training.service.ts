import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Training } from '../models/training.model';

@Injectable({ providedIn: 'root' })
export class TrainingService {

    trainings: Training[] = [];
    training: Training;

    constructor(private http: HttpClient) { }

    getTrainings() {
        return this.http.get<Training[]>(`${environment.apiUrl}trainings/`);
    }

    getTraining(id: string) {
        return this.http.get<Training>(`${environment.apiUrl}trainings/${id}`);
    }

    newTraining(form: any) {
        return this.http.post(`${environment.apiUrl}trainings/`, form);
    }

    updateTraining(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}trainings/${id}/`, form);
    }    


}