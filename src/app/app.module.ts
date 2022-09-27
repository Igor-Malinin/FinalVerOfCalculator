import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {MainPageComponent} from './main-page/main-page.component';
import {ClientsPageComponent} from './clients-page/clients-page.component';
import {ClientComponent} from './client/client.component';
import {CellphonePipe} from "./pipes/cellphone.pipe";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorPageComponent,
        MainPageComponent,
        ClientsPageComponent,
        ClientComponent,
        CellphonePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
