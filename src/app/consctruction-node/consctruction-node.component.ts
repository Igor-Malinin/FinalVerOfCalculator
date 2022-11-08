import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-consctruction-node',
  templateUrl: './consctruction-node.component.html',
  styleUrls: ['./consctruction-node.component.scss']
})
export class ConsctructionNodeComponent implements OnInit {

  clientId: number

  constructor(
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.clientId = JSON.parse(this.cookieService.get('client')).id
  }

}
