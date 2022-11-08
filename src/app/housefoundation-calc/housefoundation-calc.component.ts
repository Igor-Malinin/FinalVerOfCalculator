import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-housefoundation-calc',
  templateUrl: './housefoundation-calc.component.html',
  styleUrls: ['./housefoundation-calc.component.scss']
})
export class HousefoundationCalcComponent implements OnInit {

  clientId: number

  constructor(
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.clientId = JSON.parse(this.cookieService.get('client')).id
    console.log(this.clientId)
  }

}
