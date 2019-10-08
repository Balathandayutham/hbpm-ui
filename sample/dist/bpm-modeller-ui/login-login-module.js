(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




var routes = [
    { path: "", component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.bg-img {\r\n  /* Set rules to fill background */\r\n    background-image: url('Diagram-0.png');\r\n  min-height: 100%;\r\n  min-width: 1024px;\r\n\t\r\n  /* Set up proportionate scaling */\r\n  width: 100%;\r\n  height: auto;\r\n\t\r\n  /* Set up positioning */\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  /* opacity: 0.1;\r\n  filter: alpha(opacity=50); */\r\n}\r\n.layer {\r\n  background-color: rgba(216, 223, 233, 0.918);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* Add styles to the form container */\r\n.container {\r\n position: absolute;\r\n    left: 50%;\r\n    top: 42%;\r\n    height: 00px;\r\n    margin-top: -120px ;\r\n    width: 400px;\r\n    margin-left: -200px ;\r\n   \r\n \r\n  \r\n  max-width: 300px;\r\n\r\n  background-color:#3f42464a;\r\n}\r\n.container2 {\r\n  position: absolute;\r\n     left: 30%;\r\n     top: 30%;\r\n     height: 00px;\r\n     margin-top: -190px ;\r\n    \r\n     margin-left: -200px ;\r\n    \r\n  \r\n   \r\n \r\n \r\n   background-color:#3f42464a;\r\n }\r\n.container3 {\r\n  position: absolute;\r\n     left: 58%;\r\n     top: 38%;\r\n     height: 00px;\r\n     margin-top: -190px ;\r\n    \r\n     margin-left: -200px ;\r\n    \r\n  \r\n   \r\n  \r\n \r\n   background-color:#3f42464a;\r\n }\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n/* Set a style for the submit button */\r\n.btn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 5px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 36%;\r\n  height: 38px;\r\n  opacity: 0.9;\r\n}\r\n.btn:hover {\r\n  opacity: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUdBO0VBQ0UsaUNBQWlDO0lBQy9CLHNDQUFtRDtFQUNyRCxnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7O0VBRVosdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQOzhCQUM0QjtBQUM5QjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQSxxQ0FBcUM7QUFDckM7Q0FDQyxrQkFBa0I7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjs7OztFQUl0QixnQkFBZ0I7O0VBRWhCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0JBQWtCO0tBQ2YsU0FBUztLQUNULFFBQVE7S0FDUixZQUFZO0tBQ1osbUJBQW1COztLQUVuQixvQkFBb0I7Ozs7OztHQU10QiwwQkFBMEI7Q0FDNUI7QUFDQTtFQUNDLGtCQUFrQjtLQUNmLFNBQVM7S0FDVCxRQUFRO0tBQ1IsWUFBWTtLQUNaLG1CQUFtQjs7S0FFbkIsb0JBQW9COzs7Ozs7R0FNdEIsMEJBQTBCO0NBQzVCO0FBQ0QsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBLHNDQUFzQztBQUN0QztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5iZy1pbWcge1xyXG4gIC8qIFNldCBydWxlcyB0byBmaWxsIGJhY2tncm91bmQgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9EaWFncmFtLTAucG5nXCIpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDI0cHg7XHJcblx0XHJcbiAgLyogU2V0IHVwIHByb3BvcnRpb25hdGUgc2NhbGluZyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHRcclxuICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLyogb3BhY2l0eTogMC4xO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7ICovXHJcbn1cclxuLmxheWVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjIzLCAyMzMsIDAuOTE4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNDIlO1xyXG4gICAgaGVpZ2h0OiAwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEyMHB4IDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHggO1xyXG4gICBcclxuIFxyXG4gIFxyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IzNmNDI0NjRhO1xyXG59XHJcbi5jb250YWluZXIyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgbGVmdDogMzAlO1xyXG4gICAgIHRvcDogMzAlO1xyXG4gICAgIGhlaWdodDogMDBweDtcclxuICAgICBtYXJnaW4tdG9wOiAtMTkwcHggO1xyXG4gICAgXHJcbiAgICAgbWFyZ2luLWxlZnQ6IC0yMDBweCA7XHJcbiAgICBcclxuICBcclxuICAgXHJcbiBcclxuIFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjQyNDY0YTtcclxuIH1cclxuIC5jb250YWluZXIzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgbGVmdDogNTglO1xyXG4gICAgIHRvcDogMzglO1xyXG4gICAgIGhlaWdodDogMDBweDtcclxuICAgICBtYXJnaW4tdG9wOiAtMTkwcHggO1xyXG4gICAgXHJcbiAgICAgbWFyZ2luLWxlZnQ6IC0yMDBweCA7XHJcbiAgICBcclxuICBcclxuICAgXHJcbiAgXHJcbiBcclxuICAgYmFja2dyb3VuZC1jb2xvcjojM2Y0MjQ2NGE7XHJcbiB9XHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMzYlO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--  \n<section class=\"view intro-2\">\n  <div class=\"layer\">\n\n</div>\n</section>\n\n<div >\n<div class=\"mask rgba-gradient container-fluid\">\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\" >\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <label for=\"inputEmail\" class=\"sr-only\">User Id</label>\n        <input type=\"text\" formControlName=\"userId\" id=\"userId\" class=\"form-control\" placeholder=\"user id\"  autofocus>\n        \n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"password\" >\n        \n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!loginForm.valid\" type=\"submit\">Sign in</button>\n  </form>\n</div> -->\n<div class=\"bg-img\">\n    <div class=\"layer\">\n      \n  <!-- <form action=\"/action_page.php\" class=\"container\">\n   \n\n    <label for=\"email\"><b>Email</b></label>\n    <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n    <button type=\"submit\" class=\"btn\">Login</button>\n  </form> -->\n \n  <div  class=\" container2\"> <h1 style=\"\n    font-family: sans-serif; color: #10188a;\n\">HBPM | Hybrid Business Process Management Application</h1></div>\n  <div  class=\" container3\"> <h1 style=\"\n    font-family: serif;\n    font-style: italic;\n    font-size: 2em;\n    color: #0b4be2;\n\">- \"Extendable, Scalable & Light weight\"</h1></div>\n  <div class=\" container\">\n   \n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\" style=\"\n  background-color: #f8f9fa;\n  width: 300p;\n  padding-left: 10px;\n  width: 300px;\n  height: 320px;\n  padding-right: 10px;\n  \">\n      <h1 style=\"\n      font-style: italic;\n      font-family: serif;\n  \">Login</h1>\n      <div class=\"form-label-group\">\n        <input type=\"text\" formControlName=\"userId\" id=\"userId\" class=\"form-control\" placeholder=\"user id\"  autofocus>\n     \n      </div>\n\n      <div class=\"form-label-group\">\n        <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"password\">\n        \n      </div>\n\n      <div class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block \"  [disabled]=\"!loginForm.valid\" type=\"submit\">Sign in</button>\n      <div class=\"text-center\">\n        <a class=\"small\" href=\"#\" style=\"\n        margin-right: 172px;\n    \">Forgot password?</a></div>\n    </form>\n  </div>\n  </div>\n</div>\n\n<!-- <div class=\"container-fluid\">\n  <div class=\"row no-gutter\">\n     \n    <div class=\"d-none d-md-flex col-md-9 bg-image \"></div>\n     \n    <div class=\"col-md-3\">\n      <div class=\"login d-flex align-items-center py-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n                <img src=\"../../assets/logo.jpg\" style=\"width: 350px\">\n              <h3 class=\"login-heading mb-4\">Hybrid-BPM</h3>\n              <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" formControlName=\"userId\" id=\"userId\" class=\"form-control\" placeholder=\"user id\"  autofocus>\n               \n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"password\">\n                  \n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block \"  [disabled]=\"!loginForm.valid\" type=\"submit\">Sign in</button>\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"#\">Forgot password?</a></div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, fb, _router) {
        this._loginService = _loginService;
        this.fb = fb;
        this._router = _router;
        if (this._loginService.isAuthenticated()) {
            this._router.navigate(['home']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    LoginComponent.prototype.doLogin = function () {
        var userId = this.loginForm.get('userId').value;
        var password = this.loginForm.get('password').value;
        console.log(userId);
        console.log(password);
        if (this._loginService.login(userId, password)) {
            console.log('logged in successfully...');
            this._router.navigate(['home']);
        }
        else {
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map