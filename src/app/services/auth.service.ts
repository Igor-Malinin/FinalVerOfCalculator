import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokens!: AuthRequest
  private isAuth = false
  username = ''
  password = ''

  constructor(private http: HttpClient) {
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
    this.isAuth = false
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
}
