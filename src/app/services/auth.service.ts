import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = true
  username = ''
  password = ''

  login() {
    this.isAuth = true
    console.log(this.username, ' ', this.password)
  }

  logout() {
    this.isAuth = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 50)
    })
  }

  getIsAuth () {
    return this.isAuth
  }
}
