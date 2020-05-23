import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Quotation } from '../models/quotation.model';

@Injectable({ providedIn: 'root' })
export class QuotationService {

    quotations: Quotation[] = [];
    quotation: Quotation;

    constructor(private http: HttpClient) { }

    getQuotations() {
        return this.http.get<Quotation[]>(`${environment.apiUrl}quotations/`);
    }

    getQuotation(id: string) {
        return this.http.get<Quotation>(`${environment.apiUrl}quotations/${id}`);
    }

    newQuotation(form: any) {
        return this.http.post(`${environment.apiUrl}quotations/`, form);
    }

    updateQuotation(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}quotations/${id}/`, form);
    }    


}