(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-workflow-view-workflow-module"],{

/***/ "./src/app/view-workflow/view-workflow-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/view-workflow/view-workflow-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewWorkflowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWorkflowRoutingModule", function() { return ViewWorkflowRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_workflow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-workflow.component */ "./src/app/view-workflow/view-workflow.component.ts");




var routes = [
    { path: '', component: _view_workflow_component__WEBPACK_IMPORTED_MODULE_3__["ViewWorkflowComponent"] }
];
var ViewWorkflowRoutingModule = /** @class */ (function () {
    function ViewWorkflowRoutingModule() {
    }
    ViewWorkflowRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewWorkflowRoutingModule);
    return ViewWorkflowRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-workflow/view-workflow.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view-workflow/view-workflow.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".diagram-note {\r\n  background-color: rgba(66, 180, 21, 0.7);\r\n  color: White;\r\n  border-radius: 5px;\r\n  font-family: Arial;\r\n  font-size: 12px;\r\n  padding: 5px;\r\n  min-height: 16px;\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n.properties-panel {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 350px;\r\n  z-index: 10;\r\n  border-left: 1px solid #ccc;\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n.properties-panel:empty {\r\n  display: none;\r\n}\r\n.properties-panel > .djs-properties-panel {\r\n  padding-bottom: 70px;\r\n  min-height: 10%;\r\n}\r\n.sidebar {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 200px;\r\n  background-color: #f1f1f1;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n.sidebar a {\r\n  display: block;\r\n  color: black;\r\n  padding: 16px;\r\n  text-decoration: none;\r\n}\r\n.sidebar a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n.sidebar a:hover:not(.active) {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\ndiv.content {\r\n  margin-left: 200px;\r\n  padding: 1px 16px;\r\n  \r\n}\r\n@media screen and (max-width: 700px) {\r\n  .sidebar {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n  }\r\n  .sidebar a {float: left;}\r\n  div.content {margin-left: 0;}\r\n}\r\n@media screen and (max-width: 400px) {\r\n  .sidebar a {\r\n    text-align: center;\r\n    float: none;\r\n  }\r\n}\r\n.checkround {\r\n\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #fff ;\r\n  border-color:#636162ee;\r\n  border-style:solid;\r\n  border-width:2px;\r\n   border-radius: 50%;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkround:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* The check */\r\n.check {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 25px;\r\n  margin-bottom: 12px;\r\n  padding-right: 15px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.check input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 0;\r\n  height: 18px;\r\n  width: 18px;\r\n  background-color: #fff ;\r\n  border-color:#636162ee;\r\n  border-style:solid;\r\n  border-width:2px;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.check input:checked ~ .checkmark {\r\n  background-color: #fff  ;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.check input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.check .checkmark:after {\r\n  left: 5px;\r\n  top: 1px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid ;\r\n  border-color:#636162ee;\r\n  border-width: 0 3px 3px 0;\r\n  transform: rotate(45deg);\r\n}\r\n.cust-btn{\r\nmargin-bottom: 10px;\r\nbackground-color: #636162ee;\r\nborder-width: 2px;\r\nborder-color: #636162ee;\r\ncolor: #fff;\r\n}\r\n.cust-btn:hover{\r\n\r\nborder-color: #636162ee;\r\nbackground-color: #fff;\r\ncolor: #636162ee;\r\nborder-radius: 20px;\r\ntransform-style: 2s;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13b3JrZmxvdy92aWV3LXdvcmtmbG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQSxZQUFZLFdBQVcsQ0FBQztFQUN4QixhQUFhLGNBQWMsQ0FBQztBQUM5QjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0Y7QUFHQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtHQUNmLGtCQUFrQjtBQUNyQjtBQUtBLG9FQUFvRTtBQUNwRTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBR0EsY0FBYztBQUNkO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBLHdDQUF3QztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBSUEsd0RBQXdEO0FBQ3hEO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUEsNkRBQTZEO0FBQzdEO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBR3pCLHdCQUF3QjtBQUMxQjtBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixtQkFBbUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvdmlldy13b3JrZmxvdy92aWV3LXdvcmtmbG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhZ3JhbS1ub3RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCAxODAsIDIxLCAwLjcpO1xyXG4gIGNvbG9yOiBXaGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWluLWhlaWdodDogMTZweDtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLnByb3BlcnRpZXMtcGFuZWw6ZW1wdHkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXBhbmVsID4gLmRqcy1wcm9wZXJ0aWVzLXBhbmVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbn1cclxuLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gXHJcbi5zaWRlYmFyIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5kaXYuY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDFweCAxNnB4O1xyXG4gIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIGEge2Zsb2F0OiBsZWZ0O31cclxuICBkaXYuY29udGVudCB7bWFyZ2luLWxlZnQ6IDA7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5zaWRlYmFyIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNoZWNrcm91bmQge1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiA7XHJcbiAgYm9yZGVyLWNvbG9yOiM2MzYxNjJlZTtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOjJweDtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrcm91bmQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBUaGUgY2hlY2sgKi9cclxuLmNoZWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jaGVjayBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgO1xyXG4gIGJvcmRlci1jb2xvcjojNjM2MTYyZWU7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDoycHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAgO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5jaGVjayAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdG9wOiAxcHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCA7XHJcbiAgYm9yZGVyLWNvbG9yOiM2MzYxNjJlZTtcclxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uY3VzdC1idG57XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICM2MzYxNjJlZTtcclxuYm9yZGVyLXdpZHRoOiAycHg7XHJcbmJvcmRlci1jb2xvcjogIzYzNjE2MmVlO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG4uY3VzdC1idG46aG92ZXJ7XHJcblxyXG5ib3JkZXItY29sb3I6ICM2MzYxNjJlZTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuY29sb3I6ICM2MzYxNjJlZTtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxudHJhbnNmb3JtLXN0eWxlOiAycztcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-workflow/view-workflow.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-workflow/view-workflow.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n.numberCircle {\n  border-radius: 50%;\n  width: 36px;  height: 36px;  padding: 8px;  background: rgb(255, 0, 0);  color: rgb(255, 255, 255);  text-align: center;  font: 32px Arial, sans-serif;\n}\n</style>\n<div class=\"container content\">\n\n    <h1 class=\"display-4\">View workflow</h1>\n\n    <div #ref class=\"diagram-container\"></div>\n\n    <h3 >Failed Process instances</h3>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">State</th>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Start time</th>\n          <th scope=\"col\">End time</th>\n          <th scope=\"col\">Workflow</th>\n          <th scope=\"col\">Select All   \n            <input type=\"checkbox\"  name=\"is_all\" (change)=\"isSelected = !isSelected\">\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">Failed</th>\n          <td>1</td>\n          <td>2019-27-08T11:04:55</td>\n          <td>2019-27-08T11:04:56</td>\n          <td>Insurance quote</td>\n          <td>\n            <label class=\"check \">\n              <input type=\"checkbox\"  name=\"is_name\"  [checked]=\"isSelected\">\n            <span class=\"checkmark\"></span>\n          </label>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Failed</th>\n          <td>2</td>\n          <td>2019-27-08T11:04:56</td>\n          <td>2019-27-08T11:04:57</td>\n          <td>Insurance underwriting</td>\n          <td>\n            <label class=\"check \">\n              <input type=\"checkbox\"  name=\"is_name\" [checked]=\"isSelected\">\n            <span class=\"checkmark\"></span>\n          </label>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Failed</th>\n          <td>3</td>\n          <td>2019-27-08T11:04:56</td>\n          <td>2019-27-08T11:04:57</td>\n          <td>Adjuster allocation</td>\n          <td>\n            <label class=\"check \">\n              <input type=\"checkbox\"  name=\"is_name\" [checked]=\"isSelected\">\n            <span class=\"checkmark\"></span>\n          </label>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Failed</th>\n          <td>4</td>\n          <td>2019-27-08T11:04:56</td>\n          <td>2019-27-08T11:04:57</td>\n          <td>Claim notification</td>\n          <td>\n            <label class=\"check \">\n              <input type=\"checkbox\"  name=\"is_name\" [checked]=\"isSelected\">\n            <span class=\"checkmark\"></span>\n          </label>\n          </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Failed</th>\n          <td>5</td>\n          <td>2019-27-08T11:04:56</td>\n          <td>2019-27-08T11:04:57</td>\n          <td>Claim notification</td>\n          <td>\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n              <label class=\"check \">\n                <input type=\"checkbox\"  name=\"is_name\" [checked]=\"isSelected\">\n              <span class=\"checkmark\"></span>\n            </label>\n             \n            </div>\n          </td>\n        </tr>\n        \n      </tbody>\n    </table>\n    <button class='btn btn-lg btn-primary ' >Retry </button>\n</div>"

/***/ }),

/***/ "./src/app/view-workflow/view-workflow.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-workflow/view-workflow.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWorkflowComponent", function() { return ViewWorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-js/lib/NavigatedViewer */ "./node_modules/bpmn-js/lib/NavigatedViewer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewWorkflowComponent = /** @class */ (function () {
    function ViewWorkflowComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.url = '/assets/view-workflow.bpmn';
        this.router.params.subscribe(function (params) {
            _this.id = params[0];
            _this.ver = params[1];
        });
        this.bpmnViewer = new bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_3__["default"]({
            width: '100%',
            height: '400px'
        });
    }
    ViewWorkflowComponent.prototype.ngAfterContentInit = function () {
        this.bpmnViewer.attachTo(this.el.nativeElement);
        this.loadUrl(this.url);
    };
    ViewWorkflowComponent.prototype.ngOnChanges = function (changes) {
        if (changes.url) {
            this.loadUrl(changes.url.currentValue);
        }
    };
    ViewWorkflowComponent.prototype.ngOnDestroy = function () {
        this.bpmnViewer.destroy();
    };
    ViewWorkflowComponent.prototype.loadUrl = function (url) {
        var _this = this;
        var noteHtml = "<div class=\"numberCircle\" \n                      style=\"margin-top:-10px;margin-left:-10px;color:red;border-radius:50%;width: 25px; height: 25px;text-align: center;background:red;color:white;\">\n                        5\n                    </div>";
        var overlays = this.bpmnViewer.get('overlays');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('workflowId', this.id);
        params = params.append('version', this.ver);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append("Referrer-Policy", "no-referrer");
        this.http.get("http://localhost:8082/hbpm/process/workflow/{workflowId}/version/{version}?", { params: params, headers: headers, responseType: 'text' }).subscribe(function (xml) {
            console.log(xml);
            _this.bpmnViewer.importXML(xml, function (err) {
                if (err) {
                    return console.error('could not import BPMN 2.0 diagram', err);
                }
                // attach an overlay to a node
                overlays.add('SCAN_OK', 'note', {
                    position: {
                        bottom: 0,
                        right: 0
                    },
                    html: noteHtml
                });
                // configure scale={ min: 1 } to use non-shrinking overlays
                overlays.add('sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9', 'note', {
                    position: {
                        bottom: 0,
                        right: 0
                    },
                    scale: { min: 1 },
                    html: noteHtml
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ref'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ViewWorkflowComponent.prototype, "el", void 0);
    ViewWorkflowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-workflow',
            template: __webpack_require__(/*! ./view-workflow.component.html */ "./src/app/view-workflow/view-workflow.component.html"),
            styles: [__webpack_require__(/*! ./view-workflow.component.css */ "./src/app/view-workflow/view-workflow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewWorkflowComponent);
    return ViewWorkflowComponent;
}());



/***/ }),

/***/ "./src/app/view-workflow/view-workflow.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-workflow/view-workflow.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewWorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWorkflowModule", function() { return ViewWorkflowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_workflow_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-workflow-routing.module */ "./src/app/view-workflow/view-workflow-routing.module.ts");
/* harmony import */ var _view_workflow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-workflow.component */ "./src/app/view-workflow/view-workflow.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ViewWorkflowModule = /** @class */ (function () {
    function ViewWorkflowModule() {
    }
    ViewWorkflowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_workflow_component__WEBPACK_IMPORTED_MODULE_4__["ViewWorkflowComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _view_workflow_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewWorkflowRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ]
        })
    ], ViewWorkflowModule);
    return ViewWorkflowModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-workflow-view-workflow-module.js.map