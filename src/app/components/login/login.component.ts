import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public form = {
        email: null,
        password: null
    };

    public error = null;

    constructor(
        private Jarwis: JarwisService,
        private Token: TokenService,
        private router: Router,
        private Auth: AuthService
    ) {
    }

    onSubmit() {
        this.Jarwis.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/');
    }

    handleError(error) {
        this.error = error.error.error;
    }
}
