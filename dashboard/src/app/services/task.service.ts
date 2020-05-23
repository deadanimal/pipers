import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {

    tasks: Task[] = [];
    task: Task;

    constructor(private http: HttpClient) { }

    getTasks() {
        return this.http.get<Task[]>(`${environment.apiUrl}tasks/`);
    }

    getTask(id: string) {
        return this.http.get<Task>(`${environment.apiUrl}tasks/${id}`);
    }

    newTask(form: any) {
        return this.http.post(`${environment.apiUrl}tasks/`, form);
    }

    updateTask(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}tasks/${id}/`, form);
    }    


}