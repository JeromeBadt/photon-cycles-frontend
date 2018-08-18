import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
    selector: 'app-response-reset',
    templateUrl: './response-reset.component.html',
    styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent {
    public error = [];
    public form = {
        password: null,
        password_confirmation: null,
        token: null
    };

    constructor(
        private route: ActivatedRoute,
        private Jarwis: JarwisService,
        private router: Router,
        private Notify: SnotifyService
    ) {
        route.queryParams.subscribe(params => {
            this.form.token = params['token'];
        });
    }

    onSubmit() {
        this.Jarwis.changePassword(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    private handleResponse(data) {
        this.Notify.confirm(data.data, {
            buttons: [{
                text: 'Okay',
                action: toast => {
                    this.router.navigateByUrl('/login');
                    this.Notify.remove(toast.id);
                }
            }]
        });
    }

    private handleError(error) {
        this.error = error.error.errors;
    }
}
