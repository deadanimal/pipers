import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    projects: Project[] = [];
    project: Project;

    constructor(private http: HttpClient) { }

    getProjects() {
        return this.http.get<Project[]>(`${environment.apiUrl}projects/`);
    }

    getProject(id: string) {
        return this.http.get<Project>(`${environment.apiUrl}projects/${id}`);
    }

    newProject(form: any) {
        return this.http.post(`${environment.apiUrl}projects/`, form);
    }

    updateProject(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}projects/${id}/`, form);
    }    


}