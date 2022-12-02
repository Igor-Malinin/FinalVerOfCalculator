import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CalculationService} from "../services/calculation.service";
import {Client} from "../entity/Client";
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {formatDate} from "@angular/common";
import {ResultsService} from "../services/results.service";

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
  formCreateCalculation: any;
  formEditClient: any;
  telephoneLength = 10
  locale: any

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public clientsService: ClientsService,
      private authService: AuthService,
      public resultsService: ResultsService,
      public cookie: CookieService,
      private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe({
          next: (params: Params) => {
              this.clientId = +params['id']
              this.clientsService.getAllClients().subscribe({
                  next: (msg)=> {
                      this.clientsService.setClient(JSON.parse(String(msg.body)).filter((c: Client) => c.id === this.clientId)[0])

                      if (this.clientsService.getClient() == undefined)
                          this.router.navigate(['/error'])
                      this.formEditClient = this.fb.group({
                          id: [this.clientsService.getClient().id],
                          surname: [this.clientsService.getClient().surname, Validators.required],
                          name: [this.clientsService.getClient().name, Validators.required],
                          patronymic: [this.clientsService.getClient().patronymic, Validators.required],
                          telephoneNumber: [this.clientsService.getClient().telephoneNumber,[
                              Validators.required,
                              Validators.minLength(this.telephoneLength),
                              Validators.maxLength(this.telephoneLength)
                          ]],
                          email: [this.clientsService.getClient().email, [
                              Validators.required,
                              Validators.email
                          ]],
                          address: [this.clientsService.getClient().address, Validators.required],
                          user: [this.clientsService.getClient().user]
                      })
                      // this.cookie.set('client', JSON.stringify(JSON.parse(String(msg.body)).filter((c: Client) => c.id === this.clientId)[0]))
                  },
                  error: (err) => {
                      console.log('error: ', err)
                  },
                  complete: () => {
                  }
              })
          },
          error: (err) => {
              if (err.status == 403) {
                  this.router.navigate(['/'])
              }
              console.log('error received:', err)
          },
          complete: () => {}
      })

      function padTo2Digits(num: number) {
          return num.toString().padStart(2, '0');
      }
      this.formCreateCalculation = this.fb.group({
          id: [null],
          manager_id: [this.authService.getCurrentManager().id],
          address_object_constractions: ['', Validators.required],
          number: [null],
          created_date: [`${String(new Date().getFullYear())}.${padTo2Digits(new Date().getMonth())}.${padTo2Digits(new Date().getDate())}`, Validators.required],
          results_id: [null],
          calculation_state_id: [null]
      })
  }

  getTel (): string {
      return String(this.clientsService.getClient().telephoneNumber)
      // return JSON.stringify(JSON.parse(this.cookie.get('client')).telephoneNumber)
  }

  getClient () {
      return this.clientsService.getClient()
      // console.log(JSON.parse(this.cookie.get('client')))
      // return JSON.parse(this.cookie.get('client'))
  }

  getFormEditClient () {
      return this.formEditClient
  }

  updateClientData () {
      this.clientsService.updateCustomer(this.clientId, this.getFormEditClient().value).subscribe({
          next: (msg) => {
              console.log('Client updated')
              window.location.reload()
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

    saveCalculation() {
        const newClientData = {...this.formCreateCalculation.value}
        console.log(newClientData)
    }

    showData() {

    }
}
