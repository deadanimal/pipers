import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Note } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class NoteService {

    notes: Note[] = [];
    note: Note;

    constructor(private http: HttpClient) { }

    getNotes() {
        return this.http.get<Note[]>(`${environment.apiUrl}notes/`);
    }

    getNote(id: string) {
        return this.http.get<Note>(`${environment.apiUrl}notes/${id}`);
    }

    newNote(form: any) {
        return this.http.post(`${environment.apiUrl}notes/`, form);
    }

    updateNote(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}notes/${id}/`, form);
    }    


}