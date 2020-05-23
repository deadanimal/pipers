import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Submission } from '../models/submission.model';

@Injectable({ providedIn: 'root' })
export class SubmissionService {

    submissions: Submission[] = [];
    submission: Submission;

    constructor(private http: HttpClient) { }

    getSubmissions() {
        return this.http.get<Submission[]>(`${environment.apiUrl}submissions/`);
    }

    getSubmission(id: string) {
        return this.http.get<Submission>(`${environment.apiUrl}submissions/${id}`);
    }

    newSubmission(form: any) {
        return this.http.post(`${environment.apiUrl}submissions/`, form);
    }

    updateSubmission(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}submissions/${id}/`, form);
    }    


}