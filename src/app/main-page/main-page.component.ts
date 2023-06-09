import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
      private router: Router,
      private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.router.navigate(['/clientspage'])
    }
  }

}
