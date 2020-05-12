import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentToken = JSON.parse(localStorage.getItem('currentToken'));
        if (currentToken && currentToken.access) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentToken.access}`
                }
            });
        }

        return next.handle(request);
    }
}