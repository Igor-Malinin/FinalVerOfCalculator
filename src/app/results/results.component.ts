import {Component, OnInit} from '@angular/core';
import {CalculationService} from "../services/calculation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Client} from "../entity/Client";
import {Validators} from "@angular/forms";
import {Results} from "../entity/Results";
import {ResultsService} from "../services/results.service";
import {ClientsService} from "../services/clients.service";
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    clientId: number
    client: Client
    resultsId: number
    resultsPNum: number
    results: Array<Results>[] = []
    statusToggle: boolean = false;
    toggleTables: boolean = true;
    statuses: any
    emptyFlag: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resultsService: ResultsService,
        private calculationService: CalculationService,
        private clientsService: ClientsService,
        private authService: AuthService,
        private cookieService: CookieService
    ) {
    }

    ngOnInit(): void {
        this.resultsService.clearResults()
        this.client =  JSON.parse(this.cookieService.get('client'))
        this.route.params.subscribe({
            next: (params: Params) => {
                this.resultsId = +params['idRes']
                this.resultsPNum = +params['resPNum']
                this.clientId = +params['id']
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken()
                }
                console.log('error received:', err)
            },
            complete: () => {
            }
        })
        this.calculationService.getStatuses().subscribe({
            next: (msg) => {
                // console.log(msg.body)
                this.statuses = JSON.parse(String(msg.body))
            },
            error: (err) => {
                console.log('error', err)
            },
            complete: () => {}
        })
        this.resultsService.getResults(this.getCalculationsNumber()).subscribe({
            next: (msg) => {
                if (JSON.parse(String(msg.body)).length == 0) {
                    this.emptyFlag = true
                }
                for (let i = 0; i < JSON.parse(String(msg.body))[0].frame.numberOfFloors; i++) {
                    this.resultsService.setResults(JSON.parse(String(msg.body)).filter((res:Results) => res.frame.floorNumber == i+1))
                }
                this.results = JSON.parse(String(msg.body))
                console.log(this.resultsService.getResultsArray())
            },
            error: (err) => {
                console.log('error1', err)
                if (err.status == 403) {
                    this.authService.refreshToken()
                }
            },
            complete: () => {
            }
        })
    }

    setCalcNumber() {
        console.log(this.getCalculationsNumber())
        this.cookieService.set('calcNumber', this.getCalculationsNumber())
    }

    setEditFlag() {
        this.cookieService.set('editFlag', JSON.stringify(true))
    }

    getStatuses() {
        return this.statuses.filter((statusN: any) => {
            return statusN.statusName != this.getCalculations().status.statusName
        })
    }

    getLocalComponentResults() {
        return this.results
    }

    getEmptyFlag() {
        return this.emptyFlag
    }

    changeStatus(status: any) {
        let calculation = JSON.parse(this.cookieService.get('calculation'))
        calculation.status = status
        // console.log('this.results', this.getLocalComponentResults())
        // console.log('this.getResults()', this.getResults())
        this.cookieService.set('calculation', JSON.stringify(calculation))
        calculation = {...calculation, ...{
                results: this.getLocalComponentResults()
        }}
        console.log('calculation', calculation)
        this.calculationService.updateCalculation(calculation).subscribe({
            next: (msg) => {
                console.log(msg)
            },
            error: (err) => {
                console.log('error', err)
            },
            complete: () => {

            }
        })

    }

    getCalculations() {
        // console.log(JSON.parse(this.cookieService.get('calculation')))
        return JSON.parse(this.cookieService.get('calculation'))
    }

    getCalculationsNumber() {
        return this.cookieService.get('calcNumber')
    }

    getTel() {
        return String(this.client.telephoneNumber)
    }

    getClient() {
        return this.client
    }

    getResults() {
        // console.log(this.resultsService.getResultsArray())
        return this.resultsService.getResultsArray()
    }

    getNumberOfFloors() {
        return this.resultsService.getFloorNumber()
    }

    getElementsNames(index: number) {
        let elements = ['Доска', 'ОСБ', 'Парогидроизоляция', 'Ветрозащита', 'Утеплитель']
        return elements[index]
    }

    getExternalWalls(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внешние стены')
    }
    getExternalWallsTotalSum(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внешние стены')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
                return currentSum + currentNumber
            }, 0)
    }

    getInternalWalls(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внутренние стены')
    }
    getInternalWallsTotalSum(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внутренние стены')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
            return currentSum + currentNumber
        }, 0)
    }

    getOverlaps(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Перекрытия')
    }
    getOverlapsTotalSum(index: number) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Перекрытия')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
                return currentSum + currentNumber
            }, 0)
    }

    getTotalFloorSum(index: number) {
        return this.getExternalWallsTotalSum(index) + this.getInternalWallsTotalSum(index) + this.getOverlapsTotalSum(index)

    }

    getAllTotalSum () {
        let totalSum = 0
        for (let i = 0; i < this.getNumberOfFloors(); i++) {
            totalSum += this.getTotalFloorSum(i)
        }
        return totalSum
    }
}
