import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  authTokens: AuthRequest = {
    access_token: this.cookieService.get('access_token'),
    refresh_token: this.cookieService.get('refresh_token')
  }

  constructor(
      private http: HttpClient,
      private cookieService: CookieService,
      private authService: AuthService
  ) { }

  addUser(newUserData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    return this.http.post(API_URL + '/admin/addUser', JSON.stringify(newUserData), {headers: headers})
  }

  getRoles() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    // console.log(this.authTokens.access_token)
    return this.http.get(API_URL + '/admin/roles', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }

  getStatuses() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    // console.log(this.authTokens.access_token)
    return this.http.get(API_URL + '/admin/getStatuses', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }

}
