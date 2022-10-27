import { Component, OnInit } from '@angular/core';
import {Client, ClientsService} from "../services/clients.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CalculationService} from "../services/calculation.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client?: Client
  moreInfoToggle = false
  editToggle = false

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private clientsService: ClientsService,
      public calculationService: CalculationService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.client = this.clientsService.getById(+params['id'])
    })
  }

  updateClient () {

  }
}
