import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";
import {CurrentManager} from "../entity/currentManager";

const API_URL: string = 'http://51.250.54.62:8080'

export interface Client {
  id?: number
  surname: string
  name: string
  patronymic: string
  telephoneNumber: number
  email: string
  address: string
  user: object
}

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  authTokens: AuthRequest = this.authService.getAuthTokens()
  currentManager: CurrentManager = this.authService.getCurrentManager()
  clientpage = true

  clients: Client[] = []

  constructor(private http: HttpClient,
              private authService: AuthService
              ) {
  }

  getById(id: number) {
    return this.clients.find(c => c.id === id)
  }

  addCustomer(newClientData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      'login': this.currentManager.login
    }
    return this.http.post(API_URL + '/api/addCustomer', JSON.stringify(newClientData), {headers: headers, params: params})
  }

  getAllClients() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    return this.http.get(API_URL + '/api/customers', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }
}
