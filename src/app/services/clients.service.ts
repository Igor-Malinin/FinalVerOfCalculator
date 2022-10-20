import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";

const API_URL: string = 'http://51.250.54.62:8080'

export interface Client {
  id?: number
  groupName: string
  name: string
  surname: string
  patronymic: string
  telephone: number
  email: string
  address: string
}

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  authTokens: AuthRequest = this.authService.getAuthTokens()
  clientpage = true


  clients: Client[] = [
    {id: 11, groupName: "ROLE_USER",name: 'Иван', surname: 'Луника', patronymic: 'Университетович', telephone: 89008887766, email: 'email1@gmail.com', address: 'Самара, улицинская, 35'},
    {id: 22, groupName: "ROLE_USER",name: 'Name2', surname: 'Surname2', patronymic: 'Patronymic2', telephone: 89008887766, email: 'email2@gmail.com', address: 'City2, street2, home2'},
    {id: 33, groupName: "ROLE_USER",name: 'Name3', surname: 'Surname3', patronymic: 'Patronymic3', telephone: 89008887766, email: 'email3@gmail.com', address: 'City3, street3, home3'},
    {id: 44, groupName: "ROLE_USER",name: 'Name4', surname: 'Surname4', patronymic: 'Patronymic4', telephone: 89008887766, email: 'email4@gmail.com', address: 'City4, street4, home4'},
    {id: 55, groupName: "ROLE_USER",name: 'Name5', surname: 'Surname5', patronymic: 'Patronymic5', telephone: 89008887766, email: 'email5@gmail.com', address: 'City5, street5, home5'},
    {id: 66, groupName: "ROLE_USER",name: 'Name6', surname: 'Surname6', patronymic: 'Patronymic6', telephone: 89008887766, email: 'email6@gmail.com', address: 'City6, street6, home6'},
    {id: 77, groupName: "ROLE_USER",name: 'Name7', surname: 'Surname7', patronymic: 'Patronymic7', telephone: 89008887766, email: 'email7@gmail.com', address: 'City7, street7, home7'},
    {id: 88, groupName: "ROLE_USER",name: 'Name8', surname: 'Surname8', patronymic: 'Patronymic8', telephone: 89008887766, email: 'email8@gmail.com', address: 'City8, street8, home8'},
  ]

  constructor(private http: HttpClient,
              private authService: AuthService
              ) {
  }

  getById(id: number) {
    return this.clients.find(c => c.id === id)
  }

  getAllUsers() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    this.http.get(API_URL + '/api/users', {headers: headers, responseType: 'text' as 'json', observe: 'response'})
        .subscribe({
          next: (msg) => {
            console.log(msg)
          },
          error: (err) => {
            console.log('error received:', err)
          },
          complete: () => console.log('complete')
        })

    return this.http.get(API_URL + '/api/users', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }
}
