import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {

    contacts: Contact[] = [];
    contact: Contact;

    constructor(private http: HttpClient) { }

    getContacts() {
        return this.http.get<Contact[]>(`${environment.apiUrl}contacts/`);
    }

    getContact(id: string) {
        return this.http.get<Contact>(`${environment.apiUrl}contacts/${id}`);
    }

    newContact(form: any) {
        return this.http.post(`${environment.apiUrl}contacts/`, form);
    }

    updateContact(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}contacts/${id}/`, form);
    }    


}