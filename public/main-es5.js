(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/*!*******************************************************!*\
  !*** ../$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************/
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../frontend/src/app/age.pipe.ts":
/*!***************************************!*\
  !*** ../frontend/src/app/age.pipe.ts ***!
  \***************************************/
/*! exports provided: AgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgePipe", function() { return AgePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AgePipe = /** @class */ (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (value) {
        var ageDifMs = Date.now() - new Date(value).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AgePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'age'
        })
    ], AgePipe);
    return AgePipe;
}());



/***/ }),

/***/ "../frontend/src/app/app-routing.module.ts":
/*!*************************************************!*\
  !*** ../frontend/src/app/app-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/list/employees.list.component */ "../frontend/src/app/employees/list/employees.list.component.ts");
/* harmony import */ var _employees_add_employee_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/add/employee-add.component */ "../frontend/src/app/employees/add/employee-add.component.ts");
/* harmony import */ var _employees_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/edit/employee-edit.component */ "../frontend/src/app/employees/edit/employee-edit.component.ts");
/* harmony import */ var _employees_details_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees/details/employee-detail.component */ "../frontend/src/app/employees/details/employee-detail.component.ts");







var routes = [
    {
        path: 'employees',
        component: _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesListComponent"],
        data: { title: 'List of Employees' }
    },
    {
        path: 'employee-details/:id',
        component: _employees_details_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailComponent"],
        data: { title: 'Employee Details' }
    },
    {
        path: 'employee-add',
        component: _employees_add_employee_add_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeAddComponent"],
        data: { title: 'Add Employee' }
    },
    {
        path: 'employee-edit/:id',
        component: _employees_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeEditComponent"],
        data: { title: 'Edit Employee' }
    },
    { path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../frontend/src/app/app.component.scss":
/*!**********************************************!*\
  !*** ../frontend/src/app/app.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvV29ya3NwYWNlL25vZGUvZWR1cmVrYV9lbXBsb3llZV9kaXJlY3RvcnlfYXBwL2Zyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "../frontend/src/app/app.component.ts":
/*!********************************************!*\
  !*** ../frontend/src/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Employee Directory';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!../frontend/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../frontend/src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../frontend/src/app/app.module.ts":
/*!*****************************************!*\
  !*** ../frontend/src/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "../frontend/src/app/app-routing.module.ts");
/* harmony import */ var _age_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./age.pipe */ "../frontend/src/app/age.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "../frontend/src/app/app.component.ts");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/list/employees.list.component */ "../frontend/src/app/employees/list/employees.list.component.ts");
/* harmony import */ var _employees_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/add/employee-add.component */ "../frontend/src/app/employees/add/employee-add.component.ts");
/* harmony import */ var _employees_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employees/edit/employee-edit.component */ "../frontend/src/app/employees/edit/employee-edit.component.ts");
/* harmony import */ var _employees_details_employee_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employees/details/employee-detail.component */ "../frontend/src/app/employees/details/employee-detail.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _age_pipe__WEBPACK_IMPORTED_MODULE_5__["AgePipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesListComponent"],
                _employees_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeAddComponent"],
                _employees_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeEditComponent"],
                _employees_details_employee_detail_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"]
            ],
            exports: [
                _age_pipe__WEBPACK_IMPORTED_MODULE_5__["AgePipe"],
                _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesListComponent"],
                _employees_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeAddComponent"],
                _employees_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeEditComponent"],
                _employees_details_employee_detail_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeDetailComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../frontend/src/app/employees/add/employee-add.component.scss":
/*!*********************************************************************!*\
  !*** ../frontend/src/app/employees/add/employee-add.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}\n.example-full-width:nth-last-child(1) {\n  margin-bottom: 10px;\n}\n.button-row {\n  margin: 10px 0;\n}\n.mat-flat-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvV29ya3NwYWNlL25vZGUvZWR1cmVrYV9lbXBsb3llZV9kaXJlY3RvcnlfYXBwL2Zyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2FkZC9lbXBsb3llZS1hZGQuY29tcG9uZW50LnNjc3MiLCJmcm9udGVuZC9zcmMvYXBwL2VtcGxveWVlcy9hZGQvZW1wbG95ZWUtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImZyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2FkZC9lbXBsb3llZS1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24tcm93IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiIsIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "../frontend/src/app/employees/add/employee-add.component.ts":
/*!*******************************************************************!*\
  !*** ../frontend/src/app/employees/add/employee-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function() { return EmployeeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "../frontend/src/app/employees/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");





var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.name = '';
        this.email = '';
        this.dob = null;
        this.department = null;
        this.gender = 'male';
        this.isLoadingResults = false;
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'dob': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'department': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    EmployeeAddComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.addEmployee(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.isLoadingResults = false;
            if (id) {
                _this.router.navigate(['/employee-details', id]);
            }
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    EmployeeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-add',
            template: __webpack_require__(/*! raw-loader!./employee-add.component.html */ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/add/employee-add.component.html"),
            styles: [__webpack_require__(/*! ./employee-add.component.scss */ "../frontend/src/app/employees/add/employee-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());



/***/ }),

/***/ "../frontend/src/app/employees/details/employee-detail.component.scss":
/*!****************************************************************************!*\
  !*** ../frontend/src/app/employees/details/employee-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mat-flat-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvV29ya3NwYWNlL25vZGUvZWR1cmVrYV9lbXBsb3llZV9kaXJlY3RvcnlfYXBwL2Zyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2RldGFpbHMvZW1wbG95ZWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiZnJvbnRlbmQvc3JjL2FwcC9lbXBsb3llZXMvZGV0YWlscy9lbXBsb3llZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2VtcGxveWVlcy9kZXRhaWxzL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5leGFtcGxlLWxvYWRpbmctc2hhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1NnB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiIsIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5leGFtcGxlLWxvYWRpbmctc2hhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1NnB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "../frontend/src/app/employees/details/employee-detail.component.ts":
/*!**************************************************************************!*\
  !*** ../frontend/src/app/employees/details/employee-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "../frontend/src/app/employees/employee.service.ts");




var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.employee = { _id: '', name: '', email: '', dob: null, department: null, gender: null };
        this.isLoadingResults = true;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.params['id']);
        this.getEmployeeDetails(this.route.snapshot.params['id']);
    };
    EmployeeDetailComponent.prototype.getEmployeeDetails = function (id) {
        var _this = this;
        this.api.getEmployee(id)
            .subscribe(function (data) {
            _this.employee = data;
            console.log(_this.employee);
            _this.isLoadingResults = false;
        });
    };
    EmployeeDetailComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.deleteEmployee(id)
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.router.navigate(['/employees']);
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    EmployeeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-detail',
            template: __webpack_require__(/*! raw-loader!./employee-detail.component.html */ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/details/employee-detail.component.html"),
            styles: [__webpack_require__(/*! ./employee-detail.component.scss */ "../frontend/src/app/employees/details/employee-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());



/***/ }),

/***/ "../frontend/src/app/employees/edit/employee-edit.component.scss":
/*!***********************************************************************!*\
  !*** ../frontend/src/app/employees/edit/employee-edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}\n.example-full-width:nth-last-child(1) {\n  margin-bottom: 10px;\n}\n.button-row {\n  margin: 10px 0;\n}\n.mat-flat-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvV29ya3NwYWNlL25vZGUvZWR1cmVrYV9lbXBsb3llZV9kaXJlY3RvcnlfYXBwL2Zyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2VkaXQvZW1wbG95ZWUtZWRpdC5jb21wb25lbnQuc2NzcyIsImZyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2VkaXQvZW1wbG95ZWUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJmcm9udGVuZC9zcmMvYXBwL2VtcGxveWVlcy9lZGl0L2VtcGxveWVlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24tcm93IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiIsIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "../frontend/src/app/employees/edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ../frontend/src/app/employees/edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "../frontend/src/app/employees/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");





var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this._id = '';
        this.name = '';
        this.email = '';
        this.dob = null;
        this.department = null;
        this.gender = null;
        this.isLoadingResults = false;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        this.getEmployee(this.route.snapshot.params['id']);
        this.employeeForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'dob': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'department': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    EmployeeEditComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.api.getEmployee(id).subscribe(function (data) {
            _this._id = data._id;
            _this.employeeForm.setValue({
                name: data.name,
                email: data.email,
                dob: data.dob,
                department: data.department,
                gender: data.gender
            });
        });
    };
    EmployeeEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.updateEmployee(this._id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.isLoadingResults = false;
            if (id) {
                _this.router.navigate(['/employee-details', id]);
            }
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    EmployeeEditComponent.prototype.employeeDetails = function () {
        this.router.navigate(['/employee-details', this._id]);
    };
    EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! raw-loader!./employee-edit.component.html */ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.scss */ "../frontend/src/app/employees/edit/employee-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "../frontend/src/app/employees/employee.service.ts":
/*!*********************************************************!*\
  !*** ../frontend/src/app/employees/employee.service.ts ***!
  \*********************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api/employees";
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (heroes) { return console.log('fetched employees'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getEmployees', [])));
    };
    EmployeeService.prototype.getEmployee = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched employee id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getEmployee id=" + id)));
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.put(apiUrl, employee, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (employee) { return console.log("added employee w/ id=" + employee._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addEmployee')));
    };
    EmployeeService.prototype.updateEmployee = function (id, employee) {
        var url = apiUrl + "/" + id;
        return this.http.post(url, employee, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated employee id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateEmployee')));
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted employee id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteEmployee')));
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../frontend/src/app/employees/list/employees.list.component.scss":
/*!************************************************************************!*\
  !*** ../frontend/src/app/employees/list/employees.list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\ntable {\n  width: 100%;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n.mat-column-created {\n  max-width: 124px;\n}\n.mat-flat-button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvV29ya3NwYWNlL25vZGUvZWR1cmVrYV9lbXBsb3llZV9kaXJlY3RvcnlfYXBwL2Zyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2xpc3QvZW1wbG95ZWVzLmxpc3QuY29tcG9uZW50LnNjc3MiLCJmcm9udGVuZC9zcmMvYXBwL2VtcGxveWVlcy9saXN0L2VtcGxveWVlcy5saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQSxrQkFBQTtBQUNBOztFQUVFLGVBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImZyb250ZW5kL3NyYy9hcHAvZW1wbG95ZWVzL2xpc3QvZW1wbG95ZWVzLmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcbiAgY29sb3I6ICM5ODAwMDA7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ29sdW1uIFdpZHRocyAqL1xuLm1hdC1jb2x1bW4tbnVtYmVyLFxuLm1hdC1jb2x1bW4tc3RhdGUge1xuICBtYXgtd2lkdGg6IDY0cHg7XG59XG5cbi5tYXQtY29sdW1uLWNyZWF0ZWQge1xuICBtYXgtd2lkdGg6IDEyNHB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4iLCIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcbiAgY29sb3I6ICM5ODAwMDA7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ29sdW1uIFdpZHRocyAqL1xuLm1hdC1jb2x1bW4tbnVtYmVyLFxuLm1hdC1jb2x1bW4tc3RhdGUge1xuICBtYXgtd2lkdGg6IDY0cHg7XG59XG5cbi5tYXQtY29sdW1uLWNyZWF0ZWQge1xuICBtYXgtd2lkdGg6IDEyNHB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "../frontend/src/app/employees/list/employees.list.component.ts":
/*!**********************************************************************!*\
  !*** ../frontend/src/app/employees/list/employees.list.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function() { return EmployeesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "../frontend/src/app/employees/employee.service.ts");



var EmployeesListComponent = /** @class */ (function () {
    function EmployeesListComponent(api) {
        this.api = api;
        this.displayedColumns = ['name', 'email', 'dob', 'department', 'gender'];
        this.data = [];
        this.isLoadingResults = true;
    }
    EmployeesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getEmployees()
            .subscribe(function (res) {
            _this.data = res;
            console.log(_this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    EmployeesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employees',
            template: __webpack_require__(/*! raw-loader!./employees.list.component.html */ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/list/employees.list.component.html"),
            styles: [__webpack_require__(/*! ./employees.list.component.scss */ "../frontend/src/app/employees/list/employees.list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeesListComponent);
    return EmployeesListComponent;
}());



/***/ }),

/***/ "../frontend/src/environments/environment.ts":
/*!***************************************************!*\
  !*** ../frontend/src/environments/environment.ts ***!
  \***************************************************/
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

/***/ "../frontend/src/main.ts":
/*!*******************************!*\
  !*** ../frontend/src/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "../frontend/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "../frontend/src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../node_modules/raw-loader/index.js!../frontend/src/app/app.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!../frontend/src/app/app.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/add/employee-add.component.html":
/*!************************************************************************************************!*\
  !*** ../node_modules/raw-loader!../frontend/src/app/employees/add/employee-add.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/employees']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit(employeeForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Name\" formControlName=\"name\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('name').valid && employeeForm.get('name').touched\">Please enter Employee Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Email\" formControlName=\"email\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('email').valid && employeeForm.get('email').touched\">Please enter Employee Email</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee DOB\" formControlName=\"dob\"\n               [matDatepicker]=\"picker\" [errorStateMatcher]=\"matcher\">\n               <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n               <mat-datepicker #picker></mat-datepicker>\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('dob').valid && employeeForm.get('dob').touched\">Please enter Employee DOB</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Department\" formControlName=\"department\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('department').valid && employeeForm.get('department').touched\">Please enter Employee Department</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Employee Gender</mat-label>\n        <mat-select formControlName=\"gender\">\n          <mat-option value=\"male\">Male</mat-option>\n          <mat-option value=\"female\">Female</mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('gender').valid && employeeForm.get('gender').touched\">Please enter Employee Gender</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!employeeForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/details/employee-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/raw-loader!../frontend/src/app/employees/details/employee-detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/employees']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title><h2>{{employee.name}}</h2></mat-card-title>\n      <mat-card-subtitle>{{employee.email}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <dl>\n        <dt>Employee DOB:</dt>\n        <dd>{{employee.dob}}</dd>\n        <dt>Employee Age:</dt>\n        <dd>{{employee.dob | age}}</dd>\n        <dt>Employee Department:</dt>\n        <dd>{{employee.department}}</dd>\n        <dt>Employee Gender:</dt>\n        <dd>{{employee.gender}}</dd>\n      </dl>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/employee-edit', employee._id]\"><mat-icon>edit</mat-icon></a>\n      <a mat-flat-button color=\"warn\" (click)=\"deleteEmployee(employee._id)\"><mat-icon>delete</mat-icon></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/edit/employee-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ../node_modules/raw-loader!../frontend/src/app/employees/edit/employee-edit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" (click)=\"employeeDetails()\"><mat-icon>info</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit(employeeForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Name\" formControlName=\"name\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('name').valid && employeeForm.get('name').touched\">Please enter Employee Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Email\" formControlName=\"email\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('email').valid && employeeForm.get('email').touched\">Please enter Employee Email</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee DOB\" formControlName=\"dob\"\n              [matDatepicker]=\"picker\" [errorStateMatcher]=\"matcher\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('dob').valid && employeeForm.get('dob').touched\">Please enter Employee DOB</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Employee Department\" formControlName=\"department\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('department').valid && employeeForm.get('department').touched\">Please enter Employee Department</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Employee Gender</mat-label>\n        <mat-select formControlName=\"gender\">\n          <mat-option value=\"male\">Male</mat-option>\n          <mat-option value=\"female\">Female</mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"!employeeForm.get('gender').valid && employeeForm.get('gender').touched\">Please enter Employee Gender</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!employeeForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../frontend/src/app/employees/list/employees.list.component.html":
/*!***************************************************************************************************!*\
  !*** ../node_modules/raw-loader!../frontend/src/app/employees/list/employees.list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/employee-add']\"><mat-icon>add</mat-icon></a>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"name\" matSortDisableClear matSortDirection=\"asc\">\n\n      <!-- Employee Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Employee Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n      </ng-container>\n\n      <!-- Employee Email Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Employee Email</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n      </ng-container>\n\n      <!-- Employee DOB Column -->\n      <ng-container matColumnDef=\"dob\">\n        <th mat-header-cell *matHeaderCellDef>Employee Age</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.dob | age}}</td>\n      </ng-container>\n\n      <!-- Employee Department Column -->\n      <ng-container matColumnDef=\"department\">\n        <th mat-header-cell *matHeaderCellDef>Employee Department</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.department}}</td>\n      </ng-container>\n\n      <!-- Employee Department Column -->\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef>Employee Gender</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.gender}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/employee-details/', row._id]\"></tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ../frontend/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Data/Workspace/node/edureka_employee_directory_app/frontend/src/main.ts */"../frontend/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map