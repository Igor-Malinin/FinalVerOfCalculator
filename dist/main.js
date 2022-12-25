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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 7538);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/client.component */ 3995);
/* harmony import */ var _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-registration/client-registration.component */ 1602);
/* harmony import */ var _consctruction_node_consctruction_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consctruction-node/consctruction-node.component */ 9788);
/* harmony import */ var _houseframe_calc_houseframe_calc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./houseframe-calc/houseframe-calc.component */ 7925);
/* harmony import */ var _housefoundation_calc_housefoundation_calc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./housefoundation-calc/housefoundation-calc.component */ 8489);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./results/results.component */ 9916);
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-registration/user-registration.component */ 68);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4650);















const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent },
    { path: 'clientspage', component: _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__.ClientsPageComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id', component: _client_client_component__WEBPACK_IMPORTED_MODULE_5__.ClientComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'clientregistration', component: _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_6__.ClientRegistrationComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'userregistration', component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_11__.UserRegistrationComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id/construction', component: _consctruction_node_consctruction_node_component__WEBPACK_IMPORTED_MODULE_7__.ConsctructionNodeComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id/construction/houseframecalc', component: _houseframe_calc_houseframe_calc_component__WEBPACK_IMPORTED_MODULE_8__.HouseframeCalcComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id/construction/housefoundationcalc', component: _housefoundation_calc_housefoundation_calc_component__WEBPACK_IMPORTED_MODULE_9__.HousefoundationCalcComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'clientspage/:id/:idRes/:resPNum', component: _results_results_component__WEBPACK_IMPORTED_MODULE_10__.ResultsComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPageComponent },
    { path: '**', redirectTo: '/error' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent),
/* harmony export */   "browserRefresh": () => (/* binding */ browserRefresh)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/manager.service */ 7916);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);







function AppComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0412\u043E\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} }
function AppComponent_ng_template_1_div_9_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_div_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_template_1_div_9_p_3_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_template_1_div_9_ng_template_4_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 15)(11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.authService.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.setEditFlag()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.authService.getIsAuth());
} }
let browserRefresh = false;
class AppComponent {
    constructor(authService, managerService, cookieService, router) {
        this.authService = authService;
        this.managerService = managerService;
        this.cookieService = cookieService;
        this.router = router;
        this.isAuthenticated = false;
        this.subscription = router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
                browserRefresh = !router.navigated;
            }
        });
    }
    ngOnInit() {
        if (this.cookieService.check('isAuthenticated')) {
            this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK');
            this.cookieService.set('editFlag', JSON.stringify(false));
            this.authService.setAuth(this.isAuthenticated);
            this.authService.setAuthTokens(this.cookieService.get('access_token'), this.cookieService.get('refresh_token'));
            this.authService.setCurrentManager(Number(this.cookieService.get('id')), this.cookieService.get('surname'), this.cookieService.get('name'), this.cookieService.get('patronymic'), this.cookieService.get('userName'), this.cookieService.get('role'));
        }
    }
    setEditFlag() {
        this.cookieService.set('editFlag', JSON.stringify(false));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["class", "header", 4, "ngIf", "ngIfElse"], ["authorizated", ""], [1, "header"], [1, "wrapper"], [1, "header__wrapper"], [1, "header__logo-with-title", 2, "width", "100%", "justify-content", "space-between"], ["src", "../assets/images/header-logo.png", "alt", "Discover Amazing places in Japan", 1, "header__logo-pic", 2, "opacity", "0"], ["routerLink", "/login", 1, "btn", "header__btn"], [1, "header", 2, "background-color", "#303030"], [1, "header__logo-with-title"], ["href", "/", 1, "header__logo-link"], ["src", "../assets/images/header-logo.png", "alt", "Discover Amazing places in Japan", 1, "header__logo-pic"], [1, "header__title"], [1, "header__fjb"], ["class", "header__fio-jobpost", 4, "ngIf"], [2, "display", "flex", "flex-flow", "column", "gap", "10px", "text-align", "center"], ["routerLink", "/", 1, "btn", "header__btn", 3, "click"], ["routerLink", "/clientspage", 1, "btn", "header__btn", 3, "click"], [1, "header__fio-jobpost"], [1, "header__fio"], ["class", "header__jobpost", 4, "ngIf", "ngIfElse"], ["manager", ""], [1, "header__jobpost"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_header_0_Template, 7, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 15, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.getIsAuth())("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["@charset \"UTF-8\";\n/* montserrat-regular - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* montserrat-500 - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* montserrat-700 - latin_cyrillic */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* raleway-black */\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); /* Chrome 26+, Opera 23+, Firefox 39+ */\n}\n/* raleway-regular */\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); /* Chrome 26+, Opera 23+, Firefox 39+ */\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, tt, var, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0; /* 1 */\n  -ms-interpolation-mode: bicubic; /* 2 */\n}\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0; /* 1 */\n  padding: 0;\n  white-space: normal; /* 2 */\n  *margin-left: -7px; /* 3 */\n}\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%; /* 1 */\n  margin: 0; /* 2 */\n  vertical-align: baseline; /* 3 */\n  *vertical-align: middle; /* 3 */\n}\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n  *overflow: visible; /* 4 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n  *height: 13px; /* 3 */\n  *width: 13px; /* 3 */\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\n  box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto; /* 1 */\n  vertical-align: top; /* 2 */\n}\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg {\n  vertical-align: middle;\n}\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn:hover {\n  background-color: #2a2a2a;\n}\n.btn:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger:hover {\n  background-color: #2a2a2a;\n}\n.danger:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text {\n  color: #fd6868;\n}\na, a:active, a:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched {\n  border: 2px solid #aaff8e;\n}\n.input__style {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; /* \u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430 */\n  -webkit-text-fill-color: #eeeeee !important; /* \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n  color: #eeeeee !important; /* \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n}\nselect {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched {\n  border: 2px solid #aaff8e;\n}\nselect:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect::-ms-expand {\n  display: none;\n}\n.wrapper {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header .client-info {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper {\n    max-width: 650px;\n  }\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.wrapper-full {\n  max-width: 1262px;\n  margin: 0 auto;\n}\n.section-title {\n  font-weight: 500;\n  font-size: 35px;\n  line-height: 42px;\n  position: relative;\n  padding-bottom: 10px;\n}\n.section-title::after {\n  display: block;\n  content: \"\";\n  width: 253px;\n  height: 3px;\n  background-color: #303030;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n/* Header styles start */\n.header {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 20px;\n}\n.header__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n}\n.header__link {\n  font-size: 18px;\n  line-height: 24px;\n  color: white;\n  text-decoration: none;\n}\n.header__logo-with-title {\n  display: flex;\n  gap: 45px;\n  align-items: center;\n}\n.header__fjb {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n.header__logo-pic {\n  width: 100px;\n}\n.header__title {\n  font-size: 26px;\n  font-weight: 700;\n}\n.header__fio-jobpost {\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (max-width: 1087px) {\n  .header__logo-with-title {\n    gap: 40px;\n  }\n  .header__fjb {\n    gap: 55px;\n  }\n  .header__logo-pic {\n    width: 90px;\n  }\n  .header__title {\n    font-size: 20px;\n  }\n  .header__fio-jobpost {\n    font-size: 16px;\n  }\n}\n@media (max-width: 980px) {\n  .header__logo-with-title {\n    gap: 30px;\n  }\n  .header__fjb {\n    gap: 45px;\n  }\n  .header__logo-pic {\n    width: 90px;\n  }\n  .header__title {\n    font-size: 18px;\n  }\n  .header__fio-jobpost {\n    font-size: 14px;\n  }\n}\n@media (max-width: 767.98px) {\n  .header__logo-with-title {\n    gap: 20px;\n  }\n  .header__fjb {\n    gap: 35px;\n  }\n  .header__logo-pic {\n    width: 80px;\n  }\n  .header__title {\n    font-size: 17px;\n  }\n  .header__fio-jobpost {\n    font-size: 14px;\n  }\n}\n/* Header styles end */"], encapsulation: 2 });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-page/clients-page.component */ 7538);
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/client.component */ 3995);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/cellphone.pipe */ 1976);
/* harmony import */ var _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-registration/client-registration.component */ 1602);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4934);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ 8796);
/* harmony import */ var _consctruction_node_consctruction_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consctruction-node/consctruction-node.component */ 9788);
/* harmony import */ var _houseframe_calc_houseframe_calc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./houseframe-calc/houseframe-calc.component */ 7925);
/* harmony import */ var _housefoundation_calc_housefoundation_calc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./housefoundation-calc/housefoundation-calc.component */ 8489);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results/results.component */ 9916);
/* harmony import */ var _pipes_roundNum_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/roundNum.pipe */ 9506);
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-registration/user-registration.component */ 68);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 4650);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__.ErrorPageComponent,
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent,
        _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_5__.ClientsPageComponent,
        _client_client_component__WEBPACK_IMPORTED_MODULE_6__.ClientComponent,
        _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_7__.CellphonePipe,
        _pipes_roundNum_pipe__WEBPACK_IMPORTED_MODULE_14__.RoundNumPipe,
        _client_registration_client_registration_component__WEBPACK_IMPORTED_MODULE_8__.ClientRegistrationComponent,
        _consctruction_node_consctruction_node_component__WEBPACK_IMPORTED_MODULE_10__.ConsctructionNodeComponent,
        _houseframe_calc_houseframe_calc_component__WEBPACK_IMPORTED_MODULE_11__.HouseframeCalcComponent,
        _housefoundation_calc_housefoundation_calc_component__WEBPACK_IMPORTED_MODULE_12__.HousefoundationCalcComponent,
        _results_results_component__WEBPACK_IMPORTED_MODULE_13__.ResultsComponent,
        _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_15__.UserRegistrationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule] }); })();


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
                this.router.navigate(['/error'], {
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
                    window.location.reload();
                },
                error: (err) => {
                    console.log('error received:', err);
                    if (err.status == 403) {
                        alert('пожалуйста введите данные заново');
                        this.authService.refreshToken();
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
ClientRegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientRegistrationComponent, selectors: [["app-client-registration"]], decls: 27, vars: 8, consts: [[1, "wrapper"], [1, "component__container"], ["type", "button", "routerLink", "/clientspage", 1, "btn", "btn-go-back"], [1, "reg__form", 3, "formGroup", "ngSubmit"], [1, "reg__title"], [1, "reg__form-control"], ["type", "text", "name", "surname", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "formControlName", "surname", 1, "reg__input"], ["class", "validation", 4, "ngIf"], ["type", "text", "name", "cName", "placeholder", "\u0418\u043C\u044F", "formControlName", "name", 1, "reg__input"], ["type", "text", "name", "patronymic", "placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", "formControlName", "patronymic", 1, "reg__input"], ["type", "text", "name", "telephoneNumber", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "telephoneNumber", 1, "reg__input"], ["type", "text", "name", "email", "placeholder", "E-mail", "formControlName", "email", 1, "reg__input"], ["type", "text", "name", "address", "placeholder", "\u0410\u0434\u0440\u0435\u0441", "formControlName", "address", 1, "reg__input"], ["type", "submit", 1, "btn", "reg__btn", 3, "disabled"], [1, "validation"], [4, "ngIf"]], template: function ClientRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.formClientReg.get("surname")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.formClientReg.get("surname")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.formClientReg.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formClientReg.get("name")) == null ? null : tmp_2_0.touched));
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.reg__form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn-go-back[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-left: 2px;\n}\n.reg__title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 40px;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.reg__form-control[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.reg__input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.reg__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.reg__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fd6868;\n}\n.reg__btn[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}"] });


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
/* harmony import */ var _entity_Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/Client */ 3824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/clients.service */ 9012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/results.service */ 9741);
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/calculation.service */ 6080);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/cellphone.pipe */ 1976);












function ClientComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "cellphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 18)(7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_div_5_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.moreInfoToggle = !ctx_r5.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", ctx_r0.getClient().surname, " ", ctx_r0.getClient().name, " ", ctx_r0.getClient().patronymic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx_r0.getTel()));
} }
function ClientComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "cellphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 20)(11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_div_6_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r7.editToggle = !ctx_r7.editToggle; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.moreInfoToggle = !ctx_r7.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_div_6_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.moreInfoToggle = !ctx_r9.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0421\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", ctx_r1.getClient().surname, " ", ctx_r1.getClient().name, " ", ctx_r1.getClient().patronymic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, ctx_r1.getTel()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getClient().address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getClient().email);
} }
function ClientComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ClientComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ClientComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ClientComponent_div_7_div_12_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClientComponent_div_7_div_12_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r17.formEditClient.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r17.formEditClient.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].actualLength, ". ");
} }
function ClientComponent_div_7_div_12_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r18.formEditClient.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r18.formEditClient.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].actualLength, ". ");
} }
function ClientComponent_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientComponent_div_7_div_12_small_1_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClientComponent_div_7_div_12_small_2_Template, 2, 2, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClientComponent_div_7_div_12_small_3_Template, 2, 2, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r13.formEditClient.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r13.formEditClient.get("telephoneNumber")) == null ? null : tmp_1_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r13.formEditClient.get("telephoneNumber")) == null ? null : tmp_2_0.hasError("maxlength"));
} }
function ClientComponent_div_7_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClientComponent_div_7_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClientComponent_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientComponent_div_7_div_15_small_1_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClientComponent_div_7_div_15_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r14.formEditClient.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r14.formEditClient.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
} }
function ClientComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ClientComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClientComponent_div_7_div_3_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ClientComponent_div_7_div_6_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ClientComponent_div_7_div_9_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ClientComponent_div_7_div_12_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ClientComponent_div_7_div_15_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ClientComponent_div_7_div_18_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 20)(20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_div_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r21.editToggle = !ctx_r21.editToggle; ctx_r21.moreInfoToggle = !ctx_r21.moreInfoToggle; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.updateClientData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_div_7_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r23.editToggle = !ctx_r23.editToggle; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.moreInfoToggle = !ctx_r23.moreInfoToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formEditClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.formEditClient.get("surname")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.formEditClient.get("surname")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.formEditClient.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.formEditClient.get("name")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.formEditClient.get("patronymic")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.formEditClient.get("patronymic")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.formEditClient.get("telephoneNumber")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.formEditClient.get("telephoneNumber")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r2.formEditClient.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.formEditClient.get("email")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r2.formEditClient.get("address")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.formEditClient.get("address")) == null ? null : tmp_6_0.touched));
} }
function ClientComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
const _c0 = function (a1, a2, a3) { return ["/clientspage", a1, a2, a3]; };
const _c1 = function (a1) { return ["/clientspage", a1, "construction", "houseframecalc"]; };
function ClientComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 31)(1, "td")(2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_tr_31_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const calc_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r26.setCalcNumber(calc_r24.number, i_r25 + 1); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.setCalculationsCookie(calc_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td")(12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_tr_31_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const calc_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r28.setCalcNumber(calc_r24.number, i_r25 + 1); ctx_r28.setCalculationsCookie(calc_r24); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.setEditFlag()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_tr_31_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const calc_r24 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.deleteCalculation(calc_r24.number)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const calc_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](9, _c0, ctx_r4.clientId, calc_r24.id, i_r25 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0420\u0430\u0441\u0447\u0435\u0442 \u2116", i_r25 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 6, calc_r24.dataOfCreation, "dd.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](calc_r24.status.statusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](calc_r24.constructionAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c1, ctx_r4.clientId));
} }
const _c2 = function (a1) { return ["/clientspage", a1, "construction"]; };
class ClientComponent {
    constructor(route, router, clientsService, authService, resultsService, calculationService, cookie, fb) {
        this.route = route;
        this.router = router;
        this.clientsService = clientsService;
        this.authService = authService;
        this.resultsService = resultsService;
        this.calculationService = calculationService;
        this.cookie = cookie;
        this.fb = fb;
        this.moreInfoToggle = false;
        this.editToggle = false;
        this.telephoneLength = 10;
    }
    ngOnInit() {
        this.cookie.set('editFlag', JSON.stringify(false));
        this.client = new _entity_Client__WEBPACK_IMPORTED_MODULE_0__.Client();
        this.route.params.subscribe({
            next: (params) => {
                this.clientId = +params['id'];
                this.clientsService.getAllClients().subscribe({
                    next: (msg) => {
                        this.clientsService.setClient(JSON.parse(String(msg.body)).filter((c) => c.id === this.clientId)[0]);
                        this.client = this.clientsService.getClient();
                        this.client.calculations = [];
                        this.cookie.set('client', JSON.stringify(this.client));
                        if (this.clientsService.getClient() == undefined)
                            this.router.navigate(['/error']);
                        this.formEditClient = this.fb.group({
                            id: [this.clientsService.getClient().id],
                            surname: [this.clientsService.getClient().surname, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                            name: [this.clientsService.getClient().name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                            patronymic: [this.clientsService.getClient().patronymic, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                            telephoneNumber: [this.clientsService.getClient().telephoneNumber, [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(this.telephoneLength),
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(this.telephoneLength)
                                ]],
                            email: [this.clientsService.getClient().email, [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email
                                ]],
                            address: [this.clientsService.getClient().address, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                            user: [this.clientsService.getClient().user]
                        });
                    },
                    error: (err) => {
                        if (err.status == 403) {
                            this.authService.refreshToken();
                        }
                        console.log('error: ', err);
                    },
                    complete: () => {
                    }
                });
            },
            error: (err) => {
                console.log('error received:', err);
            },
            complete: () => {
            }
        });
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }
        // `${String(new Date().getFullYear())}.${padTo2Digits(new Date().getMonth())}.${padTo2Digits(new Date().getDate())}`
        this.formCreateCalculation = this.fb.group({
            id: [null],
            // manager_id: [this.authService.getCurrentManager().id],
            constructionAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            number: [null],
            dataOfCreation: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            results: [null],
            status: [null]
        });
        this.calculationService.getCalculations(this.clientId).subscribe({
            next: (msg) => {
                this.calculationService.setCalculations(JSON.parse(String(msg.body)));
                console.log(this.calculationService.getCalulationsArray());
            },
            error: (err) => {
                console.log('error', err);
            },
            complete: () => { }
        });
    }
    getTel() {
        return String(this.clientsService.getClient().telephoneNumber);
        // return JSON.stringify(JSON.parse(this.cookie.get('client')).telephoneNumber)
    }
    getClient() {
        return this.clientsService.getClient();
        // console.log(JSON.parse(this.cookie.get('client')))
        // return JSON.parse(this.cookie.get('client'))
    }
    getFormEditClient() {
        return this.formEditClient;
    }
    getAllCalculations() {
        return this.calculationService.getCalulationsArray();
    }
    updateClientData() {
        this.clientsService.updateCustomer(this.clientId, this.getFormEditClient().value).subscribe({
            next: (msg) => {
                console.log('Client updated');
                window.location.reload();
            },
            error: (err) => {
                console.log('error received:', err);
                if (err.status == 403) {
                    alert('Пожалуйста обновить страницу и введите данные заново');
                }
            }
        });
    }
    setCalcNumber(number, pseudoNum) {
        console.log(number);
        this.cookie.set('calcNumber', number);
    }
    saveCalculation() {
        const newClientData = { ...this.formCreateCalculation.value };
        console.log(JSON.stringify(newClientData));
    }
    addNewCalculation() {
        const newCalculation = { ...this.formCreateCalculation.value };
        // console.log(newCalculation)
        this.calculationService.addCalculation(this.clientId, newCalculation).subscribe({
            next: (msg) => {
                this.calculationService.setCurrentCalcId(JSON.parse(JSON.stringify(msg)).id);
                console.log(JSON.stringify(msg));
                this.cookie.set('calculation', JSON.stringify(msg));
                this.cookie.set('calcNumber', JSON.parse(JSON.stringify(msg)).number);
            },
            error: (err) => {
                console.log('error', err);
            },
            complete: () => { }
        });
    }
    showData() {
    }
    setCalculationsCookie(calc) {
        calc.results = null;
        // console.log(calc)
        this.cookie.set('calculation', JSON.stringify(calc));
    }
    setEditFlag() {
        this.cookie.set('editFlag', JSON.stringify(true));
    }
    deleteCalculation(calculationNumber) {
        this.calculationService.deleteInArray(calculationNumber);
        this.calculationService.deleteCalculation(calculationNumber).subscribe({
            next: (msg) => {
                console.log(msg);
                // window.location.reload()
            },
            error: (err) => {
                console.log('error', err);
            },
            complete: () => { }
        });
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_results_service__WEBPACK_IMPORTED_MODULE_3__.ResultsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_calculation_service__WEBPACK_IMPORTED_MODULE_4__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
ClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 32, vars: 10, consts: [[1, "wrapper"], [1, "component__container"], [1, "client__card-header"], ["type", "button", "routerLink", "/clientspage", 1, "btn"], ["class", "client-info", 4, "ngIf"], ["class", "client-info client-info__edit", 3, "formGroup", 4, "ngIf"], [1, "create-calculation__form"], [1, "frame__form-control", 3, "formGroup"], [1, "address-clearbtn"], [1, "address-validation"], [1, "address-with-btn"], ["type", "text", "name", "fAddress", "placeholder", "\u0410\u0434\u0440\u0435\u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430", "formControlName", "constructionAddress", 1, "validation__input-style"], ["type", "submit", 1, "btn", 3, "routerLink", "disabled", "click"], ["class", "validation", 4, "ngIf"], [1, "calculation__table"], [1, "calculation__table-headers"], ["class", "calculation__data", 4, "ngFor", "ngForOf"], [1, "client-info"], [1, "links-top-line-separator"], [1, "client__card-link", 3, "click"], [1, "flex-links", "links-top-line-separator"], [1, "client-info", "client-info__edit", 3, "formGroup"], [1, "edit__form-control"], ["type", "text", "name", "surname", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "formControlName", "surname", 1, "edit__input"], ["type", "text", "name", "cName", "placeholder", "\u0418\u043C\u044F", "formControlName", "name", 1, "edit__input"], ["type", "text", "name", "patronymic", "placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", "formControlName", "patronymic", 1, "edit__input"], ["type", "text", "name", "telephoneNumber", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "telephoneNumber", 1, "edit__input"], ["type", "text", "name", "email", "placeholder", "E-mail", "formControlName", "email", 1, "edit__input"], ["type", "text", "name", "address", "placeholder", "\u0410\u0434\u0440\u0435\u0441", "formControlName", "address", 1, "edit__input"], [1, "validation"], [4, "ngIf"], [1, "calculation__data"], [1, "client__card-link", 3, "routerLink", "click"], [1, "btn", 3, "routerLink", "click"], [1, "btn", "danger", 3, "click"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ClientComponent_div_5_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ClientComponent_div_6_Template, 15, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ClientComponent_div_7_Template, 24, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientComponent_Template_button_click_14_listener() { return ctx.addNewCalculation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ClientComponent_div_16_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "table", 14)(18, "tr", 15)(19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\u041D\u043E\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u0414\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u0421\u0442\u0430\u0442\u0443\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u0410\u0434\u0440\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ClientComponent_tr_31_Template, 17, 15, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.moreInfoToggle && !ctx.editToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.moreInfoToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formCreateCalculation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c2, ctx.clientId))("disabled", ctx.formCreateCalculation.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.formCreateCalculation.get("constructionAddress")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.formCreateCalculation.get("constructionAddress")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.getAllCalculations());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_5__.CellphonePipe], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info__edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.client__card-header[_ngcontent-%COMP%]   .input__style[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.client__card-header[_ngcontent-%COMP%]   .flex-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.client__card-header[_ngcontent-%COMP%]   .links-top-line-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding-top: 6px;\n  margin-top: 6px;\n  border-top: 2px solid gray;\n}\n.calculation__table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 30px 0;\n  text-align: center;\n  border: 3px solid #222222;\n  border-collapse: separate;\n  border-radius: 10px;\n}\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  vertical-align: middle;\n  border: 2px solid #222222;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, th[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 5px;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 5px;\n}\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #43484b;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 5px;\n}\n.calculation__table-headers[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #303030;\n}\n.client__card-link[_ngcontent-%COMP%] {\n  color: #55c2ff;\n  text-shadow: 0 0 5px #00a3ff;\n  cursor: pointer;\n}\n.client__card-link[_ngcontent-%COMP%]:hover {\n  color: #b7e1fd;\n}\n.client__card-link[_ngcontent-%COMP%]:active {\n  text-shadow: none;\n}\n.address-with-btn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n}\n.address-with-btn[_ngcontent-%COMP%]   .validation__input-style[_ngcontent-%COMP%] {\n  width: 500px;\n  text-align: center;\n}\n.edit__form-control[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.edit__input[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.edit__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.edit__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n  color: #fd6868;\n}"] });


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






function ClientsPageComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/clientspage", a1]; };
function ClientsPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "button", 9)(2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cl_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, cl_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", cl_r2.surname, " ", cl_r2.name, " ", cl_r2.patronymic, " ");
} }
class ClientsPageComponent {
    constructor(clientsService, authService, route, router, cookieService) {
        this.clientsService = clientsService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.cookieService = cookieService;
        this.role = '';
    }
    ngOnInit() {
        this.role = this.cookieService.get('role');
        this.clientsService.getAllClients().subscribe({
            next: (msg) => {
                console.log(JSON.parse(String(msg.body)));
                this.clientsService.clients = JSON.parse(String(msg.body));
            },
            error: (err) => {
                console.log('error received on clients-page:', err);
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
            },
            complete: () => this.router.navigate(['/clientspage'])
        });
    }
}
ClientsPageComponent.ɵfac = function ClientsPageComponent_Factory(t) { return new (t || ClientsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService)); };
ClientsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientsPageComponent, selectors: [["app-clients-page"]], decls: 9, vars: 2, consts: [[1, "wrapper"], [1, "component__container"], [1, "title-with-lines"], ["routerLink", "/clientregistration", 1, "btn", "clients__btn"], ["class", "btn clients__btn", "routerLink", "/userregistration", 4, "ngIf"], [1, "clients__cards"], ["class", "clients__card", 4, "ngFor", "ngForOf"], ["routerLink", "/userregistration", 1, "btn", "clients__btn"], [1, "clients__card"], [1, "btn-clients__card", 3, "routerLink"], [1, "clients__card-line"]], template: function ClientsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ClientsPageComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ClientsPageComponent_div_8_Template, 4, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.role == "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clientsService.clients);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.clients__btn[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-right: 40px;\n  margin-left: 2px;\n}\n.clients__cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n}\n.btn-clients__card[_ngcontent-%COMP%] {\n  min-width: 300px;\n  background-color: #303030;\n  color: #eeeeee;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  transition: 0.1s ease-in-out;\n}\n.btn-clients__card[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n}\n.btn-clients__card[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 5px 1px #eeeeee;\n}\n.link-clients__card[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n.clients__card-line[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n}"] });


/***/ }),

/***/ 9788:
/*!********************************************************************!*\
  !*** ./src/app/consctruction-node/consctruction-node.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsctructionNodeComponent": () => (/* binding */ ConsctructionNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);



const _c0 = function (a1) { return ["/clientspage", a1]; };
const _c1 = function (a1) { return ["/clientspage", a1, "construction", "houseframecalc"]; };
const _c2 = function (a1) { return ["/clientspage", a1, "construction", "housefoundationcalc"]; };
class ConsctructionNodeComponent {
    constructor(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.route.params.subscribe({
            next: (params) => {
                this.clientId = +params['id'];
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
                console.log('error: ', err);
            }
        });
    }
}
ConsctructionNodeComponent.ɵfac = function ConsctructionNodeComponent_Factory(t) { return new (t || ConsctructionNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ConsctructionNodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConsctructionNodeComponent, selectors: [["app-consctruction-node"]], decls: 14, vars: 9, consts: [[1, "wrapper"], [1, "construction-node__container"], [1, "btn", 3, "routerLink"], [1, "flex-centrification-container"], [1, "construction-node__box"], [1, "construction-node__title"], [1, "btn", "construction-node__btn", 3, "routerLink"], ["src", "https://cdn1.iconfinder.com/data/icons/building-and-construction-4/24/house-frame-construction-lumber-framing-building-build-512.png", "alt", "\u043A\u0430\u0440\u043A\u0430\u0441", 1, "construction-node__img"], ["src", "https://cdn-icons-png.flaticon.com/512/113/113606.png", "alt", "\u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442", 1, "construction-node__img"]], template: function ConsctructionNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0412\u044B\u0431\u043E\u0440 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u041A\u0430\u0440\u043A\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.clientId));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.construction-node__container[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.construction-node__box[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 400px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n  padding: 30px 0;\n  border: 3px solid #6b6b6b;\n  border-radius: 10px;\n  background-color: #303030;\n}\n.construction-node__btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 220px;\n  padding: 8px 12px;\n}\n.construction-node__img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 30px;\n  background-color: #55c2ff;\n  border-radius: 6px;\n  padding: 4px;\n}"] });


/***/ }),

/***/ 3824:
/*!**********************************!*\
  !*** ./src/app/entity/Client.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client)
/* harmony export */ });
class Client {
}


/***/ }),

/***/ 5923:
/*!***************************************!*\
  !*** ./src/app/entity/authRequest.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRequest": () => (/* binding */ AuthRequest)
/* harmony export */ });
class AuthRequest {
}


/***/ }),

/***/ 7742:
/*!******************************************!*\
  !*** ./src/app/entity/currentManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentManager": () => (/* binding */ CurrentManager)
/* harmony export */ });
class CurrentManager {
}


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




function ErrorPageComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u043E\u043C\u0430\u0448\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
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
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 10, vars: 4, consts: [[1, "wrapper"], [1, "error__container-holder"], [1, "error__container"], [1, "error__title"], ["class", "error__title", 4, "ngIf"], ["class", "btn", "routerLink", "/", 4, "ngIf", "ngIfElse"], ["clientsPage", ""], ["routerLink", "/", 1, "btn"], ["routerLink", "/clientspage", 1, "btn"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041E\u0448\u0438\u0431\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ErrorPageComponent_h1_5_Template, 2, 0, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ErrorPageComponent_h1_6_Template, 2, 0, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ErrorPageComponent_a_7_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ErrorPageComponent_ng_template_8_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.getIsAuth());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.getIsAuth());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.getIsAuth())("ngIfElse", _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".error__container-holder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.error__container[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  text-align: center;\n}\n\n.error__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 1rem;\n}"] });


/***/ }),

/***/ 8489:
/*!************************************************************************!*\
  !*** ./src/app/housefoundation-calc/housefoundation-calc.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HousefoundationCalcComponent": () => (/* binding */ HousefoundationCalcComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);






function HousefoundationCalcComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function HousefoundationCalcComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function HousefoundationCalcComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function HousefoundationCalcComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function (a1) { return ["/clientspage", a1, "construction"]; };
class HousefoundationCalcComponent {
    constructor(route, fb, authService) {
        this.route = route;
        this.fb = fb;
        this.authService = authService;
    }
    ngOnInit() {
        this.route.params.subscribe({
            next: (params) => {
                this.clientId = +params['id'];
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
                console.log('error: ', err);
            }
        });
        this.formBasement = this.fb.group({
            id: [null],
            results_id: [null],
            perimeter_of_external_walls: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            internal_wall_length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            concrete_piles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            concrete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    submit() {
        if (this.formBasement.valid) {
            const newBasementData = { ...this.formBasement.value };
            console.log(newBasementData);
            this.formBasement.reset();
        }
    }
}
HousefoundationCalcComponent.ɵfac = function HousefoundationCalcComponent_Factory(t) { return new (t || HousefoundationCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HousefoundationCalcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HousefoundationCalcComponent, selectors: [["app-housefoundation-calc"]], decls: 34, vars: 9, consts: [[1, "wrapper"], [1, "component__container"], [1, "btn", 3, "routerLink"], [1, "title-with-lines"], [1, "basement__form", 3, "formGroup", "ngSubmit"], [1, "basement__box"], [1, "basement__form-control"], [1, "label-item__flex"], [1, "form__label"], ["type", "text", "name", "perimeterofexternalwalls", "formControlName", "perimeter_of_external_walls", 1, "basement__input"], ["class", "validation right-side-text", 4, "ngIf"], ["type", "text", "name", "internalwalllength", "formControlName", "internal_wall_length", 1, "basement__input"], ["type", "text", "name", "concretepiles", "formControlName", "concrete_piles", 1, "basement__input"], [1, "label-item__flex", 2, "margin-bottom", "0"], ["type", "text", "name", "concrete", "formControlName", "concrete", 1, "basement__input"], ["type", "submit", 1, "btn", "basement__btn", 3, "disabled"], [1, "validation", "right-side-text"]], template: function HousefoundationCalcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HousefoundationCalcComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HousefoundationCalcComponent_div_13_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0414\u043B\u0438\u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HousefoundationCalcComponent_div_19_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "div", 7)(22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0411\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0441\u0432\u0430\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HousefoundationCalcComponent_div_25_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6)(27, "div", 13)(28, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0411\u0435\u0442\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HousefoundationCalcComponent_div_31_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formBasement);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.formBasement.get("perimeter_of_external_walls")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formBasement.get("perimeter_of_external_walls")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.formBasement.get("internal_wall_length")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.formBasement.get("internal_wall_length")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.formBasement.get("concrete_piles")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.formBasement.get("concrete_piles")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.formBasement.get("concrete")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.formBasement.get("concrete")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formBasement.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.basement__form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.basement__box[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px 25px;\n  border: 2px solid #2a2a2a;\n  background-color: #494949;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n.basement__input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.basement__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.basement__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fd6868;\n}\n.label-item__flex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.label-item__flex[_ngcontent-%COMP%]   .form__label[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.label-item__flex[_ngcontent-%COMP%]   .basement__input[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n.basement__btn[_ngcontent-%COMP%] {\n  width: 40%;\n}"] });


/***/ }),

/***/ 7925:
/*!**************************************************************!*\
  !*** ./src/app/houseframe-calc/houseframe-calc.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseframeCalcComponent": () => (/* binding */ HouseframeCalcComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _entity_Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/Client */ 3824);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_materials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/materials.service */ 4007);
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/results.service */ 9741);
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/calculation.service */ 6080);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/cellphone.pipe */ 1976);













function HouseframeCalcComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HouseframeCalcComponent_div_22_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.a = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HouseframeCalcComponent_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.b = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 27)(4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.calculate("+")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_22_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.calculate("-")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_22_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.calculate("*")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.calculate("/")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u00F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HouseframeCalcComponent_div_22_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.c = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.a);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.b);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.c);
} }
function HouseframeCalcComponent_div_41_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_41_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ", (tmp_0_0 = ctx_r14.formFrame.get("numberOfFloors")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["min"].min, " \u044D\u0442\u0430\u0436\u0430. ");
} }
function HouseframeCalcComponent_div_41_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ", (tmp_0_0 = ctx_r15.formFrame.get("numberOfFloors")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["max"].max, " \u044D\u0442\u0430\u0436\u0435\u0439. ");
} }
function HouseframeCalcComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HouseframeCalcComponent_div_41_small_1_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HouseframeCalcComponent_div_41_small_2_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_41_small_3_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.formFrame.get("numberOfFloors")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formFrame.get("numberOfFloors").errors == null ? null : ctx_r3.formFrame.get("numberOfFloors").errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r3.formFrame.get("numberOfFloors")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["max"]);
} }
function HouseframeCalcComponent_div_43_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
} }
function HouseframeCalcComponent_div_43_div_7_div_8_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_8_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u044B\u0441\u043E\u0442\u0443 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ", ctx_r55.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"] == null ? null : ctx_r55.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors == null ? null : ctx_r55.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors["max"].max, " \u043C. ");
} }
function HouseframeCalcComponent_div_43_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HouseframeCalcComponent_div_43_div_7_div_8_small_1_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HouseframeCalcComponent_div_43_div_7_div_8_small_2_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"] == null ? null : ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors == null ? null : ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"] == null ? null : ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors == null ? null : ctx_r22.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].errors["max"]);
} }
function HouseframeCalcComponent_div_43_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_select_23_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r59);
} }
function HouseframeCalcComponent_div_43_div_7_select_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 77)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_23_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r25.getThicknessArray(ctx_r25.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].value));
} }
function HouseframeCalcComponent_div_43_div_7_select_24_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r62);
} }
function HouseframeCalcComponent_div_43_div_7_select_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 77)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_24_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r26.getThicknessArray("all"));
} }
function HouseframeCalcComponent_div_43_div_7_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u043B\u0449\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_select_35_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r64);
} }
function HouseframeCalcComponent_div_43_div_7_select_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 79)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_35_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r29.getThicknessArray(ctx_r29.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].value));
} }
function HouseframeCalcComponent_div_43_div_7_select_36_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r67);
} }
function HouseframeCalcComponent_div_43_div_7_select_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 79)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_36_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r30.getThicknessArray("all"));
} }
function HouseframeCalcComponent_div_43_div_7_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u043B\u0449\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const OSB_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", OSB_r68.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](OSB_r68.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041E\u0421\u0411");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const steamWaterproof_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", steamWaterproof_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](steamWaterproof_r69.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041F\u0430\u0440\u043E\u0433\u0438\u0434\u0440\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const windscreen_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", windscreen_r70.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](windscreen_r70.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0435\u0442\u0440\u043E\u0437\u0430\u0449\u0438\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_select_68_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insulation_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", insulation_r72.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](insulation_r72.name);
} }
function HouseframeCalcComponent_div_43_div_7_select_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 80)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_68_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r38.getInsulation(ctx_r38.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].value));
} }
function HouseframeCalcComponent_div_43_div_7_select_69_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insulation_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", insulation_r75.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](insulation_r75.name);
} }
function HouseframeCalcComponent_div_43_div_7_select_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 80)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_select_69_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r39.getInsulation("all"));
} }
function HouseframeCalcComponent_div_43_div_7_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0442\u0435\u043F\u043B\u0438\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_button_73_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_button_73_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r76.considerInnerWallsCalc[i_r17] = !ctx_r76.considerInnerWallsCalc[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0423\u0447\u0435\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_ng_template_74_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r81); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r79.clearOSBInternal(i_r17); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r79.considerInnerWallsCalc[i_r17] = !ctx_r79.considerInnerWallsCalc[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_78_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const OSB_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", OSB_r83.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](OSB_r83.name);
} }
const _c0 = function (a0) { return { "ng-valid": a0 }; };
function HouseframeCalcComponent_div_43_div_7_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u041E\u0421\u0411 \u0432\u043D\u0443\u0442\u0440\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "select", 83)(4, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HouseframeCalcComponent_div_43_div_7_div_78_option_6_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, !ctx_r44.considerInnerWallsCalc[i_r17]));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r44.getOSB());
} }
function HouseframeCalcComponent_div_43_div_7_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041E\u0421\u0411");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_button_81_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r86); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r85.considerOpenings[i_r17] = !ctx_r85.considerOpenings[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0423\u0447\u0435\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_ng_template_82_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r88.clearApertures(i_r17); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r88.considerOpenings[i_r17] = !ctx_r88.considerOpenings[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043F\u0440\u043E\u0435\u043C\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u0442\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C \u0432\u044B\u0441\u043E\u0442\u0430 \u044D\u0442\u0430\u0436\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0448\u0438\u0440\u0438\u043D\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u0435\u043D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 100)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_small_3_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_small_4_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"] == null ? null : ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"].errors == null ? null : ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"].errors["mismatchHeight"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"] == null ? null : ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"].errors == null ? null : ctx_r95.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"].errors["mismatchWidth"]);
} }
function HouseframeCalcComponent_div_43_div_7_div_86_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 89)(3, "div", 41)(4, "div", 50)(5, "select", 90)(6, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \u0422\u0438\u043F \u043F\u0440\u043E\u0435\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u041E\u043A\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0414\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u0414\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_div_86_div_3_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r102); const j_r93 = restoredCtx.index; const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r100.deleteApertures(i_r17, j_r93)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_16_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 96)(19, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, HouseframeCalcComponent_div_43_div_7_div_86_div_3_div_21_Template, 5, 2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r93 = ctx.index;
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", j_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r91.apertures(i_r17).length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["type"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["type"].invalid) && (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["type"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["type"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].invalid) && (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].touched) || (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"].invalid) && (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["height"].touched) || (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"].invalid) && (ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"] == null ? null : ctx_r91.formFrame.controls["floorNumber"].controls[i_r17].controls["apertures"].controls[j_r93].controls["aperture"].controls["weight"].touched));
} }
function HouseframeCalcComponent_div_43_div_7_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 84)(1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_div_86_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r106); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r104.addApertures(i_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043C\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_86_div_3_Template, 22, 4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r49.apertures(i_r17).controls);
} }
function HouseframeCalcComponent_div_43_div_7_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r108.considerOverlaps[i_r17] = !ctx_r108.considerOverlaps[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0423\u0447\u0435\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_ng_template_89_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r113); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r111.clearOverlaps(i_r17); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r111.considerOverlaps[i_r17] = !ctx_r111.considerOverlaps[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_5_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r127);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 107)(1, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_93_select_5_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r114.getThicknessArray(ctx_r114.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].value));
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_6_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thickVal_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", thickVal_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](thickVal_r130);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 107)(1, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_93_select_6_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r115.getThicknessArray("all"));
} }
function HouseframeCalcComponent_div_43_div_7_div_93_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u043B\u0449\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const OSB_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", OSB_r131.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](OSB_r131.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041E\u0421\u0411");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const steamWater_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", steamWater_r132.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](steamWater_r132.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u0433\u0438\u0434\u0440\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const windscreen_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", windscreen_r133.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](windscreen_r133.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0435\u0442\u0440\u043E\u0437\u0430\u0449\u0438\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_35_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insulation_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", insulation_r135.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](insulation_r135.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 109)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_93_select_35_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r123.getInsulation(ctx_r123.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].value));
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_36_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insulation_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", insulation_r138.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](insulation_r138.name);
} }
function HouseframeCalcComponent_div_43_div_7_div_93_select_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 109)(1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HouseframeCalcComponent_div_43_div_7_div_93_select_36_option_3_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r124.getInsulation("all"));
} }
function HouseframeCalcComponent_div_43_div_7_div_93_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0442\u0435\u043F\u043B\u0438\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function HouseframeCalcComponent_div_43_div_7_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 71)(1, "div", 41)(2, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HouseframeCalcComponent_div_43_div_7_div_93_select_5_Template, 4, 1, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HouseframeCalcComponent_div_43_div_7_div_93_select_6_Template, 4, 1, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HouseframeCalcComponent_div_43_div_7_div_93_div_7_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 41)(9, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u041E\u0421\u0411 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "select", 103)(12, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, HouseframeCalcComponent_div_43_div_7_div_93_option_14_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, HouseframeCalcComponent_div_43_div_7_div_93_div_15_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 41)(17, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u041F\u0430\u0440\u043E\u0433\u0438\u0434\u0440\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "select", 104)(20, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, HouseframeCalcComponent_div_43_div_7_div_93_option_22_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, HouseframeCalcComponent_div_43_div_7_div_93_div_23_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 41)(25, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\u0412\u0435\u0442\u0440\u043E\u0437\u0430\u0449\u0438\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "select", 105)(28, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, HouseframeCalcComponent_div_43_div_7_div_93_option_30_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, HouseframeCalcComponent_div_43_div_7_div_93_div_31_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 41)(33, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\u0423\u0442\u0435\u043F\u043B\u0438\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, HouseframeCalcComponent_div_43_div_7_div_93_select_35_Template, 4, 1, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, HouseframeCalcComponent_div_43_div_7_div_93_select_36_Template, 4, 1, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, HouseframeCalcComponent_div_43_div_7_div_93_div_37_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].valid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].valid) || !(ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].invalid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r53.getOSB());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["osbthickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["osbthickness"].invalid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["osbthickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["osbthickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r53.getSteamWaterproofing());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingThickness"].invalid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r53.getWindscreen());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenProtectionThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenProtectionThickness"].invalid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenProtectionThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenProtectionThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].valid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].valid) || !(ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["overlapThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].invalid) && (ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"] == null ? null : ctx_r53.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationThickness"].touched));
} }
const _c1 = function (a0, a1) { return { consider: a0, "not-consider": a1 }; };
function HouseframeCalcComponent_div_43_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div", 41)(5, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0412\u044B\u0441\u043E\u0442\u0430 \u044D\u0442\u0430\u0436\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HouseframeCalcComponent_div_43_div_7_div_8_Template, 3, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 41)(10, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, HouseframeCalcComponent_div_43_div_7_div_13_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 41)(15, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, HouseframeCalcComponent_div_43_div_7_div_18_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 41)(20, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, HouseframeCalcComponent_div_43_div_7_select_23_Template, 4, 1, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, HouseframeCalcComponent_div_43_div_7_select_24_Template, 4, 1, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, HouseframeCalcComponent_div_43_div_7_div_25_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 41)(27, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\u0414\u043B\u0438\u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, HouseframeCalcComponent_div_43_div_7_div_30_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 41)(32, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, HouseframeCalcComponent_div_43_div_7_select_35_Template, 4, 1, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, HouseframeCalcComponent_div_43_div_7_select_36_Template, 4, 1, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, HouseframeCalcComponent_div_43_div_7_div_37_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 55)(39, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\u041E\u0431\u0448\u0438\u0432\u043A\u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 41)(42, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "\u041E\u0421\u0411 \u0441\u043D\u0430\u0440\u0443\u0436\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "select", 57)(45, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, HouseframeCalcComponent_div_43_div_7_option_47_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, HouseframeCalcComponent_div_43_div_7_div_48_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 41)(50, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\u041F\u0430\u0440\u043E\u0433\u0438\u0434\u0440\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "select", 60)(53, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, HouseframeCalcComponent_div_43_div_7_option_55_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, HouseframeCalcComponent_div_43_div_7_div_56_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 41)(58, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\u0412\u0435\u0442\u0440\u043E\u0437\u0430\u0449\u0438\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "select", 61)(61, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, HouseframeCalcComponent_div_43_div_7_option_63_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, HouseframeCalcComponent_div_43_div_7_div_64_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 41)(66, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "\u0423\u0442\u0435\u043F\u043B\u0438\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, HouseframeCalcComponent_div_43_div_7_select_68_Template, 4, 1, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, HouseframeCalcComponent_div_43_div_7_select_69_Template, 4, 1, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, HouseframeCalcComponent_div_43_div_7_div_70_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 63)(72, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, HouseframeCalcComponent_div_43_div_7_button_73_Template, 2, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, HouseframeCalcComponent_div_43_div_7_ng_template_74_Template, 2, 0, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "h1", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "\u0440\u0430\u0441\u0447\u0435\u0442 \u043E\u0431\u0448\u0438\u0432\u043A\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0441\u0442\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, HouseframeCalcComponent_div_43_div_7_div_78_Template, 7, 4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, HouseframeCalcComponent_div_43_div_7_div_79_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, HouseframeCalcComponent_div_43_div_7_button_81_Template, 2, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, HouseframeCalcComponent_div_43_div_7_ng_template_82_Template, 2, 0, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "h1", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "\u0434\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, HouseframeCalcComponent_div_43_div_7_div_86_Template, 4, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, HouseframeCalcComponent_div_43_div_7_button_88_Template, 2, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, HouseframeCalcComponent_div_43_div_7_ng_template_89_Template, 2, 0, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "h1", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "\u0440\u0430\u0441\u0447\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, HouseframeCalcComponent_div_43_div_7_div_93_Template, 38, 12, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_div_7_Template_button_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r142); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); ctx_r140.deleteFloor(i_r17); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r140.decreaseVal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0430\u0436");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](75);
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](83);
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](90);
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["floorHeight"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["outerWallPerimeter"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["outerWallPerimeter"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["outerWallPerimeter"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["outerWallPerimeter"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["baseArea"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["baseArea"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["baseArea"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["baseArea"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].valid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].valid) || !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallLength"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallLength"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallLength"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallLength"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].valid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].valid) || !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallThickness"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["internalWallThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.getOSB());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbexternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbexternalWall"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbexternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbexternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.getSteamWaterproofing());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingExternalWall"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["steamWaterproofingExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.getWindscreen());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenExternalWall"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["windscreenExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].valid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].valid) || !(ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["externalWallThickness"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["insulationExternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r21.considerInnerWallsCalc[i_r17])("ngIfElse", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](33, _c1, ctx_r21.considerInnerWallsCalc[i_r17] === true, ctx_r21.considerInnerWallsCalc[i_r17] === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r21.considerInnerWallsCalc[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbinternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbinternalWall"].invalid) && (ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbinternalWall"] == null ? null : ctx_r21.formFrame.controls["floorNumber"].controls[i_r17].controls["osbinternalWall"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r21.considerOpenings[i_r17])("ngIfElse", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](36, _c1, ctx_r21.considerOpenings[i_r17] === true, ctx_r21.considerOpenings[i_r17] === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r21.considerOpenings[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r21.considerOverlaps[i_r17])("ngIfElse", _r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](39, _c1, ctx_r21.considerOverlaps[i_r17] === true, ctx_r21.considerOverlaps[i_r17] === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r21.considerOverlaps[i_r17]);
} }
function HouseframeCalcComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_div_43_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r145); const i_r17 = restoredCtx.index; const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]((ctx_r144.hidden[i_r17] = !ctx_r144.hidden[i_r17])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HouseframeCalcComponent_div_43_small_4_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HouseframeCalcComponent_div_43_ng_template_5_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HouseframeCalcComponent_div_43_div_7_Template, 96, 42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u042D\u0442\u0430\u0436 ", i_r17 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.hidden[i_r17])("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.hidden[i_r17]);
} }
const _c2 = function (a1) { return ["/clientspage", a1, "construction"]; };
const _c3 = function (a1) { return ["/clientspage", a1]; };
const _c4 = function (a0) { return { "btn-calculator": a0 }; };
class HouseframeCalcComponent {
    constructor(route, router, fb, materials, resultsService, calculationService, authService, cookieService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.materials = materials;
        this.resultsService = resultsService;
        this.calculationService = calculationService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.calcId = this.calculationService.getCurrentId();
        this.hidden = [];
        this.considerInnerWallsCalc = [];
        this.considerOpenings = [];
        this.considerOverlaps = [];
        this.material = [];
        this.thicknessArray = [0.1, 0.15, 0.2, 0.25];
        this.calculatorToggle = false;
    }
    ngOnInit() {
        this.client = new _entity_Client__WEBPACK_IMPORTED_MODULE_0__.Client();
        this.client = JSON.parse(this.cookieService.get('client'));
        this.calcNumber = this.cookieService.get('calcNumber');
        this.route.params.subscribe({
            next: (params) => {
                this.clientId = +params['id'];
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
                console.log('error: ', err);
            }
        });
        if (JSON.parse(this.cookieService.get('editFlag'))) {
            // console.log(this.cookieService.get('calcNumber'))
            this.resultsService.clearResults();
            this.resultsService.getResults(this.cookieService.get('calcNumber')).subscribe({
                next: (msg) => {
                    for (let i = 0; i < JSON.parse(String(msg.body))[0].frame.numberOfFloors; i++) {
                        this.resultsService.setResults(JSON.parse(String(msg.body)).filter((res) => res.frame.floorNumber == i + 1));
                    }
                    let floorNumber = [];
                    let id = [];
                    this.editForm = this.resultsService.getResultsArray();
                    console.log(this.editForm);
                    for (let i = 0; i < this.editForm.length; i++) {
                        console.log(JSON.stringify(this.editForm[i][i].frame));
                        id.push(this.editForm[i][i].frame.id);
                        floorNumber.push({
                            floorHeight: this.editForm[i][i].frame.floorHeight,
                            outerWallPerimeter: this.editForm[i][i].frame.outerWallPerimeter,
                            baseArea: this.editForm[i][i].frame.baseArea,
                            externalWallThickness: this.editForm[i][i].frame.externalWallThickness,
                            internalWallLength: this.editForm[i][i].frame.internalWallLength,
                            internalWallThickness: this.editForm[i][i].frame.internalWallThickness,
                            osbexternalWall: this.editForm[i][i].frame.osbexternalWall,
                            steamWaterproofingExternalWall: this.editForm[i][i].frame.steamWaterproofingExternalWall,
                            windscreenExternalWall: this.editForm[i][i].frame.windscreenExternalWall,
                            insulationExternalWall: this.editForm[i][i].frame.insulationExternalWall,
                            osbinternalWall: this.editForm[i][i].frame.osbinternalWall,
                            apertures: this.editForm[i][i].frame.apertures,
                            overlapThickness: this.editForm[i][i].frame.overlapThickness,
                            osbthickness: this.editForm[i][i].frame.osbthickness,
                            steamWaterproofingThickness: this.editForm[i][i].frame.steamWaterproofingThickness,
                            windscreenProtectionThickness: this.editForm[i][i].frame.windscreenProtectionThickness,
                            insulationThickness: this.editForm[i][i].frame.insulationThickness
                        });
                    }
                    let finalEditForm = {
                        ...{
                            id: id,
                            numberOfFloors: this.editForm[0][0].frame.numberOfFloors,
                            floorNumber: floorNumber
                        }
                    };
                    console.log('finalEdit', finalEditForm);
                    this.resultsService.setEditForm(finalEditForm);
                },
                error: (err) => {
                    console.log('error1', err);
                    if (err.status == 403) {
                        this.authService.refreshToken();
                    }
                },
                complete: () => {
                }
            });
        }
        else {
            this.formFrame = this.fb.group({
                id: [null],
                numberOfFloors: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(20)]],
                floorNumber: this.fb.array([
                    this.fb.group({
                        floorHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(3)]],
                        outerWallPerimeter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        baseArea: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        externalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        internalWallLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        internalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        osbexternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        steamWaterproofingExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        windscreenExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        insulationExternalWall: [''],
                        osbinternalWall: [''],
                        apertures: this.fb.array([
                            this.fb.group({
                                id: this.fb.group({
                                    frameId: [null],
                                    apertureId: [null],
                                }),
                                amount: [''],
                                aperture: this.fb.group({
                                    id: [null],
                                    type: [''],
                                    height: [null],
                                    weight: [null]
                                }, { validator: this.heightWeight('height', 'weight') })
                            })
                        ]),
                        overlapThickness: [0],
                        osbthickness: [''],
                        steamWaterproofingThickness: [''],
                        windscreenProtectionThickness: [''],
                        insulationThickness: ['']
                    }, { validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                            this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                        ] })
                ])
            }, { validators: this.setNumOfFlrs('numberOfFloors') });
        }
        this.hidden.length = this.numberOfFloors.value;
        this.considerInnerWallsCalc.length = this.numberOfFloors.value;
        this.considerOpenings.length = this.numberOfFloors.value;
        this.considerOverlaps.length = this.numberOfFloors.value;
        this.hidden.fill(false);
        this.considerInnerWallsCalc.fill(false);
        this.considerOpenings.fill(false);
        this.considerOverlaps.fill(false);
        this.materials.getMaterials().subscribe({
            next: (msg) => {
                // console.log(JSON.parse(String(msg.body)))
                this.materials.setMaterialArray(JSON.parse(String(msg.body)));
            },
            error: (err) => {
                console.log('ERROR', err);
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
            },
            complete: () => {
            }
        });
    }
    ngAfterContentInit() {
        if (_app_component__WEBPACK_IMPORTED_MODULE_1__.browserRefresh)
            this.router.navigate(['/clientspage', this.clientId]);
        if (JSON.parse(this.cookieService.get('editFlag'))) {
            console.log('getFromRes', this.resultsService.getEditForm().floorNumber[0].osbexternalWall);
            this.formFrame = this.fb.group({
                id: [this.resultsService.getEditForm().id[0]],
                numberOfFloors: [this.editForm[0][0].frame.numberOfFloors, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(20)]],
                floorNumber: this.fb.array([
                    this.fb.group({
                        floorHeight: [this.resultsService.getEditForm().floorNumber[0].floorHeight, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(3)]],
                        outerWallPerimeter: [this.resultsService.getEditForm().floorNumber[0].outerWallPerimeter, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        baseArea: [this.resultsService.getEditForm().floorNumber[0].baseArea, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        externalWallThickness: [this.resultsService.getEditForm().floorNumber[0].externalWallThickness, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        internalWallLength: [this.resultsService.getEditForm().floorNumber[0].internalWallLength, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        internalWallThickness: [this.resultsService.getEditForm().floorNumber[0].internalWallThickness, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        osbexternalWall: [this.resultsService.getEditForm().floorNumber[0].osbexternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        steamWaterproofingExternalWall: [this.resultsService.getEditForm().floorNumber[0].steamWaterproofingExternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        windscreenExternalWall: [this.resultsService.getEditForm().floorNumber[0].windscreenExternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                        insulationExternalWall: [this.resultsService.getEditForm().floorNumber[0].insulationExternalWall],
                        osbinternalWall: [this.resultsService.getEditForm().floorNumber[0].osbinternalWall],
                        apertures: this.fb.array([
                            this.fb.group({
                                id: this.fb.group({
                                    frameId: [this.resultsService.getEditForm().floorNumber[0].apertures[0].id.frameId],
                                    apertureId: [this.resultsService.getEditForm().floorNumber[0].apertures[0].id.apertureId],
                                }),
                                amount: [this.resultsService.getEditForm().floorNumber[0].apertures[0].amount],
                                aperture: this.fb.group({
                                    id: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.id],
                                    type: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.type],
                                    height: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height],
                                    weight: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.weight]
                                }, { validator: this.heightWeight('height', 'weight') })
                            })
                        ]),
                        overlapThickness: [this.resultsService.getEditForm().floorNumber[0].overlapThickness],
                        osbthickness: [this.resultsService.getEditForm().floorNumber[0].osbthickness],
                        steamWaterproofingThickness: [this.resultsService.getEditForm().floorNumber[0].steamWaterproofingThickness],
                        windscreenProtectionThickness: [this.resultsService.getEditForm().floorNumber[0].windscreenProtectionThickness],
                        insulationThickness: [this.resultsService.getEditForm().floorNumber[0].insulationThickness]
                    }, {
                        validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                            this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                        ]
                    })
                ])
            }, { validators: this.setNumOfFlrs('numberOfFloors') });
            if (this.resultsService.getEditForm().floorNumber[0].apertures.length > 1) {
                for (let i = 1; i < this.resultsService.getEditForm().floorNumber[0].apertures.length; i++) {
                    this.addApertures(0, this.resultsService.getEditForm().floorNumber[0].apertures[i]);
                }
            }
            if (this.resultsService.getEditForm().floorNumber[0].osbinternalWall)
                this.considerInnerWallsCalc[0] = true;
            if (this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height > 0)
                this.considerOpenings[0] = true;
            if (this.resultsService.getEditForm().floorNumber[0].overlapThickness)
                this.considerOverlaps[0] = true;
            if (this.resultsService.getEditForm().floorNumber.length > 1)
                this.addFloor(this.resultsService.getEditForm().floorNumber);
        }
    }
    heightWeight(heightV, weightV) {
        return (group) => {
            this.heightV = group.controls[heightV];
            this.weightV = group.controls[weightV];
        };
    }
    setNumOfFlrs(num) {
        return (group) => {
            this.numOfFl = group.controls[num].value;
        };
    }
    setEditForm(results) {
        this.editForm = results;
    }
    getEditForm() {
        return this.editForm;
    }
    matchValidator(floorHeight, internalWallLength, heightWidth) {
        return (group) => {
            let floorHeightInput = group.controls[floorHeight], internalWallLengthInput = group.controls[internalWallLength], heightWidthInput = group.controls[heightWidth];
            if (Number(this.heightV.value) > Number(floorHeightInput.value)) {
                return this.heightV.setErrors({ mismatchHeight: true });
            }
            else {
                return this.heightV.setErrors(null);
            }
        };
    }
    matchValidator2(floorHeight, internalWallLength, heightWidth) {
        return (group) => {
            let floorHeightInput = group.controls[floorHeight], internalWallLengthInput = group.controls[internalWallLength], heightWidthInput = group.controls[heightWidth];
            if (Number(this.weightV.value) > Number(internalWallLengthInput.value)) {
                return this.weightV.setErrors({ mismatchWidth: true });
            }
            else {
                return this.weightV.setErrors(null);
            }
        };
    }
    get numberOfFloors() {
        return this.formFrame.controls["numberOfFloors"];
    }
    get floorNumber() {
        return this.formFrame.controls["floorNumber"];
    }
    getTel() {
        return String(this.client.telephoneNumber);
    }
    getClient() {
        return this.client;
    }
    apertures(index) {
        return this.formFrame.controls["floorNumber"].controls[index].controls['apertures'];
    }
    getMaterial(index) {
        return this.materials.getMaterialArray()[index];
    }
    getOSB() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'OSB');
    }
    // formFrame.controls['floorNumber'].controls[i].controls['externalWallThickness'].value
    getInsulation(thickness) {
        if (thickness == 'all')
            return this.materials.getMaterialArray().filter(type => type.materialType === 'Утеплитель');
        return this.materials.getMaterialArray()
            .filter(type => type.materialType === 'Утеплитель')
            .filter(thisThickness => thisThickness.materialCharacteristic.thickness == thickness);
    }
    getWindscreen() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'Ветрозащита');
    }
    getSteamWaterproofing() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'Пароизоляция');
    }
    getThicknessArray(thickness) {
        if (thickness == 'all')
            return this.thicknessArray;
        if (Number(thickness))
            return this.thicknessArray.filter(thknss => thknss == thickness);
        let thkn = '0.';
        if (String(thickness)) {
            for (let i = 0; i < thickness.length; i++) {
                if (Number(thickness[i]))
                    thkn += thickness[i];
            }
            thkn = Number(thkn);
        }
        return this.thicknessArray.filter(thknss => thknss == thkn);
    }
    addFloor(floorInfo) {
        if (!floorInfo) {
            let floorForm = this.fb.group({
                floorHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(3)]],
                outerWallPerimeter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                baseArea: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                externalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                internalWallLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                internalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                osbexternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                steamWaterproofingExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                windscreenExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                insulationExternalWall: [''],
                osbinternalWall: [''],
                apertures: this.fb.array([
                    this.fb.group({
                        id: this.fb.group({
                            frameId: [null],
                            apertureId: [null],
                        }),
                        amount: [''],
                        aperture: this.fb.group({
                            id: [null],
                            type: [''],
                            height: [null],
                            weight: [null]
                        }, { validator: this.heightWeight('height', 'weight') })
                    })
                ]),
                overlapThickness: [0],
                osbthickness: [''],
                steamWaterproofingThickness: [''],
                windscreenProtectionThickness: [''],
                insulationThickness: ['']
            }, { validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                    this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                ] });
            if (this.numberOfFloors.valid) {
                if (this.numberOfFloors.value > this.floorNumber.length) {
                    this.hidden.length = this.numberOfFloors.value;
                    this.considerInnerWallsCalc.length = this.numberOfFloors.value;
                    this.considerOpenings.length = this.numberOfFloors.value;
                    this.considerOverlaps.length = this.numberOfFloors.value;
                    for (let i = this.floorNumber.length; i < this.numberOfFloors.value; i++) {
                        this.floorNumber.push(floorForm);
                        this.hidden[i] = false;
                        this.considerInnerWallsCalc[i] = false;
                        this.considerOpenings[i] = false;
                        this.considerOverlaps[i] = false;
                    }
                }
                else {
                    this.hidden.length = this.numberOfFloors.value;
                    this.considerInnerWallsCalc.length = this.numberOfFloors.value;
                    this.considerOpenings.length = this.numberOfFloors.value;
                    this.considerOverlaps.length = this.numberOfFloors.value;
                    for (let i = this.floorNumber.length; i > this.numberOfFloors.value; i--) {
                        this.deleteFloor(i - 1);
                    }
                }
            }
        }
        if (floorInfo) {
            this.hidden.length = this.numberOfFloors.value;
            this.considerInnerWallsCalc.length = this.numberOfFloors.value;
            this.considerOpenings.length = this.numberOfFloors.value;
            this.considerOverlaps.length = this.numberOfFloors.value;
            for (let i = 1; i < floorInfo.length; i++) {
                let floorForm = this.fb.group({
                    floorHeight: [floorInfo[i].floorHeight, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(3)]],
                    outerWallPerimeter: [floorInfo[i].outerWallPerimeter, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    baseArea: [floorInfo[i].baseArea, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    externalWallThickness: [floorInfo[i].externalWallThickness, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    internalWallLength: [floorInfo[i].internalWallLength, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    internalWallThickness: [floorInfo[i].internalWallThickness, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    osbexternalWall: [floorInfo[i].osbexternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    steamWaterproofingExternalWall: [floorInfo[i].steamWaterproofingExternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    windscreenExternalWall: [floorInfo[i].windscreenExternalWall, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    insulationExternalWall: [floorInfo[i].insulationExternalWall],
                    osbinternalWall: [floorInfo[i].osbinternalWall],
                    apertures: this.fb.array([
                        this.fb.group({
                            id: this.fb.group({
                                frameId: [floorInfo[i].apertures[0].id.frameId],
                                apertureId: [floorInfo[i].apertures[0].id.apertureId],
                            }),
                            amount: [floorInfo[i].apertures[0].amount],
                            aperture: this.fb.group({
                                id: [floorInfo[i].apertures[0].aperture.id],
                                type: [floorInfo[i].apertures[0].aperture.type],
                                height: [floorInfo[i].apertures[0].aperture.height],
                                weight: [floorInfo[i].apertures[0].aperture.weight]
                            }, { validator: this.heightWeight('height', 'weight') })
                        })
                    ]),
                    overlapThickness: [floorInfo[i].overlapThickness],
                    osbthickness: [floorInfo[i].osbthickness],
                    steamWaterproofingThickness: [floorInfo[i].steamWaterproofingThickness],
                    windscreenProtectionThickness: [floorInfo[i].windscreenProtectionThickness],
                    insulationThickness: [floorInfo[i].insulationThickness]
                }, { validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                        this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                    ] });
                this.floorNumber.push(floorForm);
                if (floorInfo[i].apertures.length > 1) {
                    for (let k = 1; k < floorInfo[i].apertures.length; k++) {
                        this.addApertures(i, floorInfo[i].apertures[k]);
                    }
                }
                this.hidden[i] = false;
                if (this.resultsService.getEditForm().floorNumber[i].osbinternalWall)
                    this.considerInnerWallsCalc[i] = true;
                if (this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height > 0)
                    this.considerOpenings[i] = true;
                if (this.resultsService.getEditForm().floorNumber[i].overlapThickness ||
                    this.resultsService.getEditForm().floorNumber[i].osbthickness ||
                    this.resultsService.getEditForm().floorNumber[i].steamWaterproofingThickness ||
                    this.resultsService.getEditForm().floorNumber[i].windscreenProtectionThickness ||
                    this.resultsService.getEditForm().floorNumber[i].insulationThickness)
                    this.considerOverlaps[i] = true;
            }
        }
    }
    deleteFloor(floorIndex) {
        for (let i = this.apertures(floorIndex).length; i > 1; i--) {
            this.deleteApertures(floorIndex, i - 1);
        }
        this.floorNumber.removeAt(floorIndex);
        this.hidden.length = this.numberOfFloors.value;
        this.considerInnerWallsCalc.length = this.numberOfFloors.value;
        this.considerOpenings.length = this.numberOfFloors.value;
        this.considerOverlaps.length = this.numberOfFloors.value;
    }
    addApertures(index, apertureExt) {
        if (!apertureExt) {
            let apertures = this.fb.group({
                id: this.fb.group({
                    frameId: [null],
                    apertureId: [null],
                }),
                amount: [''],
                aperture: this.fb.group({
                    id: [null],
                    type: [''],
                    height: [null],
                    weight: [null]
                }, { validator: this.heightWeight('height', 'weight') })
            });
            this.apertures(index).push(apertures);
        }
        if (apertureExt) {
            let apertures = this.fb.group({
                id: this.fb.group({
                    frameId: [apertureExt.id.frameId],
                    apertureId: [apertureExt.id.apertureId],
                }),
                amount: [apertureExt.amount],
                aperture: this.fb.group({
                    id: [apertureExt.aperture.id],
                    type: [apertureExt.aperture.type],
                    height: [apertureExt.aperture.height],
                    weight: [apertureExt.aperture.weight]
                }, { validator: this.heightWeight('height', 'weight') })
            });
            this.apertures(index).push(apertures);
        }
    }
    deleteApertures(index, indexAperture) {
        this.apertures(index).removeAt(indexAperture);
    }
    clearCalculation() {
        for (let i = this.apertures(0).length; i > 1; i--) {
            this.deleteApertures(0, i - 1);
        }
        for (let i = this.floorNumber.length; i > 1; i--) {
            this.deleteFloor(i - 1);
        }
        this.hidden.length = this.numberOfFloors.value;
        this.considerInnerWallsCalc.length = this.numberOfFloors.value;
        this.considerOpenings.length = this.numberOfFloors.value;
        this.considerOverlaps.length = this.numberOfFloors.value;
        this.hidden.fill(false);
        this.considerInnerWallsCalc.fill(false);
        this.considerOpenings.fill(false);
        this.considerOverlaps.fill(false);
        this.formFrame.reset();
        this.formFrame.controls['numberOfFloors'].value = 1;
    }
    clearOSBInternal(index) {
        this.formFrame.controls["floorNumber"].controls[index].controls['osbinternalWall'].reset('');
    }
    clearApertures(index) {
        for (let i = this.apertures(index).length; i > 1; i--) {
            this.deleteApertures(index, i - 1);
        }
        this.formFrame.controls["floorNumber"].controls[index].controls['apertures'].reset('');
    }
    clearOverlaps(index) {
        this.formFrame.controls["floorNumber"].controls[index].controls['overlapThickness'].reset('');
        this.formFrame.controls["floorNumber"].controls[index].controls['osbthickness'].reset('');
        this.formFrame.controls["floorNumber"].controls[index].controls['steamWaterproofingThickness'].reset('');
        this.formFrame.controls["floorNumber"].controls[index].controls['windscreenProtectionThickness'].reset('');
        this.formFrame.controls["floorNumber"].controls[index].controls['insulationThickness'].reset('');
    }
    hide(i) {
        this.hidden[i] = true;
    }
    decAmountFloor() {
        if (this.formFrame.controls['numberOfFloors'].value > 1) {
            this.hidden.length = this.numberOfFloors.value;
            this.considerInnerWallsCalc.length = this.numberOfFloors.value;
            this.considerOpenings.length = this.numberOfFloors.value;
            this.considerOverlaps.length = this.numberOfFloors.value;
            this.deleteFloor(--this.formFrame.controls['numberOfFloors'].value);
        }
    }
    incAmountFloor() {
        const floorForm = this.fb.group({
            floorHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(3)]],
            outerWallPerimeter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            baseArea: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            externalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            internalWallLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            internalWallThickness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            osbexternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            steamWaterproofingExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            windscreenExternalWall: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            insulationExternalWall: [''],
            osbinternalWall: [''],
            apertures: this.fb.array([
                this.fb.group({
                    id: this.fb.group({
                        frameId: [null],
                        apertureId: [null],
                    }),
                    amount: [''],
                    aperture: this.fb.group({
                        id: [null],
                        type: [''],
                        height: [null],
                        weight: [null]
                    }, { validator: this.heightWeight('height', 'weight') })
                })
            ]),
            overlapThickness: [0],
            osbthickness: [''],
            steamWaterproofingThickness: [''],
            windscreenProtectionThickness: [''],
            insulationThickness: ['']
        }, { validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
            ] });
        this.formFrame.controls['numberOfFloors'].value++;
        this.hidden.length = this.numberOfFloors.value;
        this.considerInnerWallsCalc.length = this.numberOfFloors.value;
        this.considerOpenings.length = this.numberOfFloors.value;
        this.considerOverlaps.length = this.numberOfFloors.value;
        this.hidden[this.numberOfFloors.value - 1] = false;
        this.considerInnerWallsCalc[this.numberOfFloors.value - 1] = false;
        this.considerOpenings[this.numberOfFloors.value - 1] = false;
        this.considerOverlaps[this.numberOfFloors.value - 1] = false;
        this.floorNumber.push(floorForm);
    }
    decreaseVal() {
        this.formFrame.controls['numberOfFloors'].value--;
    }
    calculate(oper) {
        switch (oper) {
            case '*':
                this.c = this.a * this.b;
                break;
            case '/':
                this.c = this.a / this.b;
                break;
            case '+':
                this.c = +this.a + +this.b;
                break;
            case '-':
                this.c = this.a - this.b;
                break;
        }
    }
    setEditFlag() {
        this.cookieService.set('editFlag', JSON.stringify(false));
    }
    submit() {
        if (this.formFrame.valid) {
            if (JSON.parse(this.cookieService.get('editFlag'))) {
                const editedData = { ...this.formFrame.value };
                let jsonEditedComposition = [];
                for (let i = 0; i < editedData.floorNumber.length; i++) {
                    jsonEditedComposition[i] = {
                        ...{
                            id: editedData.id,
                            numberOfFloors: editedData.numberOfFloors,
                            floorNumber: i + 1
                        },
                        ...editedData.floorNumber[i]
                    };
                    // console.log(JSON.stringify(jsonComposition[i]))
                    this.resultsService.updateFrame(jsonEditedComposition[i], this.calcNumber).subscribe({
                        next: (msg) => {
                            console.log(msg);
                        },
                        error: (err) => {
                            console.log('error', err);
                        },
                        complete: () => { }
                    });
                }
                setTimeout(() => {
                    this.clearCalculation();
                    this.router.navigate(['/clientspage', this.clientId]);
                }, 300);
            }
            else {
                const newFrameData = { ...this.formFrame.value };
                let jsonComposition = [];
                for (let i = 0; i < newFrameData.floorNumber.length; i++) {
                    jsonComposition[i] = {
                        ...{
                            id: newFrameData.id,
                            numberOfFloors: newFrameData.numberOfFloors,
                            floorNumber: i + 1
                        },
                        ...newFrameData.floorNumber[i]
                    };
                    // console.log(JSON.stringify(jsonComposition[i]))
                    this.resultsService.addFrame(jsonComposition[i], this.calcNumber).subscribe({
                        next: (msg) => {
                            console.log('msgfromSerik', msg);
                        },
                        error: (err) => {
                            console.log('error', err);
                        },
                        complete: () => { }
                    });
                }
                setTimeout(() => {
                    this.clearCalculation();
                    this.router.navigate(['/clientspage', this.clientId]);
                }, 300);
            }
        }
    }
    showAF() {
        console.log(this.cookieService.get('calcNumber'));
    }
}
HouseframeCalcComponent.ɵfac = function HouseframeCalcComponent_Factory(t) { return new (t || HouseframeCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_materials_service__WEBPACK_IMPORTED_MODULE_2__.MaterialsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_results_service__WEBPACK_IMPORTED_MODULE_3__.ResultsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_calculation_service__WEBPACK_IMPORTED_MODULE_4__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService)); };
HouseframeCalcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HouseframeCalcComponent, selectors: [["app-houseframe-calc"]], decls: 46, vars: 27, consts: [[1, "wrapper"], [1, "component__container"], [1, "client__card-header"], ["type", "button", 1, "btn", 3, "routerLink", "click"], [1, "client-info"], [1, "calculator-container"], [1, "calculator-box"], [1, "btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "calculator", 4, "ngIf"], [1, "title-with-lines"], [1, "frame__form", 3, "formGroup", "ngSubmit"], [1, "form__inner-title", 2, "font-size", "20px"], [1, "frame__form-control"], [1, "with-validation"], [1, "with-clear-btn"], [1, "label-item__flex", 2, "justify-content", "flex-start", "gap", "10px", "margin-bottom", "0"], ["for", "fFloorsNumber", 1, "form__label", 2, "margin-right", "30px"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["type", "text", "id", "fFloorsNumber", "formControlName", "numberOfFloors", 1, "frame__input", 2, "width", "50px", 3, "value", "focusout"], ["type", "button", 1, "btn", 3, "click"], ["class", "validation", 4, "ngIf"], ["formArrayName", "floorNumber", 1, "flex-floors"], ["class", "floor-box", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-calculate", 3, "disabled"], [1, "calculator"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E", 1, "frame__input-calc", 3, "ngModel", "ngModelChange"], [1, "calculator-btns"], [1, "btn", 3, "click"], ["type", "text", "placeholder", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", 1, "frame__input-calc", 3, "ngModel", "ngModelChange"], [1, "validation"], [1, "floor-box"], [1, "form__inner-title"], ["type", "button", 1, "btn", 2, "margin-left", "30px", 3, "click"], [4, "ngIf", "ngIfElse"], ["show", ""], ["class", "floor-group", 3, "formGroupName", 4, "ngIf"], [1, "floor-group", 3, "formGroupName"], [1, "inner-floor-flex"], [1, "floor-left-side"], [1, "main-items"], [1, "label-item__flex"], ["for", "ffloor_height", 1, "form__label"], ["type", "text", "id", "ffloor_height", "formControlName", "floorHeight", 1, "frame__input"], ["class", "validation right-side-text", 4, "ngIf"], ["for", "fperimeter_of_external_walls", 1, "form__label"], ["type", "text", "id", "fperimeter_of_external_walls", "formControlName", "outerWallPerimeter", 1, "frame__input"], ["for", "fbaseArea", 1, "form__label"], ["type", "text", "id", "fbaseArea", "formControlName", "baseArea", 1, "frame__input"], [1, "form__label"], [1, "label-with-btn"], ["class", "select-options", "formControlName", "externalWallThickness", 4, "ngIf"], ["for", "finternalWallLength", 1, "form__label"], ["type", "text", "id", "finternalWallLength", "formControlName", "internalWallLength", 1, "frame__input"], ["class", "select-options", "formControlName", "internalWallThickness", 4, "ngIf"], [1, "outer-walls-plating"], [1, "form__floor-title"], ["formControlName", "osbexternalWall", 1, "select-options"], ["value", "", 1, "option"], ["class", "option", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "steamWaterproofingExternalWall", 1, "select-options"], ["formControlName", "windscreenExternalWall", 1, "select-options"], ["class", "select-options", "formControlName", "insulationExternalWall", 4, "ngIf"], [1, "floor-right-side"], ["class", "btn btn-consider", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["notCons", ""], [1, "form__label", 3, "ngClass"], ["class", "label-item__flex", "style", "margin-top: 15px; margin-bottom: 0", 4, "ngIf"], ["formArrayName", "apertures", 1, "main-items"], ["notCons2", ""], ["class", "apertures-container", 4, "ngIf"], [1, "overlaps-container"], ["notCons3", ""], [1, "form__label", 2, "margin-bottom", "15px", 3, "ngClass"], ["class", "overlaps-container", 4, "ngIf"], [1, "btn", 2, "margin-top", "5px", 3, "click"], [1, "validation", "right-side-text"], ["formControlName", "externalWallThickness", 1, "select-options"], [1, "option", 3, "value"], ["formControlName", "internalWallThickness", 1, "select-options"], ["formControlName", "insulationExternalWall", 1, "select-options"], ["type", "button", 1, "btn", "btn-consider", 3, "click"], [1, "label-item__flex", 2, "margin-top", "15px", "margin-bottom", "0"], ["formControlName", "osbinternalWall", 1, "select-options", 3, "ngClass"], [1, "apertures-container"], ["type", "button", 1, "btn", 2, "margin-top", "25px", 3, "click"], ["class", "openings-flex", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "openings-flex", 3, "formGroupName"], [1, "apertures-with-amount-flex"], ["formGroupName", "aperture", 1, "apertures-group"], ["formControlName", "type", 1, "select-options", 2, "margin-right", "20px", "width", "300px"], ["value", "\u041E\u043A\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B", 1, "option"], ["value", "\u0414\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0435", 1, "option"], ["value", "\u0414\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043C\u044B \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435", 1, "option"], ["type", "button", 1, "btn", 2, "margin-left", "15px", 3, "disabled", "click"], [1, "openings-inputs-flex"], ["type", "text", "placeholder", "\u0412\u044B\u0441\u043E\u0442\u0430", "formControlName", "height", 1, "frame__input"], ["type", "text", "placeholder", "\u0428\u0438\u0440\u0438\u043D\u0430", "formControlName", "weight", 1, "frame__input"], ["type", "text", "placeholder", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", "formControlName", "amount", 1, "frame__input"], ["class", "validation right-side-text overlap-validators-flex", 4, "ngIf"], [1, "validation", "right-side-text", "overlap-validators-flex"], ["class", "select-options", "formControlName", "overlapThickness", 4, "ngIf"], ["for", "osbthickness", 1, "form__label"], ["id", "osbthickness", "formControlName", "osbthickness", 1, "select-options"], ["formControlName", "steamWaterproofingThickness", 1, "select-options"], ["formControlName", "windscreenProtectionThickness", 1, "select-options"], ["class", "select-options", "formControlName", "insulationThickness", 4, "ngIf"], ["formControlName", "overlapThickness", 1, "select-options"], ["value", "0", 1, "option"], ["formControlName", "insulationThickness", 1, "select-options"]], template: function HouseframeCalcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_3_listener() { return ctx.setEditFlag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_5_listener() { return ctx.setEditFlag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "cellphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 5)(18, "div", 6)(19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_19_listener() { return ctx.calculatorToggle = !ctx.calculatorToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, HouseframeCalcComponent_small_20_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, HouseframeCalcComponent_small_21_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, HouseframeCalcComponent_div_22_Template, 13, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u041A\u0430\u0440\u043A\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function HouseframeCalcComponent_Template_form_ngSubmit_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "div", 15)(31, "div", 16)(32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u0442\u0430\u0436\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_34_listener() { return ctx.decAmountFloor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focusout", function HouseframeCalcComponent_Template_input_focusout_36_listener() { return ctx.addFloor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_37_listener() { return ctx.incAmountFloor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HouseframeCalcComponent_Template_button_click_39_listener() { return ctx.clearCalculation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, HouseframeCalcComponent_div_41_Template, 4, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, HouseframeCalcComponent_div_43_Template, 8, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_14_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c2, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c3, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ctx.getClient().surname, " ", ctx.getClient().name, " ", ctx.getClient().patronymic, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 19, ctx.getTel()));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getClient().address);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getClient().email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](25, _c4, ctx.calculatorToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.calculatorToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.calculatorToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.calculatorToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formFrame);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.numberOfFloors.value <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.numberOfFloors.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.numberOfFloors.value >= 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.formFrame.get("numberOfFloors")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.formFrame.get("numberOfFloors")) == null ? null : tmp_14_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.floorNumber.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.formFrame.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_6__.CellphonePipe], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.calculator-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.calculator-container[_ngcontent-%COMP%]   .calculator-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.calculator-container[_ngcontent-%COMP%]   .calculator-box[_ngcontent-%COMP%]   .btn-calculator[_ngcontent-%COMP%] {\n  border: 3px solid #222222;\n  box-shadow: 0 0 4px 1px #222222;\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.calculator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  border: 4px solid #222222;\n  padding: 15px;\n  box-shadow: inset 0 0 10px 1px #222222;\n  border-radius: 5px;\n  background-color: #43484b;\n}\n.calculator[_ngcontent-%COMP%]   .frame__input-calc[_ngcontent-%COMP%] {\n  width: 180px;\n  font-size: 18px;\n  color: #eeeeee;\n  padding: 10px;\n  border: 2px solid #222222;\n  border-radius: 5px;\n  background-color: #303030;\n}\n.calculator[_ngcontent-%COMP%]   .calculator-btns[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.calculator[_ngcontent-%COMP%]   .calculator-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px 1px #00a3ff;\n}\n.frame__input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.frame__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.frame__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fd6868;\n}\n.overlap-validators-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.select-options[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.select-options.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.select-options.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.consider[_ngcontent-%COMP%] {\n  color: #55c2ff;\n}\n.not-consider[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n.frame__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.frame__form-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.address-clearbtn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px 0;\n}\n.form__label[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.with-clear-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.label-item__flex[_ngcontent-%COMP%] {\n  width: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.label-item__flex[_ngcontent-%COMP%]   .frame__input[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: right;\n}\n.btn-add-floor[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.btn-consider[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.form__inner-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.form__floor-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 15px 0;\n}\n.inner-floor-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin: 10px 0;\n}\n.inner-floor-flex[_ngcontent-%COMP%]   .floor-left-side[_ngcontent-%COMP%] {\n  border: 2px solid #303030;\n  border-radius: 5px;\n  padding: 15px 10px 0 10px;\n  background-color: #3f3f3f;\n}\n.inner-floor-flex[_ngcontent-%COMP%]   .floor-right-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border: 2px solid #303030;\n  border-radius: 5px;\n  padding: 15px 10px 7px 10px;\n  background-color: #3f3f3f;\n}\n.flex-floors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px 30px;\n  justify-content: center;\n}\n.floor-box[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 25px;\n  border: 2px solid #2a2a2a;\n  background-color: #494949;\n  border-radius: 5px;\n}\n.apertures-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.openings-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.openings-flex[_ngcontent-%COMP%]   .openings-inputs-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.openings-flex[_ngcontent-%COMP%]   .openings-inputs-flex[_ngcontent-%COMP%]   .frame__input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-calculate[_ngcontent-%COMP%] {\n  width: 50%;\n  align-self: center;\n}"] });


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
                let role = 'USER';
                let roles = [];
                for (let i = 0; i < JSON.parse(String(msg.body)).user.groupOfUsers.length; i++) {
                    roles.push(JSON.parse(String(msg.body)).user.groupOfUsers[i].groupName);
                }
                this.authService.setAuthTokens(JSON.parse(String(msg.body)).access_token, JSON.parse(String(msg.body)).refresh_token);
                if (roles.includes('ROLE_ADMIN'))
                    role = 'ADMIN';
                else if (roles.includes('ROLE_MANAGER'))
                    role = 'MANAGER';
                this.authService.setCurrentManager(JSON.parse(String(msg.body)).user.id, JSON.parse(String(msg.body)).user.surname, JSON.parse(String(msg.body)).user.name, JSON.parse(String(msg.body)).user.patronymic, JSON.parse(String(msg.body)).user.login, role);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.loginpage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #393939;\n}\n.login__box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: 350px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  overflow: auto;\n  background-color: #303030;\n  border-radius: 10px;\n}\n.login__title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n}\n.login__input[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.login__btn[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 20px;\n}"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 5657);



class MainPageComponent {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        if (this.cookieService.check('isAuthenticated')) {
            this.router.navigate(['/clientspage']);
        }
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
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
    } }, styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: #eeeeee;\n  font-family: \"Raleway\", sans-serif;\n}\n.header__layers[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.main-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: calc((1vw + 1vh) * 5.5);\n  background-image: url('ground.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  bottom: calc((1vw + 1vh) * -2.6);\n}\n.layers[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  position: relative;\n}\n.layer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  will-change: transform;\n  z-index: 2;\n}\n.layers__base[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 1.1), 0);\n  z-index: 0;\n}\n.layers__back[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);\n  z-index: 0;\n}\n.layers__middle[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);\n}\n.layers__front[_ngcontent-%COMP%] {\n  transform: translate3d(0, calc(var(--scrollTop) / 5), 0);\n}\n.layer__header[_ngcontent-%COMP%] {\n  z-index: 1;\n  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);\n  will-change: transform;\n  text-transform: uppercase;\n  font-weight: 900;\n  text-shadow: 0 0 15px #a28908;\n}\n.layers__caption[_ngcontent-%COMP%] {\n  font-size: calc((1vw + 1vh) / 1.1);\n  letter-spacing: calc((1vw + 1vh) / 7);\n  margin-left: 200px;\n}\n.layers__title[_ngcontent-%COMP%] {\n  font-size: calc((1vw + 1vh) * 1.7);\n  letter-spacing: calc((1vw + 1vh) / 5);\n  margin-left: 200px;\n  margin-bottom: calc((1vw + 1vh) * 4);\n}\n.main-article[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  color: #eeeeee;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-article__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-shadow: 0 2px 5px #36b7ef;\n  margin-top: calc((1vw + 1vh) / 0.1);\n  padding: calc((1vw + 1vh) / 0.75);\n  transform: translate3d(0, calc(var(--scrollTop) / -7.5), 0);\n  border-radius: 10px;\n  background-color: rgba(48, 48, 48, 0.7);\n}\n.main-article__header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: calc((1vw + 1vh) * 1.8);\n  letter-spacing: calc((1vw + 1vh) / 7.5);\n  will-change: transform;\n}\n.main-article__paragraph[_ngcontent-%COMP%] {\n  width: calc((1vw + 1vh) * 25);\n  font-size: calc((1vw + 1vh) * 0.9);\n  margin-top: calc((1vw + 1vh) / 0.75);\n  margin-bottom: calc((1vw + 1vh) * 0.75);\n  will-change: transform;\n}\n.content-main[_ngcontent-%COMP%] {\n  will-change: transform;\n}\n.copyright[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: calc((1vw + 1vh) * 1.2);\n  margin-top: calc((1vw + 1vh) / 0.75);\n  letter-spacing: calc((1vw + 1vh) / 37.5);\n}"] });


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
        let numbers = value;
        return `+7-(${numbers[0]}${numbers[1]}${numbers[2]})-${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}-${numbers[8]}${numbers[9]}`;
    }
}
CellphonePipe.ɵfac = function CellphonePipe_Factory(t) { return new (t || CellphonePipe)(); };
CellphonePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cellphone", type: CellphonePipe, pure: true });


/***/ }),

/***/ 9506:
/*!****************************************!*\
  !*** ./src/app/pipes/roundNum.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundNumPipe": () => (/* binding */ RoundNumPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class RoundNumPipe {
    transform(value) {
        return value.toFixed(0);
    }
}
RoundNumPipe.ɵfac = function RoundNumPipe_Factory(t) { return new (t || RoundNumPipe)(); };
RoundNumPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "roundNum", type: RoundNumPipe, pure: true });


/***/ }),

/***/ 9916:
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsComponent": () => (/* binding */ ResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/results.service */ 9741);
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/calculation.service */ 6080);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/clients.service */ 9012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/cellphone.pipe */ 1976);
/* harmony import */ var _pipes_roundNum_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/roundNum.pipe */ 9506);










function ResultsComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0421\u0442\u0430\u0442\u0443\u0441: ", ctx_r0.getCalculations().status.statusName, "");
} }
function ResultsComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ResultsComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResultsComponent_div_32_div_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const status_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); ctx_r11.changeStatus(status_r10); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.statusToggle = !ctx_r11.statusToggle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const status_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](status_r10.statusName);
} }
function ResultsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ResultsComponent_div_32_div_1_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getStatuses());
} }
function ResultsComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ResultsComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/clientspage", a1, "construction", "houseframecalc"]; };
function ResultsComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResultsComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.setEditFlag()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r5.clientId));
} }
const _c1 = function (a1) { return ["/clientspage", a1, "construction"]; };
function ResultsComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, ctx_r6.clientId));
} }
function ResultsComponent_div_45_table_1_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 39)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const extWall_r21 = ctx.$implicit;
    const j_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r18.getElementsNames(j_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r21.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r21.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 5, extWall_r21.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 7, extWall_r21.totalCost));
} }
function ResultsComponent_div_45_table_1_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 39)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const extWall_r23 = ctx.$implicit;
    const j_r24 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.getElementsNames(j_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r23.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r23.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 5, extWall_r23.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 7, extWall_r23.totalCost));
} }
function ResultsComponent_div_45_table_1_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 39)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const extWall_r25 = ctx.$implicit;
    const j_r26 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r20.getElementsNames(j_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r25.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](extWall_r25.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 5, extWall_r25.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 7, extWall_r25.totalCost));
} }
function ResultsComponent_div_45_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 31)(1, "tr", 32)(2, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "tr", 32)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u0415\u0434.\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr", 34)(16, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0442\u0435\u043D\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "roundNum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ResultsComponent_div_45_table_1_tr_21_Template, 13, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "tr", 34)(23, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0441\u0442\u0435\u043D\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ResultsComponent_div_45_table_1_tr_28_Template, 13, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "tr", 34)(30, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\u041F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ResultsComponent_div_45_table_1_tr_35_Template, 13, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "tr", 38)(37, "td", 35)(38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 36)(41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0441\u0447\u0435\u0442\u0430 ", i_r17 + 1, " \u044D\u0442\u0430\u0436\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 8, ctx_r15.getExternalWallsTotalSum(i_r17)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.getExternalWalls(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 10, ctx_r15.getInternalWallsTotalSum(i_r17), "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.getInternalWalls(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](34, 13, ctx_r15.getOverlapsTotalSum(i_r17), "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.getOverlaps(i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](43, 16, ctx_r15.getTotalFloorSum(i_r17), "1.0-0"));
} }
function ResultsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ResultsComponent_div_45_table_1_Template, 44, 19, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.getResults());
} }
function ResultsComponent_div_46_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 31)(1, "tr", 32)(2, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "tr", 38)(5, "td", 35)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 36)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0441\u0447\u0435\u0442\u0430 ", i_r29 + 1, " \u044D\u0442\u0430\u0436\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 2, ctx_r27.getTotalFloorSum(i_r29), "1.0-0"));
} }
function ResultsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ResultsComponent_div_46_table_1_Template, 12, 5, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.getResults());
} }
const _c2 = function (a1) { return ["/clientspage", a1]; };
const _c3 = function (a0) { return { "btn-status": a0 }; };
class ResultsComponent {
    constructor(route, router, resultsService, calculationService, clientsService, authService, cookieService) {
        this.route = route;
        this.router = router;
        this.resultsService = resultsService;
        this.calculationService = calculationService;
        this.clientsService = clientsService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.results = [];
        this.statusToggle = false;
        this.toggleTables = true;
        this.emptyFlag = false;
    }
    ngOnInit() {
        this.resultsService.clearResults();
        this.client = JSON.parse(this.cookieService.get('client'));
        this.route.params.subscribe({
            next: (params) => {
                this.resultsId = +params['idRes'];
                this.resultsPNum = +params['resPNum'];
                this.clientId = +params['id'];
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
                console.log('error received:', err);
            },
            complete: () => {
            }
        });
        this.calculationService.getStatuses().subscribe({
            next: (msg) => {
                // console.log(msg.body)
                this.statuses = JSON.parse(String(msg.body));
            },
            error: (err) => {
                console.log('error', err);
            },
            complete: () => { }
        });
        this.resultsService.getResults(this.getCalculationsNumber()).subscribe({
            next: (msg) => {
                if (JSON.parse(String(msg.body)).length == 0) {
                    this.emptyFlag = true;
                }
                for (let i = 0; i < JSON.parse(String(msg.body))[0].frame.numberOfFloors; i++) {
                    this.resultsService.setResults(JSON.parse(String(msg.body)).filter((res) => res.frame.floorNumber == i + 1));
                }
                this.results = JSON.parse(String(msg.body));
                console.log(this.resultsService.getResultsArray());
            },
            error: (err) => {
                console.log('error1', err);
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
            },
            complete: () => {
            }
        });
    }
    setCalcNumber() {
        console.log(this.getCalculationsNumber());
        this.cookieService.set('calcNumber', this.getCalculationsNumber());
    }
    setEditFlag() {
        this.cookieService.set('editFlag', JSON.stringify(true));
    }
    getStatuses() {
        return this.statuses.filter((statusN) => {
            return statusN.statusName != this.getCalculations().status.statusName;
        });
    }
    getLocalComponentResults() {
        return this.results;
    }
    getEmptyFlag() {
        return this.emptyFlag;
    }
    changeStatus(status) {
        let calculation = JSON.parse(this.cookieService.get('calculation'));
        calculation.status = status;
        // console.log('this.results', this.getLocalComponentResults())
        // console.log('this.getResults()', this.getResults())
        this.cookieService.set('calculation', JSON.stringify(calculation));
        calculation = { ...calculation, ...{
                results: this.getLocalComponentResults()
            } };
        console.log('calculation', calculation);
        this.calculationService.updateCalculation(calculation).subscribe({
            next: (msg) => {
                console.log(msg);
            },
            error: (err) => {
                console.log('error', err);
            },
            complete: () => {
            }
        });
    }
    getCalculations() {
        // console.log(JSON.parse(this.cookieService.get('calculation')))
        return JSON.parse(this.cookieService.get('calculation'));
    }
    getCalculationsNumber() {
        return this.cookieService.get('calcNumber');
    }
    getTel() {
        return String(this.client.telephoneNumber);
    }
    getClient() {
        return this.client;
    }
    getResults() {
        // console.log(this.resultsService.getResultsArray())
        return this.resultsService.getResultsArray();
    }
    getNumberOfFloors() {
        return this.resultsService.getFloorNumber();
    }
    getElementsNames(index) {
        let elements = ['Доска', 'ОСБ', 'Парогидроизоляция', 'Ветрозащита', 'Утеплитель'];
        return elements[index];
    }
    getExternalWalls(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внешние стены');
    }
    getExternalWallsTotalSum(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внешние стены')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
            return currentSum + currentNumber;
        }, 0);
    }
    getInternalWalls(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внутренние стены');
    }
    getInternalWallsTotalSum(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Внутренние стены')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
            return currentSum + currentNumber;
        }, 0);
    }
    getOverlaps(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Перекрытия');
    }
    getOverlapsTotalSum(index) {
        return this.getResults()[index].filter(results => results.partOfFloor == 'Перекрытия')
            .map(cost => cost.totalCost)
            .reduce((currentSum, currentNumber) => {
            return currentSum + currentNumber;
        }, 0);
    }
    getTotalFloorSum(index) {
        return this.getExternalWallsTotalSum(index) + this.getInternalWallsTotalSum(index) + this.getOverlapsTotalSum(index);
    }
    getAllTotalSum() {
        let totalSum = 0;
        for (let i = 0; i < this.getNumberOfFloors(); i++) {
            totalSum += this.getTotalFloorSum(i);
        }
        return totalSum;
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_results_service__WEBPACK_IMPORTED_MODULE_0__.ResultsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_calculation_service__WEBPACK_IMPORTED_MODULE_1__.CalculationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService)); };
ResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], decls: 56, vars: 35, consts: [[1, "wrapper"], [1, "component__container"], [1, "client__card-header"], [1, "btn", 3, "routerLink"], [1, "client-info"], [1, "title-with-lines"], [1, "results__box"], [1, "control-elements__field"], [1, "results__box-header"], [1, "info-text"], [1, "status-field"], [1, "btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "status-btns", 4, "ngIf"], [1, "control-btns"], [1, "show-results"], [1, "btn", 2, "margin-right", "15px", 3, "click"], [1, "label-text"], [1, "btns-edit-add"], ["class", "btn", 3, "routerLink", "click", 4, "ngIf"], ["class", "btn", 3, "routerLink", 4, "ngIf"], [1, "results-field"], ["class", "tables", 4, "ngIf"], [1, "total-cost-field"], [1, "status-btns"], ["class", "statuses", "style", "text-align: center", 4, "ngFor", "ngForOf"], [1, "statuses", 2, "text-align", "center"], [1, "btn", 3, "click"], [1, "btn", 3, "routerLink", "click"], [1, "tables"], ["class", "calculation__table", 4, "ngFor", "ngForOf"], [1, "calculation__table"], [1, "calculation__table-headers"], ["colspan", "5"], [1, "calculation__data", "long-line"], ["colspan", "4", 2, "border-right", "none"], [2, "border-left", "none"], ["class", "calculation__data filling-data", 4, "ngFor", "ngForOf"], [1, "calculation__data", "long-line", "total"], [1, "calculation__data", "filling-data"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "cellphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 6)(18, "div", 7)(19, "div", 8)(20, "div", 9)(21, "p")(22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p")(26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 10)(29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResultsComponent_Template_button_click_29_listener() { return ctx.statusToggle = !ctx.statusToggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ResultsComponent_small_30_Template, 2, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ResultsComponent_small_31_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ResultsComponent_div_32_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 14)(35, "div", 15)(36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ResultsComponent_Template_button_click_36_listener() { return ctx.toggleTables = !ctx.toggleTables; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ResultsComponent_small_37_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, ResultsComponent_small_38_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043A\u0430\u0440\u043A\u0430\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ResultsComponent_button_42_Template, 2, 3, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ResultsComponent_button_43_Template, 4, 3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ResultsComponent_div_45_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ResultsComponent_div_46_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 23)(48, "p")(49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\u0418\u0422\u041E\u0413\u041E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "roundNum");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](31, _c2, ctx.clientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", ctx.getClient().surname, " ", ctx.getClient().name, " ", ctx.getClient().patronymic, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 21, ctx.getTel()));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getClient().address);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getClient().email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u2116", ctx.resultsPNum, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0414\u0430\u0442\u0430: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 23, ctx.getCalculations().dataOfCreation, "dd.MM.yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0410\u0434\u0440\u0435\u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0430: ", ctx.getCalculations().constructionAddress, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](33, _c3, ctx.statusToggle));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.statusToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statusToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statusToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.toggleTables);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.toggleTables);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.getEmptyFlag());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.getEmptyFlag());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.toggleTables);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.toggleTables);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](54, 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 29, ctx.getAllTotalSum()), "1.0-0"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _pipes_cellphone_pipe__WEBPACK_IMPORTED_MODULE_4__.CellphonePipe, _pipes_roundNum_pipe__WEBPACK_IMPORTED_MODULE_5__.RoundNumPipe], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.control-elements__field[_ngcontent-%COMP%] {\n  border: 5px solid #222222;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 30px;\n  background-color: #303030;\n}\nhr[_ngcontent-%COMP%] {\n  border: 3px solid rgba(0, 163, 255, 0.7);\n  border-bottom-width: 0;\n}\n.results__box-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.results__box-header[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 10px;\n}\n.results__box-header[_ngcontent-%COMP%]   .status-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.results__box-header[_ngcontent-%COMP%]   .status-field[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%] {\n  border: 2px solid rgba(0, 163, 255, 0.7);\n  box-shadow: 0 0 4px 1px rgba(0, 163, 255, 0.7);\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.results__box-header[_ngcontent-%COMP%]   .status-field[_ngcontent-%COMP%]   .status-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 20px;\n  border: 2px solid rgba(0, 163, 255, 0.7);\n  box-shadow: inset 0 0 10px 3px #222222;\n  border-radius: 5px;\n  background-color: #43484b;\n}\n.control-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n.control-btns[_ngcontent-%COMP%]   .btns-edit-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n.calculation__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 3px solid #222222;\n  border-collapse: separate;\n  border-radius: 10px;\n}\n.calculation__table[_ngcontent-%COMP%]   .calculation__table-headers[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #303030;\n}\n.calculation__table[_ngcontent-%COMP%]   .long-line[_ngcontent-%COMP%] {\n  background-color: #2c4459;\n}\n.calculation__table[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  background-color: rgba(34, 101, 34, 0.55);\n}\n.calculation__table[_ngcontent-%COMP%]   .filling-data[_ngcontent-%COMP%] {\n  background-color: #43484b;\n}\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  vertical-align: middle;\n  border: 2px solid #222222;\n}\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, td[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.calculation__data[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 5px;\n}\n.calculation__data[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 5px;\n}\n.results-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.results-field[_ngcontent-%COMP%]   .tables[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.results-field[_ngcontent-%COMP%]   .total-cost-field[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 5px solid #222222;\n  border-radius: 10px;\n  padding: 20px;\n  background-color: #303030;\n}"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _entity_authRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/authRequest */ 5923);
/* harmony import */ var _entity_currentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity/currentManager */ 7742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4793);







const API_URL = 'http://51.250.54.62:8080';
class AuthService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.authTokens = new _entity_authRequest__WEBPACK_IMPORTED_MODULE_0__.AuthRequest();
        this.currentManager = new _entity_currentManager__WEBPACK_IMPORTED_MODULE_1__.CurrentManager();
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
        this.cookieService.deleteAll('/');
        this.isAuth = false;
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 200);
        setTimeout(() => {
            window.location.reload();
        }, 300);
    }
    refreshToken() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get('refresh_token')
        });
        return this.http.get(API_URL + '/api/token/refresh', { headers: headers }).subscribe({
            next: (msg) => {
                this.authTokens = JSON.parse(JSON.stringify(msg));
                this.setAuthTokens(this.authTokens.access_token, this.authTokens.refresh_token);
                this.cookieService.set('access_token', this.getAuthTokens().access_token, { expires: 1 });
                this.cookieService.set('refresh_token', this.getAuthTokens().refresh_token, { expires: 1 });
                setTimeout(() => { window.location.reload(); }, 300);
            },
            error: (err) => {
                console.log('error: ', err);
                if (err.status == 403) {
                    alert('Ваша сессия закончилась. Авторизуйтесь заново');
                    this.logout();
                }
            },
            complete: () => { }
        });
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);




const API_URL = 'http://51.250.54.62:8080';
class CalculationService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.currentCalcId = 0;
        this.calculations = [];
        this.authTokens = this.authService.getAuthTokens();
    }
    addCalculation(clientId, calculationData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: clientId
        };
        // console.log(JSON.stringify(calculationData))
        return this.http.post(API_URL + '/business/addCalculation', JSON.stringify(calculationData), { headers: headers, params: params });
    }
    getCalculations(clientId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: clientId
        };
        return this.http.get(API_URL + '/business/getCalculation', { headers: headers, params: params, responseType: 'text', observe: 'response' });
    }
    deleteCalculation(calculationNumber) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            'calculationNumber': calculationNumber
        };
        return this.http.post(API_URL + '/business/deleteCalculation', null, { headers: headers, params: params, responseType: 'text', observe: 'response' });
    }
    setCalculations(calculations) {
        this.calculations = calculations;
    }
    setCurrentCalcId(id) {
        this.currentCalcId = id;
    }
    getCurrentId() {
        return this.currentCalcId;
    }
    deleteInArray(num) {
        this.calculations = this.calculations.filter(calc => calc !== this.calculations.filter(calc => calc.number == num)[0]);
    }
    getCalulationsArray() {
        return this.calculations;
    }
    getCalulationNumber(id) {
        return this.calculations.filter(calc => calc.id === id)[0].number;
        // return this.calculations.find(calc => calc.id === id)!.number
    }
    getStatuses() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        return this.http.get(API_URL + '/business/statuses', { headers: headers, responseType: 'text', observe: 'response' });
    }
    updateCalculation(calculation) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        return this.http.patch(API_URL + '/business/updateCalculation', JSON.stringify(calculation), { headers: headers });
    }
}
CalculationService.ɵfac = function CalculationService_Factory(t) { return new (t || CalculationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
CalculationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalculationService, factory: CalculationService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _entity_Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/Client */ 3824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);





const API_URL = 'http://51.250.54.62:8080';
class ClientsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.authTokens = this.authService.getAuthTokens();
        this.currentManager = this.authService.getCurrentManager();
        this.clientpage = true;
        this.client = new _entity_Client__WEBPACK_IMPORTED_MODULE_0__.Client();
    }
    getById(id) {
        return this.clients.find(c => c.id === id);
    }
    addCustomer(newClientData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
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
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: customerId
        };
        return this.http.patch(API_URL + `/api/updateCustomer/${customerId}`, JSON.stringify(clientData), { headers: headers, params: params });
    }
    getAllClients() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            id: this.currentManager.id
        };
        return this.http.get(API_URL + '/api/customers', { headers: headers, params: params, responseType: 'text', observe: 'response' });
    }
    setClient(client) {
        this.client = client;
    }
    getClient() {
        return this.client;
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ClientsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);





const API_URL = 'http://51.250.54.62:8080';
class ManagerService {
    constructor(http, cookieService, authService) {
        this.http = http;
        this.cookieService = cookieService;
        this.authService = authService;
        this.authTokens = {
            access_token: this.cookieService.get('access_token'),
            refresh_token: this.cookieService.get('refresh_token')
        };
    }
    addUser(newUserData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        return this.http.post(API_URL + '/admin/addUser', JSON.stringify(newUserData), { headers: headers });
    }
    getRoles() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        // console.log(this.authTokens.access_token)
        return this.http.get(API_URL + '/admin/roles', { headers: headers, responseType: 'text', observe: 'response' });
    }
    getStatuses() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        // console.log(this.authTokens.access_token)
        return this.http.get(API_URL + '/admin/getStatuses', { headers: headers, responseType: 'text', observe: 'response' });
    }
}
ManagerService.ɵfac = function ManagerService_Factory(t) { return new (t || ManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ManagerService, factory: ManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4007:
/*!***********************************************!*\
  !*** ./src/app/services/materials.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialsService": () => (/* binding */ MaterialsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);




const API_URL = 'http://51.250.54.62:8080';
class MaterialsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.materialArray = [];
        this.authTokens = this.authService.getAuthTokens();
    }
    getMaterials() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        return this.http.get(API_URL + '/business/getMaterials', { headers: headers, responseType: 'text', observe: 'response' });
    }
    setMaterialArray(materials) {
        this.materialArray = materials;
    }
    getMaterialArray() {
        return this.materialArray;
    }
}
MaterialsService.ɵfac = function MaterialsService_Factory(t) { return new (t || MaterialsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
MaterialsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MaterialsService, factory: MaterialsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9741:
/*!*********************************************!*\
  !*** ./src/app/services/results.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsService": () => (/* binding */ ResultsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);




const API_URL = 'http://51.250.54.62:8080';
class ResultsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.authTokens = this.authService.getAuthTokens();
        this.results = [];
    }
    addFrame(frameData, calculationNumber) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            'calculationNumber': calculationNumber
        };
        console.log(JSON.stringify(frameData));
        return this.http.post(API_URL + '/business/addFrame', JSON.stringify(frameData), {
            headers: headers,
            params: params
        });
    }
    updateFrame(frameData, calculationNumber) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            'calculationNumber': calculationNumber
        };
        console.log(JSON.stringify(frameData));
        return this.http.patch(API_URL + '/business/updateFrame', JSON.stringify(frameData), {
            headers: headers,
            params: params
        });
    }
    getResults(calculationNumber) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authTokens.access_token
        });
        let params = {
            'calculationNumber': calculationNumber
        };
        return this.http.get(API_URL + '/business/getResults', { headers: headers, params: params, responseType: 'text', observe: 'response' });
    }
    setResults(results) {
        this.results.push(results);
    }
    setEditForm(editForm) {
        this.editForm = editForm;
    }
    getEditForm() {
        return this.editForm;
    }
    getResultsArray() {
        return this.results;
    }
    getFloorNumber() {
        if (this.results != []) {
            return this.results.length;
        }
        return 1;
    }
    clearResults() {
        this.results = [];
    }
}
ResultsService.ɵfac = function ResultsService_Factory(t) { return new (t || ResultsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ResultsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ResultsService, factory: ResultsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68:
/*!******************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationComponent": () => (/* binding */ UserRegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/manager.service */ 7916);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 5657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);









function UserRegistrationComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", role_r11.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", role_r11.groupName, " ");
} }
function UserRegistrationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", status_r12.statusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", status_r12.statusName, " ");
} }
function UserRegistrationComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r14.formUserReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r14.formUserReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].actualLength, ". ");
} }
function UserRegistrationComponent_div_30_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r15.formUserReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r15.formUserReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].actualLength, ". ");
} }
function UserRegistrationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegistrationComponent_div_30_small_1_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegistrationComponent_div_30_small_2_Template, 2, 2, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserRegistrationComponent_div_30_small_3_Template, 2, 2, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.formUserReg.get("telephoneNumber")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r7.formUserReg.get("telephoneNumber")) == null ? null : tmp_1_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.formUserReg.get("telephoneNumber")) == null ? null : tmp_2_0.hasError("maxlength"));
} }
function UserRegistrationComponent_div_33_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_33_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegistrationComponent_div_33_small_1_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegistrationComponent_div_33_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.formUserReg.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.formUserReg.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
} }
function UserRegistrationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function UserRegistrationComponent_div_39_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_39_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r19.formUserReg.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r19.formUserReg.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"].actualLength, ". ");
} }
function UserRegistrationComponent_div_39_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u0438\u043D\u043E\u0439 ", (tmp_0_0 = ctx_r20.formUserReg.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].requiredLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", (tmp_0_0 = ctx_r20.formUserReg.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"].actualLength, ". ");
} }
function UserRegistrationComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserRegistrationComponent_div_39_small_1_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserRegistrationComponent_div_39_small_2_Template, 2, 2, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserRegistrationComponent_div_39_small_3_Template, 2, 2, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.formUserReg.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r10.formUserReg.get("password")) == null ? null : tmp_1_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r10.formUserReg.get("password")) == null ? null : tmp_2_0.hasError("maxlength"));
} }
class UserRegistrationComponent {
    constructor(http, managerService, authService, cookieService, router) {
        this.http = http;
        this.managerService = managerService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.router = router;
        this.telephoneLength = 10;
        this.minPassLength = 6;
        this.maxPassLength = 20;
        this.roles = '';
        this.statuses = '';
    }
    ngOnInit() {
        this.formUserReg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            // id: new FormControl(null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            groupOfUsers: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
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
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(this.minPassLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(this.maxPassLength)
            ]),
        });
        this.managerService.getRoles().subscribe({
            next: (msg) => {
                console.log(msg.body);
                this.roles = JSON.parse(String(msg.body));
            },
            error: (err) => {
                console.log('error1', err);
                if (err.status == 403) {
                    this.authService.refreshToken();
                }
            },
            complete: () => { }
        });
        this.managerService.getStatuses().subscribe({
            next: (msg) => {
                console.log(msg.body);
                this.statuses = JSON.parse(String(msg.body));
            },
            error: (err) => {
                console.log('error2', err);
            },
            complete: () => { }
        });
    }
    getRoles() {
        return this.roles;
    }
    getStatuses() {
        return this.statuses;
    }
    submit() {
        if (this.formUserReg.valid) {
            const newUserData = { ...this.formUserReg.value };
            let roleId = 0;
            this.roles.filter((role) => {
                if (role.groupName == newUserData.groupOfUsers)
                    roleId = role.id;
            });
            let statusId = 0;
            this.statuses.filter((status) => {
                if (status.statusName == newUserData.status)
                    statusId = status.id;
            });
            newUserData.telephoneNumber = Number(newUserData.telephoneNumber);
            newUserData.groupOfUsers = [
                {
                    id: roleId,
                    groupName: newUserData.groupOfUsers
                }
            ];
            newUserData.status = {
                id: statusId,
                statusName: newUserData.status
            };
            console.log(JSON.stringify(newUserData));
            this.managerService.addUser(newUserData).subscribe({
                next: (msg) => {
                    console.log(msg);
                    // window.location.reload()
                },
                error: (err) => {
                    console.log('error received:', err);
                    if (err.status == 403) {
                        alert('пожалуйста введите данные заново');
                        this.authService.refreshToken();
                    }
                },
                complete: () => console.log('complete')
            });
            // this.formUserReg.reset()
        }
    }
    showInfo() {
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
UserRegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 42, vars: 13, consts: [[1, "wrapper"], [1, "component__container"], ["type", "button", "routerLink", "/clientspage", 1, "btn", "btn-go-back"], [1, "reg__form", 3, "formGroup", "ngSubmit"], [1, "reg__title"], [1, "reg__form-control"], ["formControlName", "groupOfUsers", 1, "select-options"], ["value", "", 1, "option"], ["class", "option", 3, "value", 4, "ngFor", "ngForOf"], ["class", "validation", 4, "ngIf"], ["formControlName", "status", 1, "select-options"], ["type", "text", "name", "surname", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "formControlName", "surname", 1, "reg__input"], ["type", "text", "name", "cName", "placeholder", "\u0418\u043C\u044F", "formControlName", "name", 1, "reg__input"], ["type", "text", "name", "patronymic", "placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E", "formControlName", "patronymic", 1, "reg__input"], ["type", "text", "name", "telephoneNumber", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "telephoneNumber", 1, "reg__input"], ["type", "text", "name", "email", "placeholder", "E-mail", "formControlName", "email", 1, "reg__input"], ["type", "text", "name", "login", "placeholder", "\u041B\u043E\u0433\u0438\u043D", "formControlName", "login", 1, "reg__input"], ["type", "text", "name", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "formControlName", "password", 1, "reg__input"], ["type", "submit", 1, "btn", "reg__btn", 3, "disabled"], [1, "option", 3, "value"], [1, "validation"], [4, "ngIf"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserRegistrationComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "select", 6)(9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u0420\u043E\u043B\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UserRegistrationComponent_option_11_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UserRegistrationComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "select", 10)(15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " \u0421\u0442\u0430\u0442\u0443\u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserRegistrationComponent_option_17_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UserRegistrationComponent_div_18_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, UserRegistrationComponent_div_21_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UserRegistrationComponent_div_24_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, UserRegistrationComponent_div_27_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, UserRegistrationComponent_div_30_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, UserRegistrationComponent_div_33_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, UserRegistrationComponent_div_36_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, UserRegistrationComponent_div_39_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formUserReg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getRoles());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.formUserReg.get("groupOfUsers")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.formUserReg.get("groupOfUsers")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getStatuses());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.formUserReg.get("status")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.formUserReg.get("status")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.formUserReg.get("surname")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.formUserReg.get("surname")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.formUserReg.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.formUserReg.get("name")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.formUserReg.get("patronymic")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.formUserReg.get("patronymic")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.formUserReg.get("telephoneNumber")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.formUserReg.get("telephoneNumber")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.formUserReg.get("email")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.formUserReg.get("email")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.formUserReg.get("login")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.formUserReg.get("login")) == null ? null : tmp_10_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.formUserReg.get("password")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.formUserReg.get("password")) == null ? null : tmp_11_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formUserReg.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["@charset \"UTF-8\";\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-regular.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-regular.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-500.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-500.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"\"), url('montserrat-v25-latin_cyrillic-700.woff2') format(\"woff2\"), url('montserrat-v25-latin_cyrillic-700.woff') format(\"woff\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"\"), url('raleway-regular.woff2') format(\"woff2\"); \n}\n\n@font-face {\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 900;\n  src: local(\"\"), url('raleway-black.woff2') format(\"woff2\"); \n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: normal;\n  color: #eeeeee;\n  background-color: #393939;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%; \n  -webkit-text-size-adjust: 100%; \n  -ms-text-size-adjust: 100%; \n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  outline: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0; \n  -ms-interpolation-mode: bicubic; \n}\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  border: 0; \n  padding: 0;\n  white-space: normal; \n  *margin-left: -7px; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 100%; \n  margin: 0; \n  vertical-align: baseline; \n  *vertical-align: middle; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  cursor: pointer; \n  *overflow: visible; \n}\n\nbutton[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n  *height: 13px; \n  *width: 13px; \n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;  \n  box-sizing: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto; \n  vertical-align: top; \n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_ngcontent-%COMP%]::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.chromeframe[_ngcontent-%COMP%] {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 7px 13px;\n  background-color: rgba(57, 57, 57, 0.3);\n  color: #55c2ff;\n  border: 2px solid #00a3ff;\n  border-radius: 5px;\n  box-shadow: 0 0 4px 1px #00a3ff;\n  transition: all 0.1s ease-in-out;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.btn[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #00a3ff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  color: #dcdcdc;\n  border: 2px solid #dcdcdc;\n  box-shadow: 0 0 4px 1px #dcdcdc;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  background: rgba(57, 57, 57, 0.3);\n}\n.btn[_ngcontent-%COMP%]:disabled:active {\n  box-shadow: 0 0 6px 1px #dcdcdc;\n}\n.danger[_ngcontent-%COMP%] {\n  color: #fd6868;\n  border: 2px solid #fd6868;\n  box-shadow: 0 0 6px 1px #fd6868;\n}\n.danger[_ngcontent-%COMP%]:hover {\n  background-color: #2a2a2a;\n}\n.danger[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 4px 1px #fd6868;\n}\n.danger-text[_ngcontent-%COMP%] {\n  color: #fd6868;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n  color: #eeeeee;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #eeeeee;\n}\n.validation__input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.validation__input-style.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.validation__input-style.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.input__style[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(0, 163, 255, 0.5);\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: inset 0 0 0 50px #303030 !important; \n  -webkit-text-fill-color: #eeeeee !important; \n  color: #eeeeee !important; \n}\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  appearance: none;\n}\nselect.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\nselect.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n  padding-right: 1.2em;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0.65em) 0.75em;\n  background-size: 1.5em auto;\n  background-image: url('drop-arrow-blue2.png');\n}\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1060px;\n  margin: 0 auto;\n}\n.component__container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 170px;\n  margin-bottom: 60px;\n}\n.flex-centrification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-with-lines[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 2rem;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.client__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.client__card-header[_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.right-side-text[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 15px;\n}\n@media (max-width: 1087px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 970px;\n  }\n}\n@media (max-width: 980px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n}\n@media (max-width: 767.98px) {\n  .wrapper[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n}\n.reg__form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn-go-back[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-left: 2px;\n}\n.reg__title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto 40px;\n  border-top: 4px solid #eeeeee;\n  border-bottom: 4px solid #eeeeee;\n}\n.reg__form-control[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.reg__input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding: 10px;\n  color: #eeeeee;\n  background-color: #303030;\n  border: 2px solid #6b6b6b;\n  border-radius: 10px;\n}\n.reg__input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #fd6868;\n}\n.reg__input.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #aaff8e;\n}\n.validation[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #fd6868;\n}\n.reg__btn[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}"] });


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