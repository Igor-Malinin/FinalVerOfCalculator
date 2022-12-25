import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {ManagerService} from "./services/manager.service";
import {CurrentManager} from "./entity/currentManager";
import {CookieService} from "ngx-cookie-service";
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false
  subscription: Subscription;

  constructor(
      public authService: AuthService,
      public managerService: ManagerService,
      public cookieService: CookieService,
      public router: Router
  ) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
      this.cookieService.set('editFlag', JSON.stringify(false))
      this.authService.setAuth(this.isAuthenticated)
      this.authService.setAuthTokens(this.cookieService.get('access_token'), this.cookieService.get('refresh_token'))
      this.authService.setCurrentManager(
          Number(this.cookieService.get('id')),
          this.cookieService.get('surname'),
          this.cookieService.get('name'),
          this.cookieService.get('patronymic'),
          this.cookieService.get('userName'),
          this.cookieService.get('role'),
      )
    }
  }

  setEditFlag() {
    this.cookieService.set('editFlag', JSON.stringify(false))
  }


  // ngAfterViewInit() {
  //   window.addEventListener("scroll", this.onWindowScroll, true);   // I just commented it and it is working .
  // }
  //
  // @HostListener("window:scroll", ['$event'])
  // onWindowScroll() {
  //   const windowScroll = window.scrollY;
  //   console.log(windowScroll);
  // }
}
