import {Injectable} from '@angular/core';
import {Material} from "../entity/Material";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {AuthService} from "./auth.service";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
    providedIn: 'root'
})

export class MaterialsService {

    materialArray: Material[] = []
    authTokens: AuthRequest = this.authService.getAuthTokens()

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
    }

    getMaterials() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        })
        return this.http.get(API_URL + '/business/getMaterials', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
    }

    setMaterialArray(materials: Material[]) {
        this.materialArray = materials
    }
    getMaterialArray() {
        return this.materialArray
    }

}
