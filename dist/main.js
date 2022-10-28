"use strict";
(self["webpackChunkFrontCalculator"] = self["webpackChunkFrontCalculator"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 7538);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/client.component */ 3995);
/* harmony import */ var _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-registration/client-registration.component */ 1602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);










const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent },
    { path: 'clientspage', component: _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__.ClientsPageComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id', component: _client_client_component__WEBPACK_IMPORTED_MODULE_5__.ClientComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'clientregistration', component: _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_6__.ClientRegistrationComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPageComponent },
    { path: '**', redirectTo: '/error' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/manager.service */ 7916);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);






function AppComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0412\u043E\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} }
function AppComponent_ng_template_1_div_9_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_div_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_template_1_div_9_p_3_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_template_1_div_9_ng_template_4_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.authService.getCurrentManager().name, " ", ctx_r3.authService.getCurrentManager().surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.authService.getCurrentManager().role == "ADMIN")("ngIfElse", _r5);
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 8)(1, "div", 3)(2, "div", 4)(3, "div", 9)(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_ng_template_1_div_9_Template, 6, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.authService.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.authService.getIsAuth());
} }
class AppComponent {
    constructor(authService, managerService, cookieService, router) {
        this.authService = authService;
        this.managerService = managerService;
        this.cookieService = cookieService;
        this.router = router;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        if (this.cookieService.check('isAuthenticated')) {
            this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK');
            this.authService.setAuth(this.isAuthenticated);
            this.authService.setAuthTokens(this.cookieService.get('access_token'), this.cookieService.get('refresh_token'));
            this.authService.setCurrentManager(Number(this.cookieService.get('id')), this.cookieService.get('surname'), this.cookieService.get('name'), this.cookieService.get('patronymic'), this.cookieService.get('userName'), this.cookieService.get('role'));
            this.router.navigate(['/clientspage']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["class", "header", 4, "ngIf", "ngIfElse"], ["authorizated", ""], [1, "header"], [1, "wrapper"], [1, "header__wrapper"], [1, "header__logo-with-title", 2, "width", "100%", "justify-content", "space-between"], ["src", "../assets/images/header-logo.png", "alt", "Discover Amazing places in Japan", 1, "header__logo-pic", 2, "opacity", "0"], ["routerLink", "/login", 1, "btn", "header__btn"], [1, "header", 2, "background-color", "#303030"], [1, "header__logo-with-title"], ["href", "/", 1, "header__logo-link"], ["src", "../assets/images/header-logo.png", "alt", "Discover Amazing places in Japan", 1, "header__logo-pic"], [1, "header__title"], [1, "header__fjb"], ["class", "header__fio-jobpost", 4, "ngIf"], ["routerLink", "/", 1, "btn", "header__btn", 3, "click"], [1, "header__fio-jobpost"], [1, "header__fio"], ["class", "header__jobpost", 4, "ngIf", "ngIfElse"], ["manager", ""], [1, "header__jobpost"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_header_0_Template, 7, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 12, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.getIsAuth())("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["@charset \"UTF-8\";\n/* montserrat-regular - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* montserrat-500 - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* montserrat-700 - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* raleway-black */\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); /* Chrome 26+, Opera 23+, Firefox 39+ */\n}\n/* raleway-regular */\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); /* Chrome 26+, Opera 23+, Firefox 39+ */\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0; /* 1 */\n  -ms-interpolation-mode: bicubic; /* 2 */\n}\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0; /* 1 */\n  padding: 0;\n  white-space: normal; /* 2 */\n  *margin-left: -7px; /* 3 */\n}\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%; /* 1 */\n  margin: 0; /* 2 */\n  vertical-align: baseline; /* 3 */\n  *vertical-align: middle; /* 3 */\n}\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n  *overflow: visible; /* 4 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n  *height: 13px; /* 3 */\n  *width: 13px; /* 3 */\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\n  box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto; /* 1 */\n  vertical-align: top; /* 2 */\n}\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg {\n  vertical-align: middle;\n}\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn:hover {\n  background-color: #2a2a2a;\n}\n.btn:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger:hover {\n  background-color: #2a2a2a;\n}\n.danger:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text {\n  color: #fd6868;\n}\na, a:active, a:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n::placeholder {\n  color: #eeeeee;\n}\n.input__style {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; /* \u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430 */\n  -webkit-text-fill-color: #eeeeee !important; /* \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n  color: #eeeeee !important; /* \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n}\n.wrapper {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper {\n    max-width: 650px;\n  }\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.wrapper-full {\n  max-width: 1262px;\n  margin: 0 auto;\n}\n.section-title {\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 42px;\n  position: relative;\n  padding-bottom: 10px;\n}\n.section-title::after {\n  display: block;\n  content: \"\";\n  width: 253px;\n  height: 3px;\n  background-color: #303030;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n/* Header styles start */\n.header {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 20px;\n}\n.header__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n}\n.header__link {\n  font-size: 18px;\n  line-height: 24px;\n  color: white;\n  text-decoration: none;\n}\n.header__logo-with-title {\n  display: flex;\n  gap: 45px;\n  align-items: center;\n}\n.header__fjb {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n.header__logo-pic {\n  width: 120px;\n}\n.header__title {\n  font-size: 26px;\n  font-weight: 700;\n}\n.header__fio-jobpost {\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (max-width: 1087px) {\n  .header__logo-with-title {\n    gap: 40px;\n  }\n  .header__fjb {\n    gap: 55px;\n  }\n  .header__logo-pic {\n    width: 110px;\n  }\n  .header__title {\n    font-size: 20px;\n  }\n  .header__fio-jobpost {\n    font-size: 16px;\n  }\n}\n@media (max-width: 980px) {\n  .header__logo-with-title {\n    gap: 30px;\n  }\n  .header__fjb {\n    gap: 45px;\n  }\n  .header__logo-pic {\n    width: 100px;\n  }\n  .header__title {\n    font-size: 18px;\n  }\n  .header__fio-jobpost {\n    font-size: 14px;\n  }\n}\n@media (max-width: 767.98px) {\n  .header__logo-with-title {\n    gap: 20px;\n  }\n  .header__fjb {\n    gap: 35px;\n  }\n  .header__logo-pic {\n    width: 80px;\n  }\n  .header__title {\n    font-size: 17px;\n  }\n  .header__fio-jobpost {\n    font-size: 14px;\n  }\n}\n/* Header styles end */"], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 7538);
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/client.component */ 3995);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/cellphone.pipe */ 1976);
/* harmony import */ var _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-registration/client-registration.component */ 1602);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4934);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4650);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__.ErrorPageComponent,
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent,
        _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_5__.ClientsPageComponent,
        _client_client_component__WEBPACK_IMPORTED_MODULE_6__.ClientComponent,
        _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_7__.CellphonePipe,
        _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_8__.ClientRegistrationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 5657);





class AuthGuard {
    constructor(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true;
            }
            else {
                this.router.navigate(['/'], {
                    queryParams: {
                        auth: false
                    }
                });
                return false;
            }
        });
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1602:
/*!**********************************************************************!*\
  !*** ./src/app/client-registration/client-registration.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegistrationComponent": () => (/* binding */ ClientRegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/clients.service */ 9012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);










function ClientRegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ClientRegistrationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ClientRegistrationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ClientRegistrationComponent_div_18_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientRegistrationComponent_div_18_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r7.formClientReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r7.formClientReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].actualLength, ". ");
} }
function ClientRegistrationComponent_div_18_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r8.formClientReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r8.formClientReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].actualLength, ". ");
} }
function ClientRegistrationComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClientRegistrationComponent_div_18_small_1_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ClientRegistrationComponent_div_18_small_2_Template, 2, 2, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ClientRegistrationComponent_div_18_small_3_Template, 2, 2, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.formClientReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.formClientReg.get("telephoneNumber")) == null ? null : tmp_1_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r3.formClientReg.get("telephoneNumber")) == null ? null : tmp_2_0.hasError("maxlength"));
} }
function ClientRegistrationComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientRegistrationComponent_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientRegistrationComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClientRegistrationComponent_div_21_small_1_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ClientRegistrationComponent_div_21_small_2_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.formClientReg.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.formClientReg.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
} }
function ClientRegistrationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const API_URL = 'http://51.250.54.62:8080';
class ClientRegistrationComponent {
    constructor(http, clientsService, authService, cookieService, router) {
        this.http = http;
        this.clientsService = clientsService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.router = router;
        this.telephoneLength = 10;
    }
    ngOnInit() {
        this.formClientReg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            patronymic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            telephoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(this.telephoneLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(this.telephoneLength)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ id: this.authService.getCurrentManager().id })
        });
    }
    submit() {
        if (this.formClientReg.valid) {
            const newClientData = { ...this.formClientReg.value };
            newClientData.telephoneNumber = Number(newClientData.telephoneNumber);
            // console.log(newClientData)
            this.clientsService.addCustomer(newClientData).subscribe({
                next: (msg) => {
                    console.log(msg);
                },
                error: (err) => {
                    console.log('error received:', err);
                    if (err.status == 403) {
                        alert('пожалуйста обновите страницу и введите данные заново');
                        // this.authService.refreshToken().subscribe({
                        //   next: (msg) => {
                        //     this.newTokens = msg
                        //     this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token)
                        //     this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
                        //     this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
                        //     window.location.reload()
                        //   },
                        //   error: (err) => {
                        //     console.log('error: ', err)
                        //     if (err.status == 403) {
                        //       alert('Ваша сессия закончилась. Авторизуйтесь заново')
                        //       this.authService.logout()
                        //       this.router.navigate(['/'])
                        //     }
                        //   },
                        //   complete: () => {}
                        // })
                    }
                },
                complete: () => console.log('complete')
            });
            // window.location.reload()
            this.formClientReg.reset();
        }
    }
}
ClientRegistrationComponent.ɵfac = function ClientRegistrationComponent_Factory(t) { return new (t || ClientRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ClientRegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientRegistrationComponent, selectors: [["app-client-registration"]], decls: 27, vars: 8, consts: [[1, "wrapper"], [1, "reg__client-form"], ["type", "button", "routerLink", "/clientspage", 1, "btn", "btn-go-back"], [1, "reg__form", 3, "formGroup", "ngSubmit"], [1, "reg__title"], [1, "reg__form-control"], ["type", "text", "name", "cName", "placeholder", "\u0418\u043C\u044F", "formControlName", "name", 1, "reg__input"], ["class", "validation", 4, "ngIf"], ["type", "text", "name", "surname", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "formControlName", "surname", 1, "reg__input"], ["type", "text", "name", "patronymic", "placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", "formControlName", "patronymic", 1, "reg__input"], ["type", "text", "name", "telephoneNumber", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "telephoneNumber", 1, "reg__input"], ["type", "text", "name", "email", "placeholder", "E-mail", "formControlName", "email", 1, "reg__input"], ["type", "text", "name", "address", "placeholder", "\u0410\u0434\u0440\u0435\u0441", "formControlName", "address", 1, "reg__input"], ["type", "submit", 1, "btn", "reg__btn", 3, "disabled"], [1, "validation"], [4, "ngIf"]], template: function ClientRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ClientRegistrationComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ClientRegistrationComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ClientRegistrationComponent_div_12_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ClientRegistrationComponent_div_15_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ClientRegistrationComponent_div_18_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ClientRegistrationComponent_div_21_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ClientRegistrationComponent_div_24_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formClientReg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.formClientReg.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.formClientReg.get("name")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.formClientReg.get("surname")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formClientReg.get("surname")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.formClientReg.get("patronymic")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.formClientReg.get("patronymic")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.formClientReg.get("telephoneNumber")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.formClientReg.get("telephoneNumber")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.formClientReg.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.formClientReg.get("email")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.formClientReg.get("address")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.formClientReg.get("address")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formClientReg.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.reg__client-form[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.reg__form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn-go-back[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-left: 2px;\n}\n.reg__title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 40px;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.reg__form-control[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.reg__input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.reg__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.reg__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fd6868;\n}\n.reg__btn[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}"] });


/***/ }),

/***/ 3995:
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/clients.service */ 9012);
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/calculation.service */ 6080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/cellphone.pipe */ 1976);







function ClientComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "cellphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 11)(7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientComponent_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.moreInfoToggle = !ctx_r4.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx_r0.client.surname, " ", ctx_r0.client.name, " ", ctx_r0.client.patronymic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, ctx_r0.client.telephoneNumber));
} }
function ClientComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "cellphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13)(11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientComponent_div_6_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r6.editToggle = !ctx_r6.editToggle; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.moreInfoToggle = !ctx_r6.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientComponent_div_6_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.moreInfoToggle = !ctx_r8.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0421\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx_r1.client.surname, " ", ctx_r1.client.name, " ", ctx_r1.client.patronymic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, ctx_r1.client.telephoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.client.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.client.email);
} }
function ClientComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.client.surname = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.client.name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.client.patronymic = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.client.telephoneNumber = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.client.address = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.client.email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientComponent_div_7_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r16.editToggle = !ctx_r16.editToggle; ctx_r16.moreInfoToggle = !ctx_r16.moreInfoToggle; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.updateClientData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.patronymic);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.telephoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.client.email);
} }
function ClientComponent_tr_24_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0410\u043A\u0442\u0443\u0430\u043B\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientComponent_tr_24_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u041D\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22)(1, "td")(2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ClientComponent_tr_24_td_7_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ClientComponent_tr_24_ng_template_8_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const calc_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0420\u0430\u0441\u0447\u0435\u0442 \u2116", calc_r17.numberN, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 7, calc_r17.created_date, "dd.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", calc_r17.cStatus)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](calc_r17.addressOC);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
class ClientComponent {
    constructor(route, router, clientsService, calculationService) {
        this.route = route;
        this.router = router;
        this.clientsService = clientsService;
        this.calculationService = calculationService;
        this.moreInfoToggle = false;
        this.editToggle = false;
    }
    ngOnInit() {
        this.route.params.subscribe({
            next: (params) => {
                this.clientId = +params['id'];
            },
            error: (err) => {
                console.log('error received:', err);
            },
            complete: () => { }
        });
        this.clientsService.getAllClients().subscribe({
            next: (msg) => {
                this.client = JSON.parse(String(msg.body)).filter((c) => c.id === this.clientId)[0];
                console.log(this.client);
            }
        });
    }
    updateClientData() {
        this.clientsService.updateCustomer(this.clientId, this.client).subscribe({
            next: (msg) => {
                console.log('Client updated');
            },
            error: (err) => {
                console.log('error received:', err);
                if (err.status == 403) {
                    alert('Пожалуйста обновить страницу и введите данные заново');
                    // this.router.navigate(['/clientspage', this.clientId])
                    // this.authService.refreshToken().subscribe({
                    //     next: (msg) => {
                    //         this.newTokens = msg
                    //         this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token)
                    //         this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, {expires: 1})
                    //         this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, {expires: 1})
                    //         this.updateClientData()
                    //         // window.location.reload()
                    //     },
                    //     error: (err) => {
                    //         console.log('error: ', err)
                    //         if (err.status == 403) {
                    //             alert('Ваша сессия закончилась. Авторизуйтесь заново')
                    //             this.authService.logout()
                    //             this.router.navigate(['/'])
                    //         }
                    //     }
                    // })
                }
            }
        });
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_calculation_service__WEBPACK_IMPORTED_MODULE_1__.CalculationService)); };
ClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 25, vars: 5, consts: [[1, "wrapper"], [1, "client__card"], [1, "client__card-header"], ["routerLink", "/clientspage", 1, "btn"], ["class", "client-info", 4, "ngIf"], ["class", "client-info client-info__edit", 4, "ngIf"], ["routerLink", "", 1, "btn", 3, "disabled"], [1, "calculation__table"], [1, "calculation__table-headers"], ["class", "calculation__data", 4, "ngFor", "ngForOf"], [1, "client-info"], [1, "links-top-line-separator"], [1, "client__card-link", 3, "click"], [1, "flex-links", "links-top-line-separator"], [1, "client-info", "client-info__edit"], ["type", "text", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", 1, "input__style", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u0418\u043C\u044F", 1, "input__style", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", 1, "input__style", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430", 1, "input__style", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "\u0410\u0434\u0440\u0435\u0441", 1, "input__style", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Email", 1, "input__style", 3, "ngModel", "ngModelChange"], [1, "client__card-link", "links-top-line-separator", 3, "click"], [1, "calculation__data"], [1, "client__card-link"], [4, "ngIf", "ngIfElse"], ["falseStatus", ""], [1, "btn", 3, "disabled"], [1, "btn", "danger", 3, "disabled"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ClientComponent_div_5_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ClientComponent_div_6_Template, 15, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ClientComponent_div_7_Template, 9, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 7)(11, "tr", 8)(12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u041D\u043E\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0414\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0421\u0442\u0430\u0442\u0443\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0410\u0434\u0440\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ClientComponent_tr_24_Template, 18, 10, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.moreInfoToggle && !ctx.editToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.moreInfoToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.calculationService.calculation);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_2__.CellphonePipe], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.client__card[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info__edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.client__card-header[_ngcontent-%COMP%]   .input__style[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.client__card-header[_ngcontent-%COMP%]   .flex-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.client__card-header[_ngcontent-%COMP%]   .links-top-line-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding-top: 6px;\n  margin-top: 6px;\n  border-top: 2px solid gray;\n}\n.calculation__table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 30px 0;\n  text-align: center;\n  border: 3px solid #6b6b6b;\n  border-collapse: separate;\n  border-radius: 10px;\n}\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  vertical-align: middle;\n  border: 2px solid #6b6b6b;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, th[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 5px;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 5px;\n}\n.calculation__table-headers[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.client__card-link[_ngcontent-%COMP%] {\n  color: #55c2ff;\n  text-shadow: 0 0 5px #00a3ff;\n  cursor: pointer;\n}\n.client__card-link[_ngcontent-%COMP%]:hover {\n  color: #b7e1fd;\n}\n.client__card-link[_ngcontent-%COMP%]:active {\n  text-shadow: none;\n}"] });


/***/ }),

/***/ 7538:
/*!********************************************************!*\
  !*** ./src/app/clients-page/clients-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsPageComponent": () => (/* binding */ ClientsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/clients.service */ 9012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);






const _c0 = function (a1) { return ["/clientspage", a1]; };
function ClientsPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "button", 7)(2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, cl_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", cl_r1.surname, " ", cl_r1.name, " ", cl_r1.patronymic, " ");
} }
class ClientsPageComponent {
    constructor(clientsService, authService, route, router, cookieService) {
        this.clientsService = clientsService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.clientsService.getAllClients().subscribe({
            next: (msg) => {
                console.log(JSON.parse(String(msg.body)));
                this.clientsService.clients = JSON.parse(String(msg.body));
            },
            error: (err) => {
                console.log('error received on clients-page:', err);
                console.log('TOKEN EXPIRED: ', err);
                if (err.status == 403) {
                    this.authService.refreshToken().subscribe({
                        next: (msg) => {
                            this.newTokens = msg;
                            this.authService.setAuthTokens(this.newTokens.access_token, this.newTokens.refresh_token);
                            this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, { expires: 1 });
                            this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, { expires: 1 });
                            window.location.reload();
                        },
                        error: (err) => {
                            console.log('error: ', err);
                            if (err.status == 403) {
                                alert('Ваша сессия закончилась. Авторизуйтесь заново');
                                this.authService.logout();
                            }
                        },
                        complete: () => { }
                    });
                }
            },
            complete: () => this.router.navigate(['/clientspage'])
        });
    }
}
ClientsPageComponent.ɵfac = function ClientsPageComponent_Factory(t) { return new (t || ClientsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService)); };
ClientsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientsPageComponent, selectors: [["app-clients-page"]], decls: 8, vars: 1, consts: [[1, "wrapper"], [1, "clients__container"], [1, "clients__title"], ["routerLink", "/clientregistration", 1, "btn", "clients__btn"], [1, "clients__cards"], ["class", "clients__card", 4, "ngFor", "ngForOf"], [1, "clients__card"], [1, "btn-clients__card", 3, "routerLink"], [1, "clients__card-line"]], template: function ClientsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ClientsPageComponent_div_7_Template, 4, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clientsService.clients);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.clients__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 200px;\n  margin-bottom: 30px;\n}\n.clients__title[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.clients__btn[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-right: 40px;\n  margin-left: 2px;\n}\n.clients__cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n}\n.btn-clients__card[_ngcontent-%COMP%] {\n  min-width: 300px;\n  background-color: #303030;\n  color: #eeeeee;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  transition: 0.1s ease-in-out;\n}\n.btn-clients__card[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n}\n.btn-clients__card[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 5px 1px #eeeeee;\n}\n.link-clients__card[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n.clients__card-line[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n}"] });


/***/ }),

/***/ 7446:
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);




function ErrorPageComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u043E\u043C\u0430\u0448\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ErrorPageComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 8, vars: 2, consts: [[1, "wrapper"], [1, "error__container-holder"], [1, "error__container"], [1, "error__title"], ["class", "btn", "routerLink", "/", 4, "ngIf", "ngIfElse"], ["clientsPage", ""], ["routerLink", "/", 1, "btn"], ["routerLink", "/clientspage", 1, "btn"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ErrorPageComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ErrorPageComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.getIsAuth())("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".error__container-holder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.error__container[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  text-align: center;\n}\n\n.error__title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);






function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0448\u0438\u0431\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_11_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_ng_template_11_p_0_Template, 2, 0, "p", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.erStatus == 403);
} }
class LoginComponent {
    constructor(authService, cookieService, router) {
        this.authService = authService;
        this.cookieService = cookieService;
        this.router = router;
        this.isAuthenticated = false;
        this.er = false;
    }
    ngOnInit() {
        if (this.cookieService.check('isAuthenticated')) {
            this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK');
        }
    }
    onLoginClick() {
        const subject = this.authService.login(this.username, this.password);
        subject.subscribe({
            next: (msg) => {
                let role;
                this.authService.setAuthTokens(JSON.parse(String(msg.body)).access_token, JSON.parse(String(msg.body)).refresh_token);
                if (JSON.parse(String(msg.body)).user.groupOfUsers.length == 3)
                    role = 'ADMIN';
                else
                    role = 'MANAGER';
                this.authService.setCurrentManager(JSON.parse(String(msg.body)).user.id, JSON.parse(String(msg.body)).user.surname, JSON.parse(String(msg.body)).user.name, JSON.parse(String(msg.body)).user.patronymic, JSON.parse(String(msg.body)).user.login, role);
                console.log('access_token: ', this.authService.getAuthTokens().access_token);
                console.log('refresh_token: ', this.authService.getAuthTokens().refresh_token);
                console.log('CurrentManager: ', this.authService.getCurrentManager());
                this.cookieService.set('name', 'Calculator');
                this.cookieService.set('access_token', this.authService.getAuthTokens().access_token, { expires: 1 });
                this.cookieService.set('refresh_token', this.authService.getAuthTokens().refresh_token, { expires: 1 });
                this.cookieService.set('isAuthenticated', msg.statusText);
                this.isAuthenticated = (msg.statusText == 'OK');
                this.cookieService.set('id', JSON.parse(String(msg.body)).user.id);
                this.cookieService.set('surname', JSON.parse(String(msg.body)).user.surname);
                this.cookieService.set('name', JSON.parse(String(msg.body)).user.name);
                this.cookieService.set('patronymic', JSON.parse(String(msg.body)).user.patronymic);
                this.cookieService.set('userName', this.username);
                this.cookieService.set('role', role);
                console.log('cookieservice: ', this.cookieService);
                this.authService.setAuth(this.isAuthenticated);
                return 'OK';
            },
            error: (err) => {
                this.authService.setAuth(this.isAuthenticated);
                console.log('error received:', err);
                if (err.status == 403) {
                    this.er = true;
                    this.erStatus = 403;
                }
                else {
                    this.er = true;
                    this.erStatus = 404;
                }
            },
            complete: () => this.router.navigate(['/clientspage'])
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 4, consts: [[1, "wrapper"], [1, "loginpage"], [1, "login__box"], [1, "login__title"], ["type", "text", "name", "username", "placeholder", "\u041B\u043E\u0433\u0438\u043D", 1, "login__input", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", 1, "login__input", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "btn", "login__btn", 3, "click"], ["buttonCli", ""], ["class", "danger-text", 4, "ngIf", "ngIfElse"], ["Forbidden403", ""], [1, "danger-text"], ["class", "danger-text", 4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.password = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_6_listener() { return ctx.onLoginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.onLoginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_ng_template_11_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erStatus == 404)("ngIfElse", _r2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.loginpage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #393939;\n}\n.login__box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: 350px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  overflow: auto;\n  background-color: #303030;\n  border-radius: 10px;\n}\n.login__title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n}\n.login__input[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.login__btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 20px;\n}"] });


/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 22, vars: 0, consts: [[1, "wrapper-main"], [1, "content-main"], [1, "main-header"], [1, "layers"], [1, "layer__header"], [1, "layers__caption"], [1, "layers__title"], [1, "layer", "layers__base", 2, "background-image", "url(assets/images/roofs-base.png)"], [1, "layer", "layers__back", 2, "background-image", "url(assets/images/roofs-back.png)"], [1, "layer", "layers__middle", 2, "background-image", "url(assets/images/roofs-middle.png)"], [1, "layer", "layers__front", 2, "background-image", "url(assets/images/roofs-front.png)"], [1, "main-article", 2, "background-image", "url(assets/images/street-base.png)"], [1, "main-article__content"], [1, "main-article__header"], [1, "main-article__paragraph"], [1, "copyright"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043A \u043C\u0443\u0433\u0438\u0432\u0430\u0440\u0430\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 11)(15, "div", 12)(16, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442 \u043D\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0414\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043D\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0437\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 8 (800) 555-35-35 \u043B\u0443\u0447\u0448\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u043C \u0441\u0430\u043C\u043E\u043C\u0443 \u0441\u0447\u0438\u0442\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A9 Mugivary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 0.4rem 0.8rem;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: #eeeeee;\n  font-family: \"Raleway\", sans-serif;\n}\n.header__layers[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.main-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: calc((1vw + 1vh) * 5.5);\n  background-image: url('ground.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  bottom: calc((1vw + 1vh) * -2.6);\n}\n.layers[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  position: relative;\n}\n.layer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  will-change: transform;\n  z-index: 2;\n}\n.layers__base[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 1.1), 0);\n  z-index: 0;\n}\n.layers__back[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);\n  z-index: 0;\n}\n.layers__middle[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);\n}\n.layers__front[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 5), 0);\n}\n.layer__header[_ngcontent-%COMP%] {\n  z-index: 1;\n  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);\n  will-change: transform;\n  text-transform: uppercase;\n  font-weight: 900;\n  text-shadow: 0 0 15px #a28908;\n}\n.layers__caption[_ngcontent-%COMP%] {\n  font-size: calc((1vw + 1vh) / 1.1);\n  letter-spacing: calc((1vw + 1vh) / 7);\n  margin-left: 200px;\n}\n.layers__title[_ngcontent-%COMP%] {\n  font-size: calc((1vw + 1vh) * 1.7);\n  letter-spacing: calc((1vw + 1vh) / 5);\n  margin-left: 200px;\n  margin-bottom: calc((1vw + 1vh) * 4);\n}\n.main-article[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  color: #eeeeee;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-article__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-shadow: 0 2px 5px #36b7ef;\n  margin-top: calc((1vw + 1vh) / 0.1);\n  padding: calc((1vw + 1vh) / 0.75);\n  transform: translate3d(0, calc(var(--scrollTop) / -7.5), 0);\n  border-radius: 10px;\n  background-color: rgba(48, 48, 48, 0.7);\n}\n.main-article__header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: calc((1vw + 1vh) * 1.8);\n  letter-spacing: calc((1vw + 1vh) / 7.5);\n  will-change: transform;\n}\n.main-article__paragraph[_ngcontent-%COMP%] {\n  width: calc((1vw + 1vh) * 25);\n  font-size: calc((1vw + 1vh) * 0.9);\n  margin-top: calc((1vw + 1vh) / 0.75);\n  will-change: transform;\n}\n.content-main[_ngcontent-%COMP%] {\n  will-change: transform;\n}\n.copyright[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: calc((1vw + 1vh) * 1.2);\n  margin-top: calc((1vw + 1vh) / 0.75);\n  letter-spacing: calc((1vw + 1vh) / 37.5);\n}"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 7009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



const MaterialComponents = [
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [MaterialComponents,
        _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule] }); })();


/***/ }),

/***/ 1976:
/*!*****************************************!*\
  !*** ./src/app/pipes/cellphone.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellphonePipe": () => (/* binding */ CellphonePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class CellphonePipe {
    transform(value) {
        let numbers = value.toString();
        return `+7-(${numbers[0]}${numbers[1]}${numbers[2]})-${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}-${numbers[8]}${numbers[9]}`;
    }
}
CellphonePipe.ɵfac = function CellphonePipe_Factory(t) { return new (t || CellphonePipe)(); };
CellphonePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cellphone", type: CellphonePipe, pure: true });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);





const API_URL = 'http://51.250.54.62:8080';
class AuthService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.isAuth = false;
        this.username = '';
        this.password = '';
    }
    login(username, password) {
        const params = {
            'username': username,
            'password': password
        };
        return this.http.post(API_URL + '/api/login', null, {
            params: params,
            responseType: 'text',
            observe: 'response'
        });
    }
    logout() {
        this.cookieService.deleteAll();
        this.isAuth = false;
        window.location.reload();
        this.router.navigate(['/']);
    }
    refreshToken() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get('refresh_token')
        });
        return this.http.get(API_URL + '/api/token/refresh', { headers: headers });
    }
    isAuthenticated() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth);
            }, 400);
        });
    }
    getIsAuth() {
        return this.isAuth;
    }
    setAuth(status) {
        this.isAuth = status;
    }
    getAuthTokens() {
        return this.authTokens;
    }
    setAuthTokens(access_token, refresh_token) {
        this.authTokens = {
            access_token: access_token,
            refresh_token: refresh_token
        } || {};
    }
    getCurrentManager() {
        return this.currentManager;
    }
    setCurrentManager(id, surname, name, patronymic, login, role) {
        this.currentManager = {
            id: id,
            surname: surname,
            name: name,
            patronymic: patronymic,
            login: login,
            role: role
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6080:
/*!*************************************************!*\
  !*** ./src/app/services/calculation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class CalculationService {
    constructor() {
        this.calculation = [
            { id: 1, manager_id: 1, addressOC: 'Ленина, 32', numberN: 12, created_date: new Date('2.08.2021'), cStatus: false },
            { id: 2, manager_id: 2, addressOC: 'somewhere on the middle', numberN: 18, created_date: new Date('4.12.2021'), cStatus: false },
            { id: 3, manager_id: 2, addressOC: 'you will not find me', numberN: 29, created_date: new Date('06.24.2022'), cStatus: true },
            { id: 4, manager_id: 1, addressOC: 'Московское шоссе, 34Б', numberN: 45, created_date: new Date('09.02.2022'), cStatus: true },
        ];
    }
}
CalculationService.ɵfac = function CalculationService_Factory(t) { return new (t || CalculationService)(); };
CalculationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculationService, factory: CalculationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9012:
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsService": () => (/* binding */ ClientsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);




const API_URL = 'http://51.250.54.62:8080';
class ClientsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.authTokens = this.authService.getAuthTokens();
        this.currentManager = this.authService.getCurrentManager();
        this.clientpage = true;
        this.clients = [];
    }
    getById(id) {
        return this.clients.find(c => c.id === id);
    }
    addCustomer(newClientData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        return this.http.post(API_URL + '/api/addCustomer', JSON.stringify(newClientData), { headers: headers });
    }
    //   @PatchMapping("/updateCustomer/{id}")
    //   public ResponseEntity<?> updateCustomer(@RequestParam Long id, @RequestBody Customer customerDetails){
    //    try {
    //      return new ResponseEntity<>(customerService.updateCustomer(id, customerDetails), HttpStatus.OK);
    //    }
    //    catch (Exception ex){
    //      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //    }
    //   }
    updateCustomer(customerId, clientData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: customerId
        };
        return this.http.patch(API_URL + `/api/updateCustomer/${customerId}`, JSON.stringify(clientData), { headers: headers, params: params });
    }
    getAllClients() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: this.currentManager.id
        };
        return this.http.get(API_URL + '/api/customers', { headers: headers, params: params, responseType: 'text', observe: 'response' });
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ClientsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7916:
/*!*********************************************!*\
  !*** ./src/app/services/manager.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerService": () => (/* binding */ ManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ManagerService {
    constructor() {
        this.managers = [
            {
                id: 1,
                name: 'Игорь',
                surname: 'Малинин',
                patronymic: 'Игоревич',
                jobpost: 'Менеджер',
                telephone: 89608223422,
                email: 'igorswayts@gmail.com',
                password: 12345678
            }
        ];
    }
}
ManagerService.ɵfac = function ManagerService_Factory(t) { return new (t || ManagerService)(); };
ManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManagerService, factory: ManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);