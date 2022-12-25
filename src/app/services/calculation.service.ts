import {Injectable} from '@angular/core';
import {Calculation} from "../entity/Calculation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
    providedIn: 'root'
})
export class CalculationService {

    currentCalcId: number = 0
    calculations: Calculation[] = []
    authTokens: AuthRequest = this.authService.getAuthTokens()

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
    }

    addCalculation(clientId: number, calculationData: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            id: clientId
        }
        // console.log(JSON.stringify(calculationData))
        return this.http.post(API_URL + '/business/addCalculation', JSON.stringify(calculationData), {headers: headers, params: params})
    }

    getCalculations(clientId: number) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            id: clientId
        }
        return this.http.get(API_URL + '/business/getCalculation', {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'});
    }

    deleteCalculation(calculationNumber: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            'calculationNumber': calculationNumber
        }
        return this.http.post(API_URL + '/business/deleteCalculation', null, {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'});
    }

    setCalculations(calculations: Calculation[]) {
        this.calculations = calculations
    }

    setCurrentCalcId(id: number) {
        this.currentCalcId = id
    }
    getCurrentId() {
        return this.currentCalcId
    }

    deleteInArray(num: any) {
        this.calculations = this.calculations.filter(calc => calc !== this.calculations.filter(calc => calc.number == num)[0])
    }

    getCalulationsArray() {
        return this.calculations
    }
    getCalulationNumber(id: number) {
        return this.calculations.filter(calc => calc.id === id)[0].number
        // return this.calculations.find(calc => calc.id === id)!.number
    }

    getStatuses() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })

        return this.http.get(API_URL + '/business/statuses', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
    }

    updateCalculation(calculation: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })

        return this.http.patch(API_URL + '/business/updateCalculation', JSON.stringify(calculation), {headers: headers})
    }

}
