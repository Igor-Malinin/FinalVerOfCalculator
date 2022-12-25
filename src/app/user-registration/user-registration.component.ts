import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ClientsService} from "../services/clients.service";
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {ManagerService} from "../services/manager.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  formUserReg: FormGroup
  telephoneLength = 10
  minPassLength = 6
  maxPassLength = 20
  newTokens: any
  roles: any = ''
  statuses: any = ''

  constructor(
      private http: HttpClient,
      private managerService: ManagerService,
      private authService: AuthService,
      private cookieService: CookieService,
      private router: Router
  ) { }

  ngOnInit() {
    this.formUserReg = new FormGroup({
      // id: new FormControl(null),
      status: new FormControl('', Validators.required),
      groupOfUsers: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      patronymic: new FormControl('', Validators.required),
      telephoneNumber: new FormControl(null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      login: new FormControl('', Validators.required),
      password: new FormControl('', [
          Validators.required,
          Validators.minLength(this.minPassLength),
          Validators.maxLength(this.maxPassLength)
      ]),
    })
    this.managerService.getRoles().subscribe({
      next: (msg) => {
        console.log(msg.body)
        this.roles = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error1', err)
        if (err.status == 403) {
          this.authService.refreshToken()
        }
      },
      complete: () => {}
    })
    this.managerService.getStatuses().subscribe({
      next: (msg) => {
        console.log(msg.body)
        this.statuses = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error2', err)
      },
      complete: () => {}
    })
  }

  getRoles() {
    return this.roles
  }

  getStatuses() {
    return this.statuses
  }

  submit() {
    if(this.formUserReg.valid) {
      const newUserData = {...this.formUserReg.value}
      let roleId = 0
      this.roles.filter((role: any) => {
        if (role.groupName == newUserData.groupOfUsers)
          roleId = role.id
      })
      let statusId = 0
      this.statuses.filter((status: any) => {
        if (status.statusName == newUserData.status)
          statusId = status.id
      })
      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      newUserData.groupOfUsers = [
          {
        id: roleId,
        groupName: newUserData.groupOfUsers
      }
      ]
      newUserData.status = {
        id: statusId,
        statusName: newUserData.status
      }
      console.log(JSON.stringify(newUserData))
      this.managerService.addUser(newUserData).subscribe({
        next: (msg) => {
          console.log(msg)
          // window.location.reload()
        },
        error: (err) => {
          console.log('error received:', err)
          if (err.status == 403) {
            alert('пожалуйста введите данные заново')
            this.authService.refreshToken()
          }
        },
        complete: () => console.log('complete')
      })
      // this.formUserReg.reset()
    }

  }

  showInfo() {

  }
}
