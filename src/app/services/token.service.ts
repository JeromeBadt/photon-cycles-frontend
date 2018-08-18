import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private iss = {
        login: 'http://photon-cycles.test/api/login',
        signup: 'http://photon-cycles.test/api/signup'
    };

    constructor() {
    }

    handle(token: string) {
        this.set(token);
    }

    get(): string {
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
                return Object.values(this.iss).includes(payload.iss);
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
