import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Bot } from '../models/bot.model';

@Injectable({ providedIn: 'root' })
export class BotService {

    bots: Bot[] = [];
    bot: Bot;

    constructor(private http: HttpClient) { }

    getBots() {
        return this.http.get<Bot[]>(`${environment.apiUrl}bots/`);
    }

    getBot(id: string) {
        return this.http.get<Bot>(`${environment.apiUrl}bots/${id}`);
    }

    newBot(form: any) {
        return this.http.post(`${environment.apiUrl}bots/`, form);
    }

    updateBot(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}bots/${id}/`, form);
    }    


}