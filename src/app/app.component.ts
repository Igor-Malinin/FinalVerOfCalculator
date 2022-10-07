import {Component, ElementRef, HostListener, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {ManagerService} from "./services/manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
      public auth: AuthService,
      public managerService: ManagerService
  ) {}

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
