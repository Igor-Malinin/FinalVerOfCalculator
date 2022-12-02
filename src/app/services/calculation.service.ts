import { Injectable } from '@angular/core';
import {Calculation} from "../entity/Calculation";



@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  calculations: Calculation

  constructor() { }
}
