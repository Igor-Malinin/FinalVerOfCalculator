import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  newTokens: any

  constructor(
      public clientsService: ClientsService,
      public authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe({
      next: (msg) => {
        console.log(JSON.parse(String(msg.body)))
        this.clientsService.clients = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error received on clients-page:', err)
        console.log('TOKEN EXPIRED: ', err)
        if (err.status == 403) {
          this.authService.refreshToken().subscribe({
            next: (msg) => {
              this.newTokens = msg
              this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token)
              this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
              this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
              setTimeout(() => {window.location.reload()}, 300)
            },
            error: (err) => {
              console.log('error: ', err)
              if (err.status == 403) {
                alert('Ваша сессия закончилась. Авторизуйтесь заново')
                this.authService.logout()
              }
            },
            complete: () => {}
          })
        }
      },
      complete: () => this.router.navigate(['/clientspage'])
    })
  }

}
