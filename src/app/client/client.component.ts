import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CalculationService} from "../services/calculation.service";
import {Client} from "../entity/Client";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientId: number;
  client: Client;
  newTokens: any;
  moreInfoToggle = false;
  editToggle = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private clientsService: ClientsService,
      public calculationService: CalculationService,
      public cookie: CookieService
  ) {}

  ngOnInit(): void {
      this.client = new Client()
      this.route.params.subscribe({
          next: (params: Params) => {
              this.clientId = +params['id']
          },
          error: (err) => {
              console.log('error received:', err)
          },
          complete: () => {}
      })
      this.clientsService.getAllClients().subscribe({
          next: (msg)=> {
              this.client = JSON.parse(String(msg.body)).filter((c: Client) => c.id === this.clientId)[0]
              this.cookie.set('client', JSON.stringify(JSON.parse(String(msg.body)).filter((c: Client) => c.id === this.clientId)[0]))
          },
          error: (err) => {
              console.log('error: ', err)
          },
          complete: () => {
          }
      })
  }

  getTel (): string {
      return String(JSON.parse(this.cookie.get('client')).telephoneNumber)
  }

  getClient () {
      return JSON.parse(this.cookie.get('client'))
  }

  getClId() {
      return JSON.parse(this.cookie.get('client')).id
  }

  updateClientData () {
      this.clientsService.updateCustomer(this.clientId, this.client).subscribe({
          next: (msg) => {
              console.log('Client updated')
          },
          error: (err) => {
              console.log('error received:', err)
              if (err.status == 403) {
                  alert('Пожалуйста обновить страницу и введите данные заново')
                  // this.router.navigate(['/clientspage', this.clientId])
                  // this.authService.refreshToken().subscribe({
                  //     next: (msg) => {
                  //         this.newTokens = msg
                  //         this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token)
                  //         this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
                  //         this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
                  //         this.updateClientData()
                  //         // window.location.reload()
                  //     },
                  //     error: (err) => {
                  //         console.log('error: ', err)
                  //         if (err.status == 403) {
                  //             alert('Ваша сессия закончилась. Авторизуйтесь заново')
                  //             this.authService.logout()
                  //             this.router.navigate(['/'])
                  //         }
                  //     }
                  // })
              }
          }
      })
  }
}
