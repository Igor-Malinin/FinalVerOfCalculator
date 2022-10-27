import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {CurrentManager} from "../entity/currentManager";
import {CookieService} from "ngx-cookie-service";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokens!: AuthRequest
  private currentManager!: CurrentManager
  private isAuth = false
  username = ''
  password = ''

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
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
    this.cookieService.deleteAll()
    this.isAuth = false
  }

  refreshToken () {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('refresh_token')
    })
    return this.http.get(API_URL + '/api/token/refresh', {headers: headers})
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 400)
    })
  }

  getIsAuth () {
    return this.isAuth
  }
  setAuth (status: boolean) {
    this.isAuth = status
  }
  getAuthTokens () {
    return this.authTokens
  }
  setAuthTokens (access_token: string, refresh_token: string) {
    this.authTokens = {
      access_token: access_token,
      refresh_token: refresh_token
    } || {}
  }
  getCurrentManager () {
    return this.currentManager
  }
  setCurrentManager (id: number, surname: string, name: string, patronymic: string, login: string, role: string) {
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
