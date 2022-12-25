import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Params} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-consctruction-node',
  templateUrl: './consctruction-node.component.html',
  styleUrls: ['./consctruction-node.component.scss']
})
export class ConsctructionNodeComponent implements OnInit {

  clientId: number

  constructor(
      private route: ActivatedRoute,
      private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.clientId = +params['id']
      },
      error: (err) => {
        if (err.status == 403) {
          this.authService.refreshToken()
        }
        console.log('error: ', err)
      }
    })
  }

}
