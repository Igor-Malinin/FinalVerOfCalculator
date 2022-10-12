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
  clientpage = true

  clients: Client[] = [
    {id: 11, name: 'Иван', surname: 'Луника', patronymic: 'Университетович', telephone: 89008887766, email: 'email1@gmail.com', address: 'Самара, улицинская, 35'},
    {id: 22, name: 'Name2', surname: 'Surname2', patronymic: 'Patronymic2', telephone: 89008887766, email: 'email2@gmail.com', address: 'City2, street2, home2'},
    {id: 33, name: 'Name3', surname: 'Surname3', patronymic: 'Patronymic3', telephone: 89008887766, email: 'email3@gmail.com', address: 'City3, street3, home3'},
    {id: 44, name: 'Name4', surname: 'Surname4', patronymic: 'Patronymic4', telephone: 89008887766, email: 'email4@gmail.com', address: 'City4, street4, home4'},
    {id: 55, name: 'Name5', surname: 'Surname5', patronymic: 'Patronymic5', telephone: 89008887766, email: 'email5@gmail.com', address: 'City5, street5, home5'},
    {id: 66, name: 'Name6', surname: 'Surname6', patronymic: 'Patronymic6', telephone: 89008887766, email: 'email6@gmail.com', address: 'City6, street6, home6'},
    {id: 77, name: 'Name7', surname: 'Surname7', patronymic: 'Patronymic7', telephone: 89008887766, email: 'email7@gmail.com', address: 'City7, street7, home7'},
    {id: 88, name: 'Name8', surname: 'Surname8', patronymic: 'Patronymic8', telephone: 89008887766, email: 'email8@gmail.com', address: 'City8, street8, home8'},
  ]

  constructor() {
  }

  getById(id: number) {
    return this.clients.find(c => c.id === id)
  }
}
