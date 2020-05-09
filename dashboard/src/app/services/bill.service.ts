import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Bill } from '../models/bill.model';

@Injectable({ providedIn: 'root' })
export class BillService {

    bills: Bill[] = [];
    bill: Bill;

    constructor(private http: HttpClient) { }

    getBills() {
        return this.http.get<Bill[]>(`${environment.apiUrl}bills/`);
    }

    getBill(id: string) {
        return this.http.get<Bill>(`${environment.apiUrl}bills/${id}`);
    }

    newBill(form: any) {
        return this.http.post(`${environment.apiUrl}bills/`, form);
    }

    updateBill(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}bills/${id}/`, form);
    }    


}