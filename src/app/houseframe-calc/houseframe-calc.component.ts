import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-houseframe-calc',
  templateUrl: './houseframe-calc.component.html',
  styleUrls: ['./houseframe-calc.component.scss']
})
export class HouseframeCalcComponent implements OnInit {

  clientId: number

  constructor(
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.clientId = JSON.parse(this.cookieService.get('client')).id
    console.log(this.clientId)
  }

}
