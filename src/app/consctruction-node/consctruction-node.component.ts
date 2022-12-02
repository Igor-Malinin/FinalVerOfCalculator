import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-consctruction-node',
  templateUrl: './consctruction-node.component.html',
  styleUrls: ['./consctruction-node.component.scss']
})
export class ConsctructionNodeComponent implements OnInit {

  clientId: number

  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.clientId = +params['id']
      },
      error: (err) => {
        console.log('error: ', err)
      }
    })
  }

}
