import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { HelpComponent } from './components/help/help.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'signup',
        component: SignupComponent,
    }, {
        path: 'request-password-reset',
        component: RequestResetComponent,
    }, {
        path: 'response-password-reset',
        component: ResponseResetComponent,
    }, {
        path: 'play',
        component: PlayComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'rankings',
        component: RankingsComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'help',
        component: HelpComponent,
        canActivate: [AuthGuardService]
    }, {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: []
})
export class AppRoutingModule {
}
