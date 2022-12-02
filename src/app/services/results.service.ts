import { Injectable } from '@angular/core';
import {Results} from "../entity/Results";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  results: Results[] = [
    {id: 1, manager_id: 1, addressOC: 'Ленина, 32', numberN: 12, created_date: new Date('2.08.2021'), cStatus: false},
    {id: 2, manager_id: 2, addressOC: 'somewhere on the middle', numberN: 18, created_date: new Date('4.12.2021'), cStatus: false},
    {id: 3, manager_id: 2, addressOC: 'you will not find me', numberN: 29, created_date: new Date('06.24.2022'), cStatus: true},
    {id: 4, manager_id: 1, addressOC: 'Московское шоссе, 34Б', numberN: 45, created_date: new Date('09.02.2022'), cStatus: true},
  ]

  constructor() { }
}
