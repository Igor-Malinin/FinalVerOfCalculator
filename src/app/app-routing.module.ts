import {NgModule} from "@angular/core";
import {CanActivateChild, RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {LoginComponent} from "./login/login.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ClientsPageComponent} from "./clients-page/clients-page.component";
import {AuthGuard} from "./auth.guard";
import {ClientComponent} from "./client/client.component";
import {ClientRegistrationComponent} from "./client-registration/client-registration.component";
import {ConsctructionNodeComponent} from "./consctruction-node/consctruction-node.component";
import {HouseframeCalcComponent} from "./houseframe-calc/houseframe-calc.component";
import {HousefoundationCalcComponent} from "./housefoundation-calc/housefoundation-calc.component";
import {HouseroofCalcComponent} from "./houseroof-calc/houseroof-calc.component";

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'clientspage', component: ClientsPageComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id', component: ClientComponent},
    {path: 'login', component: LoginComponent},
    {path: 'clientregistration', component: ClientRegistrationComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id/construction', component: ConsctructionNodeComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id/construction/houseframecalc', component: HouseframeCalcComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id/construction/housefoundationcalc', component: HousefoundationCalcComponent, canActivate: [AuthGuard]},
    {path: 'clientspage/:id/construction/houseroofcalc', component: HouseroofCalcComponent, canActivate: [AuthGuard]},

    {path: 'error', component: ErrorPageComponent},

    {path: '**', redirectTo: '/error'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
