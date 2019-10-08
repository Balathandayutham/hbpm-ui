(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-events-create-events-module"],{

/***/ "./src/app/create-events/create-events-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/create-events/create-events-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateEventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventRoutingModule", function() { return CreateEventRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-events.component */ "./src/app/create-events/create-events.component.ts");




var routes = [
    { path: '', component: _create_events_component__WEBPACK_IMPORTED_MODULE_3__["CreateEventComponent"] }
];
var CreateEventRoutingModule = /** @class */ (function () {
    function CreateEventRoutingModule() {
    }
    CreateEventRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CreateEventRoutingModule);
    return CreateEventRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-events/create-events.component.css":
/*!***********************************************************!*\
  !*** ./src/app/create-events/create-events.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    width:70%;\r\n  }\r\n\r\n.sidebar {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 200px;\r\n    background-color: #f1f1f1;\r\n    position: fixed;\r\n    height: 100%;\r\n    overflow: auto;\r\n  }\r\n\r\n.sidebar a {\r\n    display: block;\r\n    color: black;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.sidebar a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n\r\n.sidebar a:hover:not(.active) {\r\n    background-color: #555;\r\n    color: white;\r\n  }\r\n\r\ndiv.content {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 700px) {\r\n    .sidebar {\r\n      width: 100%;\r\n      height: auto;\r\n      position: relative;\r\n    }\r\n    .sidebar a {float: left;}\r\n    div.content {margin-left: 0;}\r\n  }\r\n\r\n@media screen and (max-width: 400px) {\r\n    .sidebar a {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWV2ZW50cy9jcmVhdGUtZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7QUFFRjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7O0VBRW5COztBQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjtJQUNBLFlBQVksV0FBVyxDQUFDO0lBQ3hCLGFBQWEsY0FBYyxDQUFDO0VBQzlCOztBQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZXZlbnRzL2NyZWF0ZS1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gIH1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAgXHJcbiAgLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/create-events/create-events.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-events/create-events.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 content\">\n  \n  <h1 class=\"display-4\">Create Events</h1>\n  <form  [formGroup]=\"myform\" (ngSubmit)=\"OnSubmit()\">\n      <label for=\"name\" class=\"col-sm-2 col-form-label\">Select Process</label>\n      <div class=\"col-sm-6\">\n       \n          <select  class=\"form-control\" (change)=\"onChangeEvent($event)\" style=\"margin-bottom: 10px;width: 300px;\" formControlName=\"procname\">\n              <option value=\"0\">--All--</option>\n              <option *ngFor=\"let summary of proces\" value={{summary.processId}}>\n                  {{summary.processName}}\n              </option>\n          </select>\n      </div>\n\n    <div class=\"col-sm-12 table-responsive\" formArrayName=\"itemRows\">\n        \n      <table class=\"table\" style=\"width: 30px;\">\n        <thead>\n          <tr>\n            \n            <th style=\"white-space: nowrap;padding-right: 2em;float:center\">EventName </th>\n            <th style=\"white-space: nowrap;padding-right: 2em;float:center\">Descripition </th>\n           \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let itemrow of myform.controls.itemRows['controls']; let i=index\"  [formGroupName]=\"i\">\n\n           \n             <td> <input type=\"text\" id=\"learn{{i}}\" style=\"\n              height: 45px;    width: 18em;\" formControlName=\"eventName\" class=\"form-control reset\"></td>\n            <td> <input type=\"text\" formControlName=\"eventDescription\" style=\"\n              height: 45px; width: 18em;\" class=\"form-control reset\"></td>\n           \n            <td> <button *ngIf=\"myform.controls.itemRows.controls.length > 1\" (click)=\"deleteRow(i)\" class=\"btn btn-danger\"><i class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i></button></td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr><td> <button type=\"button\" (click)=\"addNewRow()\" class=\"btn btn-primary\"><i style=\"width:10px\"class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></button></td></tr>\n        </tfoot>\n      </table>\n      <button class=\"btn btn-sm btn-secondary \"  type=\"button\" (click) = \"reset()\">Reset</button>\n    <button class=\"ml-4 btn btn-sm btn-primary \"  type=\"submit\">Submit</button>\n  </div>\n\n\n\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/create-events/create-events.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-events/create-events.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-events.service */ "./src/app/create-events/create-events.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(createEventService, _fb) {
        this.createEventService = createEventService;
        this._fb = _fb;
        this.proces = [];
        this.event = [];
        this.heroes = [];
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            procname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            itemRows: this._fb.array([this.initItemRows()])
        });
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createEventService.get_products().subscribe(function (res) {
            _this.proces = res;
        });
    };
    CreateEventComponent.prototype.OnSubmit = function () {
        if (this.myform.valid) {
            for (var _i = 0, _a = this.myform.get('itemRows').value; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.id == "") {
                    this.heroes.push(c);
                }
            }
            this.createEventService.save_events(this.heroes, this.myform.get('procname').value).subscribe(function (res) {
                console.log(res);
            });
            this.myform.reset();
        }
    };
    CreateEventComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.myform.get('itemRows').value; _i < _a.length; _i++) {
            var c = _a[_i];
            var a = 1;
            this.formArr.removeAt(a);
            a++;
        }
        this.myform.reset();
    };
    Object.defineProperty(CreateEventComponent.prototype, "formArr", {
        get: function () {
            return this.myform.get('itemRows');
        },
        enumerable: true,
        configurable: true
    });
    CreateEventComponent.prototype.initItemRows = function () {
        return this._fb.group({
            id: [''],
            processId: [''],
            eventName: [''],
            eventDescription: [''],
        });
    };
    CreateEventComponent.prototype.addNewRow = function () {
        this.formArr.push(this.initItemRows());
    };
    CreateEventComponent.prototype.deleteRow = function (index) {
        this.formArr.removeAt(index);
    };
    CreateEventComponent.prototype.onChangeEvent = function (ev) {
        for (var _i = 0, _a = this.myform.get('itemRows').value; _i < _a.length; _i++) {
            var c = _a[_i];
            var a = 0;
            this.formArr.removeAt(a);
            a++;
        }
        this.formArr.push(this.initItemRows());
        console.log(ev.target.value); // should print option1
        this.setEmployeeValues(ev.target.value);
    };
    CreateEventComponent.prototype.setEmployeeValues = function (id) {
        var _this = this;
        var a = 1;
        // this.heroes = [
        //   { name: "event1", descripition: "event1"},
        //   { name: "event2", descripition: "event2"}
        // ]
        this.createEventService.get_events(id).subscribe(function (res) {
            _this.event = res;
            for (var _i = 0, _a = _this.event; _i < _a.length; _i++) {
                var c = _a[_i];
                if (a != 1) {
                    _this.formArr.push(_this.initItemRows());
                }
                console.log(c);
                a++;
            }
            _this.formArr.setValue(_this.event);
        });
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-events.component.html */ "./src/app/create-events/create-events.component.html"),
            styles: [__webpack_require__(/*! ./create-events.component.css */ "./src/app/create-events/create-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_create_events_service__WEBPACK_IMPORTED_MODULE_2__["CreateEventService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/create-events/create-events.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-events/create-events.module.ts ***!
  \*******************************************************/
/*! exports provided: CreateEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventsModule", function() { return CreateEventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_events_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-events-routing.module */ "./src/app/create-events/create-events-routing.module.ts");
/* harmony import */ var _create_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-events.component */ "./src/app/create-events/create-events.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CreateEventsModule = /** @class */ (function () {
    function CreateEventsModule() {
    }
    CreateEventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_events_component__WEBPACK_IMPORTED_MODULE_4__["CreateEventComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _create_events_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateEventRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], CreateEventsModule);
    return CreateEventsModule;
}());



/***/ }),

/***/ "./src/app/create-events/create-events.service.ts":
/*!********************************************************!*\
  !*** ./src/app/create-events/create-events.service.ts ***!
  \********************************************************/
/*! exports provided: CreateEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventService", function() { return CreateEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var CreateEventService = /** @class */ (function () {
    function CreateEventService(httpService) {
        this.httpService = httpService;
        this.products = [];
        this.baseUrl = "https://xmltest.free.beeceptor.com";
    }
    CreateEventService.prototype.get_products = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.httpService.get('http://localhost:8082/hbpm/process/retrieve', { headers: headers }).map(function (res) { return res || []; });
    };
    CreateEventService.prototype.get_events = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: 'id=' + id });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.httpService.get('http://localhost:8082/hbpm/process/events/retrieve/{id}', { params: params }).map(function (res) { return res || []; });
    };
    CreateEventService.prototype.save_events = function (eve, id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: 'id=' + id });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.httpService.post('http://localhost:8082/hbpm/process/events?', eve, { params: params, headers: headers }).map(function (res) { return res; });
    };
    CreateEventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateEventService);
    return CreateEventService;
}());



/***/ })

}]);
//# sourceMappingURL=create-events-create-events-module.js.map