import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {

  constructor(
      public clientsService: ClientsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

}
