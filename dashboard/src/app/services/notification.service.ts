import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Notification } from '../models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    notifications: Notification[] = [];
    notification: Notification;

    constructor(private http: HttpClient) { }

    getNotifications() {
        return this.http.get<Notification[]>(`${environment.apiUrl}notifications/`);
    }

    getNotification(id: string) {
        return this.http.get<Notification>(`${environment.apiUrl}notifications/${id}`);
    }

    newNotification(form: any) {
        return this.http.post(`${environment.apiUrl}notifications/`, form);
    }

    updateNotification(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}notifications/${id}/`, form);
    }    


}