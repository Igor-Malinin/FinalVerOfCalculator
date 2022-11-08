import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "../entity/authRequest";
import {ClientsService} from "../services/clients.service";
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import { Router } from '@angular/router';

const API_URL: string = 'http://51.250.54.62:8080'

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {
  formClientReg: FormGroup
  telephoneLength = 10
  newTokens: any

  constructor(
      private http: HttpClient,
      private clientsService: ClientsService,
      private authService: AuthService,
      private cookieService: CookieService,
      private router: Router
  ) { }

  ngOnInit() {
    this.formClientReg = new FormGroup({
      id: new FormControl(null),
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      patronymic: new FormControl('', Validators.required),
      telephoneNumber: new FormControl(null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl('', Validators.required),
      user: new FormControl({id: this.authService.getCurrentManager().id})
    })
  }

  submit() {
    if(this.formClientReg.valid) {
      const newClientData = {...this.formClientReg.value}
      newClientData.telephoneNumber = Number(newClientData.telephoneNumber)
      // console.log(newClientData)
      this.clientsService.addCustomer(newClientData).subscribe({
        next: (msg) => {
          console.log(msg)
          window.location.reload()
        },
        error: (err) => {
          console.log('error received:', err)
          if (err.status == 403) {
            alert('пожалуйста обновите страницу и введите данные заново')
            // this.authService.refreshToken().subscribe({
            //   next: (msg) => {
            //     this.newTokens = msg
            //     this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token)
            //     this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
            //     this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
            //     window.location.reload()
            //   },
            //   error: (err) => {
            //     console.log('error: ', err)
            //     if (err.status == 403) {
            //       alert('Ваша сессия закончилась. Авторизуйтесь заново')
            //       this.authService.logout()
            //       this.router.navigate(['/'])
            //     }
            //   },
            //   complete: () => {}
            // })
          }
        },
        complete: () => console.log('complete')
      })
      // window.location.reload()
      this.formClientReg.reset()
    }

  }
}
