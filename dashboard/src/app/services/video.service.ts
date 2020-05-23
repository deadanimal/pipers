import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Video } from '../models/video.model';

@Injectable({ providedIn: 'root' })
export class VideoService {

    videos: Video[] = [];
    video: Video;

    constructor(private http: HttpClient) { }

    getVideos() {
        return this.http.get<Video[]>(`${environment.apiUrl}videos/`);
    }

    getVideo(id: string) {
        return this.http.get<Video>(`${environment.apiUrl}videos/${id}`);
    }

    newVideo(form: any) {
        return this.http.post(`${environment.apiUrl}videos/`, form);
    }

    updateVideo(id: string, form: any) {
        return this.http.put(`${environment.apiUrl}videos/${id}/`, form);
    }    


}