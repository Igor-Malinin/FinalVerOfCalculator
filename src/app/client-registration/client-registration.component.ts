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
    this.formClientReg = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      patronymic: new FormControl('', Validators.required),
      telephone: new FormControl('',[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl('', Validators.required)
    })

  }

  submit() {
    if(this.formClientReg.valid) {
      const newClientData = {...this.formClientReg.value}

      console.log('New Client Data: ', newClientData)
    }

  }
}
