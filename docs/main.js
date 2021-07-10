(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
    { path: 'create-employee', component: _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreateComponent"] },
    { path: 'edit-employee/:id', component: _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeEditComponent"] },
    { path: 'employees-list', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n        background-color: #333;\n      }\n      \n      li {\n        float: right;\n       \n      }\n      \n      .special{\n        float: left;\n        color: mistyrose;\n        margin-top: auto;\n        margin-bottom: auto;\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n        font-display:initial;\n        padding-top: 1.5%;\n        padding-left: 1%;\n        padding-bottom: 1%;\n      }\n      \n      li a {\n        display: block;\n        color: white;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n      \n      li a:hover:not(.active) {\n        background-color: #111;\n      }\n      \n      .active {\n        background-color: #04AA6D;\n      }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLFlBQVk7O01BRWQ7O01BQ0E7UUFDRSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsNkVBQTZFO1FBQzdFLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixxQkFBcUI7TUFDdkI7O01BRUE7UUFDRSxzQkFBc0I7TUFDeEI7O01BRUE7UUFDRSx5QkFBeUI7TUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgIFxuICAgICAgfVxuICAgICAgLnNwZWNpYWx7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb2xvcjogbWlzdHlyb3NlO1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1kaXNwbGF5OmluaXRpYWw7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxpIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsaSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xuICAgICAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n <li class=\"special\"><h5 >PARIPOORNA SOFTWARES</h5></li>\n  <li> <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/employees-list\">View Employees</a></li>\n  <li><a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/create-employee\">Add Employee</a></li>\n</ul>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meanStack';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/service/employee.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeCreateComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"],
                _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service_employee_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choco{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-style: italic;\r\n    align-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:inline-block;\r\n    align-content: center;\r\n    \r\n}\r\nbody,html{\r\n    background-image: url('m.gif');\r\n    background-repeat: repeat;\r\n    height: 100%;\r\n    background-position: center;\r\n    padding-top: 5%;\r\n    padding-bottom: 7.8%;\r\n}\r\n.container{\r\n    border-radius: 2%;\r\n    background-color: darkgray;\r\n    width: 50%;\r\n    height: 75%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    vertical-align: middle;\r\n\r\n}\r\n.button{\r\n    color: white;\r\n}\r\nimg{\r\n    height: 50%;\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1jcmVhdGUvZW1wbG95ZWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksOEJBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWVlLWNyZWF0ZS9lbXBsb3llZS1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaG9jb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuYm9keSxodG1se1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9tLmdpZik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcuOCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG59XHJcbi5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n  <div class=\"col-50\">\n    <!-- form card register -->\n  \n    <div class=\"card-body\">\n      \n      <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n        <label >REGISTRATION FORM</label>\n        <div class=\"row\">\n        <div class=\" col form-group \">\n          <label for=\"inputName\">Name</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"name\" required >\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n            Name is required.\n          </div>\n        </div>\n        <div class=\" col form-group \">\n          <label for=\"inputName\">profile</label>\n          <input class=\"form-control\" formControlName=\"profile\" type='file' (change)=\"onSelectFile($event)\">\n  \n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n            required.\n          </div>\n        </div>\n       \n        </div>\n        \n        <div class=\"row\">\n        <div class=\"col form-group\">\n          <label for=\"inputEmail3\">Email</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"email\" required>\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\n            Enter your email.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n            Enter valid email.\n          </div>\n        </div>\n\n        <div class=\"col form-group\">\n          <label for=\"inputVerify3\">Mobile No</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\" required>\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n            Enter your phone number.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n            Enter Numbers Only\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\" col form-group\">\n          <label for=\"inputPassword3\">JobType</label>\n          <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n            formControlName=\"designation\">\n            <option value=\"\">Choose...</option>\n            <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\n            </option>\n          </select>\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n            Choose designation.\n          </div>\n          <br>\n        </div>\n        <div class=\"col form-group\" >\n          <label for=\"inputPassword3\">DOB:</label>\n          <input class=\"form-control\" type=\"date\" formControlName=\"dob\">\n        </div> </div>\n\n\n        <div class=\"row text-right mb-3\">\n          <div class=\"col\">\n            <div class=\" col form-group\">\n              <label for=\"inputPassword3\">preffered Location</label>\n              <select class=\"custom-select form-control\" (change)=\"updateLocation($event.target.value)\"\n                formControlName=\"location\">\n                <option value=\"\">Choose...</option>\n                <option *ngFor=\"let employeeLocation of EmployeeLocation\" value=\"{{employeeLocation}}\">{{employeeLocation}}\n                </option>\n              </select>\n          </div></div>\n        \n          \n         <div class=\"col\" > <button class=\"btn btn-success \" type=\"submit\">Register</button></div>\n         \n            \n          \n    \n        </div>\n      </form>\n\n    </div>\n  </div><!-- form card register -->\n</div>\n\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.dob = new Date();
        this.EmployeeProfile = ['Full-time', 'Part-time', 'Consulting', '', ''];
        this.EmployeeLocation = ['chennai', 'madurai', 'bangalore', 'kerala', 'mumbai'];
        this.mainForm();
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () { };
    EmployeeCreateComponent.prototype.mainForm = function () {
        this.employeeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            location: [0],
            profile: ['']
        });
    };
    // Choose designation with select dropdown
    EmployeeCreateComponent.prototype.updateProfile = function (e) {
        this.employeeForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    EmployeeCreateComponent.prototype.updateLocation = function (e) {
        this.employeeForm.get('location').setValue(e, {
            onlySelf: true
        });
    };
    EmployeeCreateComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
        }
    };
    Object.defineProperty(EmployeeCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.employeeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.employeeForm.valid) {
            return false;
        }
        else {
            this.apiService.createEmployee(this.employeeForm.value).subscribe(function (res) {
                console.log('Employee successfully created!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/employees-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/components/employee-create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.css */ "./src/app/components/employee-create/employee-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_employee_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choco{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-style: italic;\r\n    align-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:inline-block;\r\n    align-content: center;\r\n    \r\n}\r\nbody,html{\r\n    background-image: url('UnrealisticMintyHamadryas-size_restricted.gif');\r\n    background-repeat: repeat;\r\n    height: 100%;\r\n    background-position: center;\r\n    padding-top: 5%;\r\n    padding-bottom: 7.8%;\r\n\r\n\r\n    \r\n}\r\nimg {\r\n    height: 50px;\r\n    width: 50px;\r\n   \r\n  }\r\n.container{\r\n    border-radius: 2%;\r\n    background-color: darkgray;\r\n    width: 50%;\r\n    height: 75%;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    vertical-align: middle;\r\n\r\n}\r\n.button{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1lZGl0L2VtcGxveWVlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxzRUFBb0Y7SUFDcEYseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG9CQUFvQjs7OztBQUl4QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0VBRWI7QUFDRjtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWVlLWVkaXQvZW1wbG95ZWUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob2Nve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5ib2R5LGh0bWx7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1VucmVhbGlzdGljTWludHlIYW1hZHJ5YXMtc2l6ZV9yZXN0cmljdGVkLmdpZik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcuOCU7XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgIFxyXG4gIH1cclxuLmNvbnRhaW5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG59XHJcbi5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-50\">\n        <!-- form card register -->\n     \n          <div class=\"card-body\">\n        \n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n          \n              <label class=\"choco\">UPDATE FORM</label>\n              <div class=\"row\">\n                <div class=\" col form-group \">\n                  <label for=\"inputName\">Name</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"name\"  >\n                  <!-- error -->\n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n                      Name is required.\n                    </div>\n                </div><div class=\" col form-group \">\n                  <label for=\"inputName\">profile</label> \n                  <input  type='file' (change)=\"onSelectFile($event)\">\n          \n                  <!-- error -->\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\n                    required.\n                  </div>\n                </div>\n               \n               \n              </div>\n          \n              <div class=\"row\">\n                 <div class=\"col form-group\">\n                 <label for=\"inputEmail3\">Email</label>\n                 <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n                  <!-- error -->\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\n                     Enter your email.\n                  </div>\n                 <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\n                  Enter valid email.\n                </div>\n                </div>\n  \n                <div class=\"col form-group\">\n                  <label for=\"inputVerify3\">Mobile No</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\n                  <!-- error -->\n                 <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\n                   Enter your phone number.\n                 </div>\n                <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\n                  Enter Numbers Only\n                </div>\n               </div>\n              </div>\n              <div class=\"row\">\n                <div class=\" col form-group\">\n                  <label for=\"inputPassword3\">JobType</label>\n                  <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n                      formControlName=\"designation\">\n                  <option value=\"\">Choose...</option>\n                  <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\n                 </option>\n                  </select>\n                       <!-- error -->\n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\n                      Choose designation.\n                        </div>\n                              <br>\n                 </div>\n          <div class=\"col form-group\" >\n            <label for=\"inputPassword3\">DOB:</label>\n            <input class=\"form-control\" type=\"date\" formControlName=\"dob\">\n          </div> </div>\n          \n            \n          <div class=\"row text-right mb-3\">\n            <div class=\"col\">\n              <div class=\" col form-group\">\n                <label for=\"inputPassword3\">preffered Location</label>\n                <select class=\"custom-select form-control\" (change)=\"updateLocation($event.target.value)\"\n                  formControlName=\"location\">\n                  <option value=\"\">Choose...</option>\n                  <option *ngFor=\"let employeeLocation of EmployeeLocation\" value=\"{{employeeLocation}}\">{{employeeLocation}}\n                  </option>\n                </select>\n            </div></div></div>\n\n\n\n           <div class=\"col-2\" > <button class=\"btn btn-success \" type=\"submit\">Update</button></div>\n           \n         \n\n\n        </form>\n\n\n\n      </div>\n\n\n\n\n    </div><!-- form card register -->\n  </div>\n  \n </div>\n</body>\n  "

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.dob = new Date();
        this.EmployeeLocation = ['chennai', 'madurai', 'bangalore', 'kerala', 'mumbai'];
        this.EmployeeProfile = ['Full-time', 'Part-time', 'Consulting', '', ''];
        this.Employee = [];
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        this.updateEmployee();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            location: [''],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            profile: ['']
        });
    };
    // Choose options with select-dropdown
    EmployeeEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    EmployeeEditComponent.prototype.updateLocation = function (e) {
        this.editForm.get('location').setValue(e, {
            onlySelf: true
        });
    };
    EmployeeEditComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[1]); // read file as data url
        }
    };
    Object.defineProperty(EmployeeEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeEditComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.apiService.getEmployee(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: data['designation'],
                phoneNumber: data['phoneNumber'],
                location: data['location'],
                dob: data['dob'],
                profile: data['profile']
            });
        });
    };
    EmployeeEditComponent.prototype.updateEmployee = function () {
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
            location: [''],
            profile: ['']
        });
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateEmployee(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/employees-list');
                    console.log('Content updated successfully!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/components/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/components/employee-edit/employee-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_employee_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    border-radius: 2%;\r\n   color: white;\r\n   margin-left: 2%;\r\n   \r\n}\r\nbody,html{\r\n    background-image: url('38559de45f1784e2a4310747c631b19b.gif');\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding-top: 3%;\r\n    padding-bottom: 25.6%;\r\n}\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n  }\r\ntr{\r\n    background-color: deepskyblue;\r\n}\r\nth{\r\n    background-color: midnightblue;\r\n    color: mintcream;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtHQUNsQixZQUFZO0dBQ1osZUFBZTs7QUFFbEI7QUFDQTtJQUNJLDZEQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0VBQzNCO0FBQ0Y7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgIFxyXG59XHJcbmJvZHksaHRtbHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvMzg1NTlkZTQ1ZjE3ODRlMmE0MzEwNzQ3YzYzMWIxOWIuZ2lmKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUuNiU7XHJcbn1cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG50cntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xyXG4gICAgY29sb3I6IG1pbnRjcmVhbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"container\">\n  <!-- No data message -->\n  <p *ngIf=\"Employee.length <= 0\" class=\"no-data text-center\">There is no employee added yet!</p>\n\n  <!-- Employee list -->\n  <table class=\"table table-bordered\" *ngIf=\"Employee.length > 0\">\n    <thead class=\"table-success\">\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Mobile</th>\n        <th scope=\"col\">DOB</th>\n        <th scope=\"col\">JobType</th>\n        <th scope=\"col\">Location</th>\n        <th scope=\"col\">pro</th>\n       \n        <th scope=\"col center\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of Employee; let i = index\">\n        <td scope=\"row\">{{employee.name}}</td>\n        <td>{{employee.email}}</td>\n        <td>{{employee.phoneNumber}}</td>\n         <td>{{employee.dob}}</td>\n        <td>{{employee.designation}}</td>\n        <td>{{employee.location}}</td>\n        <td>{{employee.profile}}</td>\n        \n        <td class=\"  text-center edit-block\">\n          <span class=\"edit\" [routerLink]=\"['/edit-employee/', employee._id]\">\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n          </span>\n          <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</html>"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/employee.service */ "./src/app/service/employee.service.ts");



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(apiService) {
        this.apiService = apiService;
        this.Employee = [];
        this.readEmployee();
    }
    EmployeeListComponent.prototype.ngOnInit = function () { };
    EmployeeListComponent.prototype.readEmployee = function () {
        var _this = this;
        this.apiService.getEmployees().subscribe(function (data) {
            _this.Employee = data;
        });
    };
    EmployeeListComponent.prototype.removeEmployee = function (employee, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteEmployee(employee._id).subscribe(function (data) {
                _this.Employee.splice(index, 1);
            });
        }
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/service/employee.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/employee.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    ApiService.prototype.createEmployee = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Get all employees
    ApiService.prototype.getEmployees = function () {
        return this.http.get("" + this.baseUri);
    };
    // Get employee
    ApiService.prototype.getEmployee = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Update employee
    ApiService.prototype.updateEmployee = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Delete employee
    ApiService.prototype.deleteEmployee = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Error handling 
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\crud\AngularCrud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map