import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { HelpComponent } from './components/help/help.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        SignupComponent,
        RequestResetComponent,
        ResponseResetComponent,
        HomeComponent,
        PlayComponent,
        RankingsComponent,
        HelpComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SnotifyModule
    ],
    providers: [
        {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
