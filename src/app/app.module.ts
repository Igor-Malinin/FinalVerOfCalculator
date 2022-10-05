import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {MainPageComponent} from './main-page/main-page.component';
import {ClientsPageComponent} from './clients-page/clients-page.component';
import {ClientComponent} from './client/client.component';
import {CellphonePipe} from "./pipes/cellphone.pipe";
import { ClientRegistrationComponent } from './client-registration/client-registration.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorPageComponent,
        MainPageComponent,
        ClientsPageComponent,
        ClientComponent,
        CellphonePipe,
        ClientRegistrationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
