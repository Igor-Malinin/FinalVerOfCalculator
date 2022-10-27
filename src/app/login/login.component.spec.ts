import {ComponentFixture, TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AuthRequest} from "../entity/authRequest";
import {CurrentManager} from "../entity/currentManager";
import stringContaining = jasmine.stringContaining;

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//
// });

describe('lC', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  });

  it(
      'should be initialized',
      inject([AuthService], (authService: AuthService) => {
        expect(authService).toBeTruthy();
      })
  );

    it(
        'should perform login correctly',
        fakeAsync(
            inject(
                [AuthService, HttpTestingController],
                (authService: AuthService, backend: HttpTestingController) => {

                    // Set up
                    const url = 'http://51.250.54.62:8080';
                    const userName = 'overlord';
                    const password = '123456';
                    let response = null;
                    // End Setup

                    authService.login(userName, password).subscribe({
                        next: (msg) => {
                            response = msg;
                            expect(JSON.parse(String(response.body)).user.surname).toEqual('Overlordov');
                            expect(JSON.parse(String(response.body)).user.name).toEqual('Overlord');
                            expect(response.status).toBe(200);
                        },
                        error: (err) => {

                        },
                        complete: () => console.log('ok')
                    })
                            console.log(response)

                    // const requestWrapper = backend.expectOne({url: url});
                    // requestWrapper.flush(responseObject);

                    // tick();

                    // expect(requestWrapper.request.method).toEqual('POST');

                }
            )
        )
    );
  // it('should be falsy', () => {
  //   let auth = new AuthService(HttpTestingController, null)
  //   let loginComponent = new LoginComponent(auth, null, null)
  //   loginComponent.ngOnInit()
  //   expect(loginComponent.isAuthenticated).toBeFalsy()
  // })
})
