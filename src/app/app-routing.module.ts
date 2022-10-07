import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {LoginComponent} from "./login/login.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ClientsPageComponent} from "./clients-page/clients-page.component";
import {AuthGuard} from "./auth.guard";
import {ClientComponent} from "./client/client.component";
import {ClientRegistrationComponent} from "./client-registration/client-registration.component";

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'clientspage', component: ClientsPageComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id', component: ClientComponent},
    {path: 'login', component: LoginComponent},
    {path: 'clientregistration', component: ClientRegistrationComponent},

    {path: 'error', component: ErrorPageComponent},

    {path: '**', redirectTo: '/error'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
