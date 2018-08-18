import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    public form = {
        email: null,
        name: null,
        password: null,
        password_confirmation: null
    };

    public error = [];

    constructor(
        private Jarwis: JarwisService,
        private Token: TokenService,
        private router: Router
    ) {
    }

    onSubmit() {
        this.Jarwis.signup(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.router.navigateByUrl('/');
    }

    handleError(error) {
        this.error = error.error.errors;
    }
}
