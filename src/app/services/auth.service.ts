import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {CurrentManager} from "../entity/currentManager";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authTokens: AuthRequest = new AuthRequest()
    private currentManager: CurrentManager = new CurrentManager()
    private isAuth = false
    username = ''
    password = ''

    constructor(private http: HttpClient,
                private cookieService: CookieService,
                private router: Router
    ) {
    }

    login(username: string, password: string) {
        const params = {
            'username': username,
            'password': password
        }
        return this.http.post(
            API_URL + '/api/login', null, {
                params: params,
                responseType: 'text' as 'json',
                observe: 'response'
            }
        )
    }

    logout() {
        this.cookieService.deleteAll('/')
        this.isAuth = false
        setTimeout(() => {
            this.router.navigate(['/'])
        }, 200)
        setTimeout(() => {
            window.location.reload()
        }, 300)
    }

    refreshToken() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get('refresh_token')
        })
        return this.http.get(API_URL + '/api/token/refresh', {headers: headers}).subscribe({
            next: (msg) => {
                this.authTokens = JSON.parse(JSON.stringify(msg))
                this.setAuthTokens(this.authTokens.access_token, this.authTokens.refresh_token)
                this.cookieService.set('access_token', this.getAuthTokens().access_token, {expires: 1})
                this.cookieService.set('refresh_token', this.getAuthTokens().refresh_token, {expires: 1})
                setTimeout(() => {window.location.reload()}, 300)
            },
            error: (err) => {
                console.log('error: ', err)
                if (err.status == 403) {
                    alert('Ваша сессия закончилась. Авторизуйтесь заново')
                    this.logout()
                }
            },
            complete: () => {}
        })
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth)
            }, 400)
        })
    }

    getIsAuth() {
        return this.isAuth
    }

    setAuth(status: boolean) {
        this.isAuth = status
    }

    getAuthTokens() {
        return this.authTokens
    }

    setAuthTokens(access_token: string, refresh_token: string) {
        this.authTokens = {
            access_token: access_token,
            refresh_token: refresh_token
        } || {}
    }

    getCurrentManager() {
        return this.currentManager
    }

    setCurrentManager(id: number, surname: string, name: string, patronymic: string, login: string, role: string) {
        this.currentManager = {
            id: id,
            surname: surname,
            name: name,
            patronymic: patronymic,
            login: login,
            role: role
        }
    }
}
