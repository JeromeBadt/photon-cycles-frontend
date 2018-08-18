import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class JarwisService {
    private baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    login(data) {
        return this.http.post(`${this.baseUrl}/login`, data);
    }

    signup(data) {
        return this.http.post(`${this.baseUrl}/signup`, data);
    }

    sendPasswordResetLink(email) {
        return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, email);
    }

    changePassword(data) {
        return this.http.post(`${this.baseUrl}/resetPassword`, data);
    }
}
