import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpRequest} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {catchError, throwError} from "rxjs";

const API_URL: string = 'http://51.250.54.62:8080'
type TokenRes = {
  access_token: string
  refresh_token: string
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false
  username = ''
  password = ''

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //         `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

  // async login(username: string, password: string) {
  //   try {
  //     // 👇️ const response: Response
  //     console.log(username, password)
  //     const response = await fetch(API_URL + '/api/login', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         username: username,
  //         password: password
  //       })
  //     });
  //     console.log()
  //     console.log(response.body)
  //
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  //
  //
  //     // 👇️ const result: CreateUserResponse
  //     const result = (await response.json()) as CreateUserResponse;
  //
  //     console.log('result is: ', JSON.stringify(result, null, 4));
  //
  //     return result;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log('error message: ', error.message);
  //       return error.message;
  //     } else {
  //       console.log('unexpected error: ', error);
  //       return 'An unexpected error occurred';
  //     }
  //   }
  // }
  login(username: string, password: string) {
    console.log(username, ' ', password)
    return this.http.post(API_URL + '/api/login', JSON.stringify({
      'username': username,
      'password': password
    }))
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
  setAuth (status: boolean) {
    this.isAuth = status
  }
}
