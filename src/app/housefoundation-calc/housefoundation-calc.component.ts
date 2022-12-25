import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-housefoundation-calc',
  templateUrl: './housefoundation-calc.component.html',
  styleUrls: ['./housefoundation-calc.component.scss']
})
export class HousefoundationCalcComponent implements OnInit {

  clientId: number
  formBasement: any

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.clientId = +params['id']
      },
      error: (err) => {
        if (err.status == 403) {
          this.authService.refreshToken()
        }
        console.log('error: ', err)
      }
    })

    this.formBasement = this.fb.group({
      id: [null],
      results_id: [null],
      perimeter_of_external_walls: ['', Validators.required],
      internal_wall_length: ['', Validators.required],
      concrete_piles: ['', Validators.required],
      concrete: ['', Validators.required]
    })
  }

  submit() {
    if(this.formBasement.valid) {
      const newBasementData = {...this.formBasement.value}
      console.log(newBasementData)
      this.formBasement.reset()
    }
  }
}
