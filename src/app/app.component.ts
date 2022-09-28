import {Component, ElementRef, HostListener, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;
  constructor(public auth: AuthService) {
  }
  ngAfterViewInit() {
    window.addEventListener("scroll", this.onWindowScroll, true);   // I just commented it and it is working .
  }
  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    const windowScroll = window.scrollY;
    console.log(windowScroll);
  }
}
