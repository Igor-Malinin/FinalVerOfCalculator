import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {
  formClientReg: FormGroup
  telephoneLength = 11

  constructor() { }

  ngOnInit() {

  }

  submit() {
    if(this.formClientReg.valid) {
      const newClientData = {...this.formClientReg.value}

      console.log('New Client Data: ', newClientData)
    }

  }
}
