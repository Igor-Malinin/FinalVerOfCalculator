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
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {NgSelectModule} from '@ng-select/ng-select';
import { ConsctructionNodeComponent } from './consctruction-node/consctruction-node.component';
import { HouseframeCalcComponent } from './houseframe-calc/houseframe-calc.component';
import { HousefoundationCalcComponent } from './housefoundation-calc/housefoundation-calc.component';
import { ResultsComponent } from './results/results.component';
import {RoundNumPipe} from "./pipes/roundNum.pipe";
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorPageComponent,
        MainPageComponent,
        ClientsPageComponent,
        ClientComponent,
        CellphonePipe,
        RoundNumPipe,
        ClientRegistrationComponent,
        ConsctructionNodeComponent,
        HouseframeCalcComponent,
        HousefoundationCalcComponent,
        ResultsComponent,
        UserRegistrationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        NgSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
