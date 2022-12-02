import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
        private cookieService: CookieService
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true
            } else {
                this.router.navigate(['/error'], {
                    queryParams: {
                        auth: false
                    }
                })
                return false
            }
        })
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)
    }
}
