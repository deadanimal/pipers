import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Document } from '../models/document.model';

@Injectable({ providedIn: 'root' })
export class DocumentService {

    documents: Document[] = [];
    document: Document;

    constructor(private http: HttpClient) { }

    getDocuments() {
        return this.http.get<Document[]>(`${environment.apiUrl}documents/`);
    }

    getDocument(id: string) {
        return this.http.get<Document>(`${environment.apiUrl}documents/${id}`);
    }

    newDocument(form: any) {
        return this.http.post(`${environment.apiUrl}documents/`, form);
    }

    updateDocument(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}documents/${id}/`, form);
    }    


}