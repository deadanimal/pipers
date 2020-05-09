import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Plant } from '../models/plant.model';

@Injectable({ providedIn: 'root' })
export class PlantService {

    plants: Plant[] = [];
    plant: Plant;

    constructor(private http: HttpClient) { }

    getPlants() {
        return this.http.get<Plant[]>(`${environment.apiUrl}plants/`);
    }

    getPlant(id: string) {
        return this.http.get<Plant>(`${environment.apiUrl}plants/${id}`);
    }

    newPlant(form: any) {
        return this.http.post(`${environment.apiUrl}plants/`, form);
    }

    updatePlant(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}plants/${id}/`, form);
    }    


}