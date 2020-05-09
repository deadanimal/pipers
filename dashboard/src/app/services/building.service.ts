import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Building } from '../models/building.model';

@Injectable({ providedIn: 'root' })
export class BuildingService {

    buildings: Building[] = [];
    building: Building;

    constructor(private http: HttpClient) { }

    getBuildings() {
        return this.http.get<Building[]>(`${environment.apiUrl}buildings/`);
    }

    getBuilding(id: string) {
        return this.http.get<Building>(`${environment.apiUrl}buildings/${id}`);
    }

    newBuilding(form: any) {
        return this.http.post(`${environment.apiUrl}buildings/`, form);
    }

    updateBuilding(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}buildings/${id}/`, form);
    }    


}