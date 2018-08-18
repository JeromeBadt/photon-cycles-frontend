import { Component } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent {
    public form = {
        email: null
    };

    constructor(
        private Jarwis: JarwisService,
        private Notify: SnotifyService,
    ) {
    }

    onSubmit() {
        this.Notify.info('Please wait, email will be sent soon...');
        this.Jarwis.sendPasswordResetLink(this.form).subscribe(
            data => this.handleResponse(data),
            error => {
                this.Notify.clear();
                this.Notify.error(error.error.error);
            }
        );
    }

    handleResponse(data) {
        this.Notify.clear();
        this.Notify.success(data.data);
        this.form.email = null;
    }
}
