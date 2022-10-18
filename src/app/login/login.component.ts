import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth.service";
import {AuthRequest} from "../entity/authRequest";
import {deserialize} from 'class-transformer';
import {ManagerService} from "../services/manager.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  authRequest!: any;
  isAuthenticated: boolean = false;
  er:boolean = false
  erStatus: number
  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
    }
  }

  onLoginClick() {
    const subject = this.authService.login(this.username, this.password)
    console.log('After Auth:', subject)
    // this.authService.setAuth(true)
    subject.subscribe({
      next: (msg) => {
        console.log('message received: ', msg)
        this.authService.setAuth(true)
      }, // Called whenever there is a message from the server.
      error: (err) => {
        console.log('error received:', err)
        if (err.status == 403) {
          this.er = true
          this.erStatus = 403
        }
        else {
          this.er = true
          this.erStatus = 401
        }
      }, // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }
}
