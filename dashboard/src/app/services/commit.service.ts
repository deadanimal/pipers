import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Commit } from '../models/commit.model';

@Injectable({ providedIn: 'root' })
export class CommitService {

    commits: Commit[] = [];
    commit: Commit;

    constructor(private http: HttpClient) { }

    getCommits() {
        return this.http.get<Commit[]>(`${environment.apiUrl}commits/`);
    }

    getCommit(id: string) {
        return this.http.get<Commit>(`${environment.apiUrl}commits/${id}`);
    }

    newCommit(form: any) {
        return this.http.post(`${environment.apiUrl}commits/`, form);
    }

    updateCommit(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}commits/${id}/`, form);
    }    


}