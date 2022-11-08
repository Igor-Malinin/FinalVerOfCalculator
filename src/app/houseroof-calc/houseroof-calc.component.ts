import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-houseroof-calc',
  templateUrl: './houseroof-calc.component.html',
  styleUrls: ['./houseroof-calc.component.scss']
})
export class HouseroofCalcComponent implements OnInit {

  clientId: number

  constructor(
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.clientId = JSON.parse(this.cookieService.get('client')).id
    console.log(this.clientId)
  }

}
