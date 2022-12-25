import {Injectable} from '@angular/core';
import {Results} from "../entity/Results";
import {AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
    providedIn: 'root'
})
export class ResultsService {

    authTokens: AuthRequest = this.authService.getAuthTokens()

    results: Array<Results>[] = []
    editForm: any

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
    }

    addFrame(frameData: any, calculationNumber: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            'calculationNumber': calculationNumber
        }
        console.log(JSON.stringify(frameData))
        return this.http.post(API_URL + '/business/addFrame', JSON.stringify(frameData), {
            headers: headers,
            params: params
        })
    }

    updateFrame(frameData: any, calculationNumber: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            'calculationNumber': calculationNumber
        }
        console.log(JSON.stringify(frameData))
        return this.http.patch(API_URL + '/business/updateFrame', JSON.stringify(frameData), {
            headers: headers,
            params: params
        })
    }

    getResults(calculationNumber: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        let params = {
            'calculationNumber': calculationNumber
        }
        return this.http.get(API_URL + '/business/getResults', {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'});
    }

    setResults(results: Results[]) {
        this.results.push(results)
    }

    setEditForm(editForm: any) {
        this.editForm = editForm
    }

    getEditForm() {
        return this.editForm
    }

    getResultsArray() {
        return this.results
    }

    getFloorNumber() {
        if (this.results != []) {
            return this.results.length
        }
        return 1
    }

    clearResults() {
        this.results = []
    }
}
