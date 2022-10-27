import { Injectable } from '@angular/core';

export interface Manager {
  id?: number
  name: string
  surname: string
  patronymic: string
  jobpost: string
  telephone: number
  email: string
  password: number
}

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  managers: Manager[] = [
    {
      id: 1,
      name: 'Игорь',
      surname: 'Малинин',
      patronymic: 'Игоревич',
      jobpost: 'Менеджер',
      telephone: 89608223422,
      email: 'igorswayts@gmail.com',
      password: 12345678
    }
  ]

  constructor() { }



}
