import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private baseUrl = environment.baseUrl;

    constructor() {
    }

    handle(token: string) {
        this.set(token);
    }

    get(): string | null {
        return localStorage.getItem('token');
    }

    set(token: string) {
        localStorage.setItem('token', token);
    }

    remove(): void {
        localStorage.removeItem('token');
    }

    isValid(): boolean {
        const token = this.get();

        if (token) {
            const payload = this.payload(token);

            if (payload) {
                return payload.iss.includes(this.baseUrl.split('//')[1]);
            }
        }

        return false;
    }

    payload(token: string) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    private decode(payload: string) {
        return JSON.parse(atob(payload));
    }

    loggedIn(): boolean {
        return this.isValid();
    }
}
