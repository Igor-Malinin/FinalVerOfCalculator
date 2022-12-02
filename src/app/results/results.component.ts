import { Component, OnInit } from '@angular/core';
import {CalculationService} from "../services/calculation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Client} from "../entity/Client";
import {Validators} from "@angular/forms";
import {Results} from "../entity/Results";
import {ResultsService} from "../services/results.service";
import {ClientsService} from "../services/clients.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  clientId: number
  client: Client
  resultsId: number
  results?: Results

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private resultsService: ResultsService,
      private calculationService: CalculationService,
      private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.client = new Client()
    this.route.params.subscribe({
      next: (params: Params) => {
        this.resultsId = +params['idRes']
        this.clientId = +params['id']

        this.results = this.resultsService.results.find(calc => calc.id === this.resultsId)
      },
      error: (err) => {
        console.log('error received:', err)
      },
      complete: () => {}
    })
  }

  getCalculations() {
    return this.calculationService.calculations
  }

  getTel() {
    return String(this.clientsService.getClient().telephoneNumber)
  }
  getClient() {
    return this.clientsService.getClient()
  }
}
