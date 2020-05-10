import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Campaign } from '../models/campaign.model';

@Injectable({ providedIn: 'root' })
export class CampaignService {

    campaigns: Campaign[] = [];
    campaign: Campaign;

    constructor(private http: HttpClient) { }

    getCampaigns() {
        return this.http.get<Campaign[]>(`${environment.apiUrl}campaigns/`);
    }

    getCampaign(id: string) {
        return this.http.get<Campaign>(`${environment.apiUrl}campaigns/${id}`);
    }

    newCampaign(form: any) {
        return this.http.post(`${environment.apiUrl}campaigns/`, form);
    }

    updateCampaign(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}campaigns/${id}/`, form);
    }    


}