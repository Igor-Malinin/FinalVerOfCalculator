import { Injectable } from '@angular/core';

export interface Client {
  id?: number
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

  clients: Client[] = [
    {id: 11, name: 'Name1', surname: 'Surname1', patronymic: 'Patronymic1', telephone: 89008887766, email: 'email1@gmail.com', address: 'City1, street1, home1'},
    {id: 22, name: 'Name2', surname: 'Surname2', patronymic: 'Patronymic2', telephone: 89008887766, email: 'email2@gmail.com', address: 'City2, street2, home2'},
    {id: 33, name: 'Name3', surname: 'Surname3', patronymic: 'Patronymic3', telephone: 89008887766, email: 'email3@gmail.com', address: 'City3, street3, home3'},
    {id: 44, name: 'Name4', surname: 'Surname4', patronymic: 'Patronymic4', telephone: 89008887766, email: 'email4@gmail.com', address: 'City4, street4, home4'},
  ]

  constructor() {
  }

  getById(id: number) {
    return this.clients.find(c => c.id === id)
  }
}
