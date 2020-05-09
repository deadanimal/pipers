import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Device } from '../models/device.model';

@Injectable({ providedIn: 'root' })
export class DeviceService {

    devices: Device[] = [];
    device: Device;

    constructor(private http: HttpClient) { }

    getDevices() {
        return this.http.get<Device[]>(`${environment.apiUrl}devices/`);
    }

    getDevice(id: string) {
        return this.http.get<Device>(`${environment.apiUrl}devices/${id}`);
    }

    newDevice(form: any) {
        return this.http.post(`${environment.apiUrl}devices/`, form);
    }

    updateDevice(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}devices/${id}/`, form);
    }    


}