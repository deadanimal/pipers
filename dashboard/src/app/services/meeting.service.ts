import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Meeting } from '../models/meeting.model';

@Injectable({ providedIn: 'root' })
export class MeetingService {

    meetings: Meeting[] = [];
    meeting: Meeting;

    constructor(private http: HttpClient) { }

    getMeetings() {
        return this.http.get<Meeting[]>(`${environment.apiUrl}meetings/`);
    }

    getMeeting(id: string) {
        return this.http.get<Meeting>(`${environment.apiUrl}meetings/${id}`);
    }

    newMeeting(form: any) {
        return this.http.post(`${environment.apiUrl}meetings/`, form);
    }

    updateMeeting(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}meetings/${id}/`, form);
    }    


}