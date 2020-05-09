import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Ticket } from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketService {

    tickets: Ticket[] = [];
    ticket: Ticket;

    constructor(private http: HttpClient) { }

    getTickets() {
        return this.http.get<Ticket[]>(`${environment.apiUrl}tickets/`);
    }

    getTicket(id: string) {
        return this.http.get<Ticket>(`${environment.apiUrl}tickets/${id}`);
    }

    newTicket(form: any) {
        return this.http.post(`${environment.apiUrl}tickets/`, form);
    }

    updateTicket(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}tickets/${id}/`, form);
    }    


}