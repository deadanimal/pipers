import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Proposal } from '../models/proposal.model';

@Injectable({ providedIn: 'root' })
export class ProposalService {

    proposals: Proposal[] = [];
    proposal: Proposal;

    constructor(private http: HttpClient) { }

    getProposals() {
        return this.http.get<Proposal[]>(`${environment.apiUrl}proposals/`);
    }

    getProposal(id: string) {
        return this.http.get<Proposal>(`${environment.apiUrl}proposals/${id}`);
    }

    newProposal(form: any) {
        return this.http.post(`${environment.apiUrl}proposals/`, form);
    }

    updateProposal(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}proposals/${id}/`, form);
    }    


}