import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string
  password!: string
  isAuthenticated: boolean = false
  er:boolean = false
  erStatus: number

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
    }
  }

  onLoginClick() {
    const subject = this.authService.login(this.username, this.password)
    subject.subscribe({
      next: (msg) => {
        let role: string = 'USER'
        let roles: string[] = []
        for (let i = 0; i < JSON.parse(String(msg.body)).user.groupOfUsers.length; i++) {
          roles.push(JSON.parse(String(msg.body)).user.groupOfUsers[i].groupName)
        }
        this.authService.setAuthTokens(
            JSON.parse(String(msg.body)).access_token,
            JSON.parse(String(msg.body)).refresh_token
        )
        if (roles.includes('ROLE_ADMIN'))
          role = 'ADMIN'
        else if (roles.includes('ROLE_MANAGER'))
          role = 'MANAGER'

        this.authService.setCurrentManager(
            JSON.parse(String(msg.body)).user.id,
            JSON.parse(String(msg.body)).user.surname,
            JSON.parse(String(msg.body)).user.name,
            JSON.parse(String(msg.body)).user.patronymic,
            JSON.parse(String(msg.body)).user.login,
            role,
        )
        console.log('CurrentManager: ', this.authService.getCurrentManager())
        this.cookieService.set('name','Calculator');
        this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
        this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
        this.cookieService.set('isAuthenticated', msg.statusText)
        this.isAuthenticated = (msg.statusText == 'OK')
        this.cookieService.set('id', JSON.parse(String(msg.body)).user.id)
        this.cookieService.set('surname', JSON.parse(String(msg.body)).user.surname)
        this.cookieService.set('name', JSON.parse(String(msg.body)).user.name)
        this.cookieService.set('patronymic', JSON.parse(String(msg.body)).user.patronymic)
        this.cookieService.set('userName', this.username)
        this.cookieService.set('role', role)
        console.log('cookieservice: ', this.cookieService)
        this.authService.setAuth(this.isAuthenticated)
        return 'OK'
      },
      error: (err) => {
        this.authService.setAuth(this.isAuthenticated)
        console.log('error received:', err)
        if (err.status == 403) {
          this.er = true
          this.erStatus = 403
        }
        else {
          this.er = true
          this.erStatus = 404
        }
      },
      complete: () => this.router.navigate(['/clientspage'])
    })
  }
}
