import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class FuncService {


    constructor(private http: HttpClient) { }

    contactUs(form: any) {
        return this.http.post(`${environment.apiUrl}funcs/contact_us/`, form);
    }


}