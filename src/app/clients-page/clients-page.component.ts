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
  role: string = ''

  constructor(
      public clientsService: ClientsService,
      public authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
    this.clientsService.getAllClients().subscribe({
      next: (msg) => {
        console.log(JSON.parse(String(msg.body)))
        this.clientsService.clients = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error received on clients-page:', err)
        if (err.status == 403) {
          this.authService.refreshToken()
        }
      },
      complete: () => this.router.navigate(['/clientspage'])
    })
  }

  // update() {
  //   setTimeout(() => {
  //     window.location.reload()
  //   }, 300)
  // }
}
