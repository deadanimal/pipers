import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Invoice } from '../models/invoice.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {

    invoices: Invoice[] = [];
    invoice: Invoice;

    constructor(private http: HttpClient) { }

    getInvoices() {
        return this.http.get<Invoice[]>(`${environment.apiUrl}invoices/`);
    }

    getInvoice(id: string) {
        return this.http.get<Invoice>(`${environment.apiUrl}invoices/${id}`);
    }

    newInvoice(form: any) {
        return this.http.post(`${environment.apiUrl}invoices/`, form);
    }

    updateInvoice(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}invoices/${id}/`, form);
    }    


}