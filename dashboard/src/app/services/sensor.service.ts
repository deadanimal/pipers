import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Sensor } from '../models/sensor.model';

@Injectable({ providedIn: 'root' })
export class SensorService {

    sensors: Sensor[] = [];
    sensor: Sensor;

    constructor(private http: HttpClient) { }

    getSensors() {
        return this.http.get<Sensor[]>(`${environment.apiUrl}sensors/`);
    }

    getSensor(id: string) {
        return this.http.get<Sensor>(`${environment.apiUrl}sensors/${id}`);
    }

    newSensor(form: any) {
        return this.http.post(`${environment.apiUrl}sensors/`, form);
    }

    updateSensor(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}sensors/${id}/`, form);
    }    


}