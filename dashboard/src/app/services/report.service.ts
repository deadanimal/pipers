import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Report } from '../models/report.model';

@Injectable({ providedIn: 'root' })
export class ReportService {

    reports: Report[] = [];
    report: Report;

    constructor(private http: HttpClient) { }

    getReports() {
        return this.http.get<Report[]>(`${environment.apiUrl}reports/`);
    }

    getReport(id: string) {
        return this.http.get<Report>(`${environment.apiUrl}reports/${id}`);
    }

    newReport(form: any) {
        return this.http.post(`${environment.apiUrl}reports/`, form);
    }

    updateReport(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}reports/${id}/`, form);
    }    


}