import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";
import {CurrentManager} from "../entity/currentManager";
import {Client} from "../entity/Client";

const API_URL: string = 'http://51.250.54.62:8080'

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
    return this.http.post(API_URL + '/api/addCustomer', JSON.stringify(newClientData), {headers: headers})
  }
//   @PatchMapping("/updateCustomer/{id}")
//   public ResponseEntity<?> updateCustomer(@RequestParam Long id, @RequestBody Customer customerDetails){
//    try {
//      return new ResponseEntity<>(customerService.updateCustomer(id, customerDetails), HttpStatus.OK);
//    }
//    catch (Exception ex){
//      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//   }

  updateCustomer(customerId: number, clientData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: customerId
    }
    return this.http.patch(API_URL + `/api/updateCustomer/${customerId}`, JSON.stringify(clientData), {headers: headers, params: params})
  }

  getAllClients() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: this.currentManager.id
    }
    return this.http.get(API_URL + '/api/customers', {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'});
  }
}
