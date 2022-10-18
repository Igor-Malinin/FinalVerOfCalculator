import { Injectable } from '@angular/core';

export interface Calculation {
  id: number
  manager_id: number
  addressOC: string
  numberN: number
  created_date: Date
  cStatus: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  calculation: Calculation[] = [
    {id: 1, manager_id: 1, addressOC: 'Ленина, 32', numberN: 12, created_date: new Date('2.08.2021'), cStatus: false},
    {id: 2, manager_id: 2, addressOC: 'somewhere on the middle', numberN: 18, created_date: new Date('4.12.2021'), cStatus: false},
    {id: 3, manager_id: 2, addressOC: 'in your pants', numberN: 29, created_date: new Date('06.24.2022'), cStatus: true},
    {id: 4, manager_id: 1, addressOC: 'Московское шоссе, 34Б', numberN: 45, created_date: new Date('09.02.2022'), cStatus: true},
  ]

  constructor() { }
}