import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CalculationService} from "../services/calculation.service";
import {Client} from "../entity/Client";
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {formatDate} from "@angular/common";
import {ResultsService} from "../services/results.service";
import {Calculation} from "../entity/Calculation";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    clientId: number;
    client: Client;
    newTokens: any;
    moreInfoToggle = false;
    editToggle = false;
    formCreateCalculation: any;
    formEditClient: any;
    telephoneLength = 10
    locale: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public clientsService: ClientsService,
        private authService: AuthService,
        public resultsService: ResultsService,
        private calculationService: CalculationService,
        public cookie: CookieService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.cookie.set('editFlag', JSON.stringify(false))
        this.client = new Client()
        this.route.params.subscribe({
            next: (params: Params) => {
                this.clientId = +params['id']
                this.clientsService.getAllClients().subscribe({
                    next: (msg) => {
                        this.clientsService.setClient(JSON.parse(String(msg.body)).filter((c: Client) => c.id === this.clientId)[0])
                        this.client = this.clientsService.getClient()
                        this.client.calculations = []
                        this.cookie.set('client', JSON.stringify(this.client))

                        if (this.clientsService.getClient() == undefined)
                            this.router.navigate(['/error'])
                        this.formEditClient = this.fb.group({
                            id: [this.clientsService.getClient().id],
                            surname: [this.clientsService.getClient().surname, Validators.required],
                            name: [this.clientsService.getClient().name, Validators.required],
                            patronymic: [this.clientsService.getClient().patronymic, Validators.required],
                            telephoneNumber: [this.clientsService.getClient().telephoneNumber, [
                                Validators.required,
                                Validators.minLength(this.telephoneLength),
                                Validators.maxLength(this.telephoneLength)
                            ]],
                            email: [this.clientsService.getClient().email, [
                                Validators.required,
                                Validators.email
                            ]],
                            address: [this.clientsService.getClient().address, Validators.required],
                            user: [this.clientsService.getClient().user]
                        })
                    },
                    error: (err) => {
                        if (err.status == 403) {
                            this.authService.refreshToken()
                        }
                        console.log('error: ', err)
                    },
                    complete: () => {
                    }
                })
            },
            error: (err) => {
                console.log('error received:', err)
            },
            complete: () => {
            }
        })

        function padTo2Digits(num: number) {
            return num.toString().padStart(2, '0');
        }
        // `${String(new Date().getFullYear())}.${padTo2Digits(new Date().getMonth())}.${padTo2Digits(new Date().getDate())}`
        this.formCreateCalculation = this.fb.group({
            id: [null],
            // manager_id: [this.authService.getCurrentManager().id],
            constructionAddress: ['', Validators.required],
            number: [null],
            dataOfCreation: [new Date(), Validators.required],
            results: [null],
            status: [null]
        })

        this.calculationService.getCalculations(this.clientId).subscribe({
            next: (msg) => {
                this.calculationService.setCalculations(JSON.parse(String(msg.body)))
                console.log(this.calculationService.getCalulationsArray())
            },
            error: (err) => {
                console.log('error', err)
            },
            complete: () => {}
        })

    }

    getTel(): string {
        return String(this.clientsService.getClient().telephoneNumber)
        // return JSON.stringify(JSON.parse(this.cookie.get('client')).telephoneNumber)
    }

    getClient() {
        return this.clientsService.getClient()
        // console.log(JSON.parse(this.cookie.get('client')))
        // return JSON.parse(this.cookie.get('client'))
    }

    getFormEditClient() {
        return this.formEditClient
    }

    getAllCalculations() {
        return this.calculationService.getCalulationsArray()
    }

    updateClientData() {
        this.clientsService.updateCustomer(this.clientId, this.getFormEditClient().value).subscribe({
            next: (msg) => {
                console.log('Client updated')
                window.location.reload()
            },
            error: (err) => {
                console.log('error received:', err)
                if (err.status == 403) {
                    alert('Пожалуйста обновить страницу и введите данные заново')
                }
            }
        })
    }

    setCalcNumber(number: string, pseudoNum: any) {
        console.log(number)
        this.cookie.set('calcNumber', number)
    }

    saveCalculation() {
        const newClientData = {...this.formCreateCalculation.value}
        console.log(JSON.stringify(newClientData))
    }

    addNewCalculation() {
        const newCalculation = {...this.formCreateCalculation.value}
        // console.log(newCalculation)
        this.calculationService.addCalculation(this.clientId, newCalculation).subscribe({
            next: (msg) => {
                this.calculationService.setCurrentCalcId(JSON.parse(JSON.stringify(msg)).id)
                console.log(JSON.stringify(msg))
                this.cookie.set('calculation', JSON.stringify(msg))
                this.cookie.set('calcNumber', JSON.parse(JSON.stringify(msg)).number)
            },
            error: (err) => {
                console.log('error', err)
            },
            complete: () => {}
        })
    }

    showData() {

    }

    setCalculationsCookie(calc: Calculation) {
        calc.results = null
        // console.log(calc)
        this.cookie.set('calculation', JSON.stringify(calc))
    }

    setEditFlag() {
        this.cookie.set('editFlag', JSON.stringify(true))
    }

    deleteCalculation(calculationNumber: any) {
        this.calculationService.deleteInArray(calculationNumber)
        this.calculationService.deleteCalculation(calculationNumber).subscribe({
            next: (msg) => {
                console.log(msg)
                // window.location.reload()
            },
            error: (err) => {
                console.log('error', err)
            },
            complete: () => {}
        })
    }
}
