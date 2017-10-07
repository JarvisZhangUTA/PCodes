webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  color: #777;\n}\n\n.pure-img-responsive {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n  transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n  position: relative;\n  left: 0;\n  padding-left: 0;\n}\n#layout.active #menu {\n  left: 150px;\n  width: 150px;\n}\n\n#layout.active .menu-link {\n  left: 150px;\n}\n\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n  margin: 0 auto;\n  padding: 0 2em;\n  max-width: 800px;\n  margin-bottom: 50px;\n  line-height: 1.6em;\n}\n\n.header {\n  margin: 0;\n  color: #333;\n  text-align: center;\n  padding: 2.5em 2em 0;\n  border-bottom: 1px solid #eee;\n}\n.header h1 {\n  margin: 0.2em 0;\n  font-size: 3em;\n  font-weight: 300;\n}\n.header h2 {\n  font-weight: 300;\n  color: #ccc;\n  padding: 0;\n  margin-top: 0;\n}\n\n.content-subhead {\n  margin: 50px 0 20px 0;\n  font-weight: 300;\n  color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n  margin-left: -150px; /* \"#menu\" width */\n  width: 150px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000; /* so the menu or its navicon stays above all content */\n  background: #191818;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n/*\nAll anchors inside the menu should be styled like this.\n*/\n#menu a {\n  color: #999;\n  border: none;\n  padding: 0.6em 0 0.6em 0.6em;\n}\n\n/*\nRemove all background/borders, since we are applying them to #menu.\n*/\n#menu .pure-menu,\n#menu .pure-menu ul {\n  border: none;\n  background: transparent;\n}\n\n/*\nAdd that light border to separate items into groups.\n*/\n#menu .pure-menu ul,\n#menu .pure-menu .menu-item-divided {\n  border-top: 1px solid #333;\n}\n/*\nChange color of the anchor links on hover/focus.\n*/\n#menu .pure-menu li a:hover,\n#menu .pure-menu li a:focus {\n  background: #333;\n}\n\n/*\nThis styles the selected menu item `<li>`.\n*/\n#menu .pure-menu-selected,\n#menu .pure-menu-heading {\n  background: #4CAF50;\n}\n/*\nThis styles a link within a selected menu item `<li>`.\n*/\n#menu .pure-menu-selected a {\n  color: #fff;\n}\n\n/*\nThis styles the menu heading.\n*/\n#menu .pure-menu-heading {\n  font-size: 140%;\n  color: #fff;\n  margin: 0;\n}\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n  position: fixed;\n  display: block; /* show this only on small screens */\n  top: 0;\n  left: 0; /* \"#menu width\" */\n  background: #0C0C0C;\n  background: rgba(0,0,0,0.7);\n  font-size: 10px; /* change this value to increase/decrease button size */\n  z-index: 10;\n  width: 2em;\n  height: auto;\n  padding: 2.1em 1.6em;\n}\n\n.menu-link:hover,\n.menu-link:focus {\n  background: #0C0C0C;\n}\n\n.menu-link span {\n  position: relative;\n  display: block;\n}\n\n.menu-link span,\n.menu-link span:before,\n.menu-link span:after {\n  background-color: #fff;\n  width: 100%;\n  height: 0.2em;\n}\n\n.menu-link span:before,\n.menu-link span:after {\n  position: absolute;\n  margin-top: -0.6em;\n  content: \" \";\n}\n\n.menu-link span:after {\n  margin-top: 0.6em;\n}\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n  .header,\n  .content {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  #layout {\n    padding-left: 150px; /* left col width \"#menu\" */\n    left: 0;\n  }\n  #menu {\n    left: 150px;\n  }\n\n  .menu-link {\n    position: fixed;\n    left: 150px;\n    display: none;\n  }\n\n  #layout.active .menu-link {\n    left: 150px;\n  }\n}\n\n@media (max-width: 48em) {\n  /* Only apply this when the window is small. Otherwise, the following\n  case results in extra padding on the left:\n      * Make the window small.\n      * Tap the menu to trigger the active state.\n      * Make the window large again.\n  */\n  #layout.active {\n    position: relative;\n    left: 150px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n<div id=\"layout\">\n\n  <app-menu></app-menu>\n\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_problem_list_problem_list_component__ = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_problem_detail_problem_detail_component__ = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_new_problem_new_problem_component__ = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_callback_callback_component__ = __webpack_require__("../../../../../src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_collaborate_collaborate_service__ = __webpack_require__("../../../../../src/app/services/collaborate/collaborate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_room_list_room_list_component__ = __webpack_require__("../../../../../src/app/components/room-list/room-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_room_detail_room_detail_component__ = __webpack_require__("../../../../../src/app/components/room-detail/room-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_room_list_room_list_component__["a" /* RoomListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_room_detail_room_detail_component__["a" /* RoomDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng4_loading_spinner__["a" /* Ng4LoadingSpinnerModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_collaborate_collaborate_service__["a" /* CollaborateService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_new_problem_new_problem_component__ = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_callback_callback_component__ = __webpack_require__("../../../../../src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_room_list_room_list_component__ = __webpack_require__("../../../../../src/app/components/room-list/room-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_room_detail_room_detail_component__ = __webpack_require__("../../../../../src/app/components/room-detail/room-detail.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: 'problem/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */]
    },
    {
        path: 'rooms',
        component: __WEBPACK_IMPORTED_MODULE_5__components_room_list_room_list_component__["a" /* RoomListComponent */]
    },
    {
        path: 'room/:sessionId',
        component: __WEBPACK_IMPORTED_MODULE_6__components_room_detail_room_detail_component__["a" /* RoomDetailComponent */]
    },
    {
        path: 'new-problem',
        component: __WEBPACK_IMPORTED_MODULE_3__components_new_problem_new_problem_component__["a" /* NewProblemComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_4__components_callback_callback_component__["a" /* CallbackComponent */]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"../../../assets/img/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        this.auth.handleAuthentication();
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-callback',
        template: __webpack_require__("../../../../../src/app/components/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CallbackComponent);

var _a;
//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  color: #777;\n}\n\n.pure-img-responsive {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n  transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n  position: relative;\n  left: 0;\n  padding-left: 0;\n}\n#layout.active #menu {\n  left: 150px;\n  width: 150px;\n}\n\n#layout.active .menu-link {\n  left: 150px;\n}\n\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n  margin: 0 auto;\n  padding: 0 2em;\n  max-width: 800px;\n  margin-bottom: 50px;\n  line-height: 1.6em;\n}\n\n.header {\n  margin: 0;\n  color: #333;\n  text-align: center;\n  padding: 2.5em 2em 0;\n  border-bottom: 1px solid #eee;\n}\n.header h1 {\n  margin: 0.2em 0;\n  font-size: 3em;\n  font-weight: 300;\n}\n.header h2 {\n  font-weight: 300;\n  color: #ccc;\n  padding: 0;\n  margin-top: 0;\n}\n\n.content-subhead {\n  margin: 50px 0 20px 0;\n  font-weight: 300;\n  color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n  margin-left: -150px; /* \"#menu\" width */\n  width: 150px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 1000; /* so the menu or its navicon stays above all content */\n  background: #191818;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n/*\nAll anchors inside the menu should be styled like this.\n*/\n#menu a {\n  color: #999;\n  border: none;\n  padding: 0.6em 0 0.6em 0.6em;\n}\n\n/*\nRemove all background/borders, since we are applying them to #menu.\n*/\n#menu .pure-menu,\n#menu .pure-menu ul {\n  border: none;\n  background: transparent;\n}\n\n/*\nAdd that light border to separate items into groups.\n*/\n#menu .pure-menu ul,\n#menu .pure-menu .menu-item-divided {\n  border-top: 1px solid #333;\n}\n/*\nChange color of the anchor links on hover/focus.\n*/\n#menu .pure-menu li a:hover,\n#menu .pure-menu li a:focus {\n  background: #333;\n}\n\n/*\nThis styles the selected menu item `<li>`.\n*/\n#menu .pure-menu-selected,\n#menu .pure-menu-heading {\n  background: #4CAF50;\n}\n/*\nThis styles a link within a selected menu item `<li>`.\n*/\n#menu .pure-menu-selected a {\n  color: #fff;\n}\n\n/*\nThis styles the menu heading.\n*/\n#menu .pure-menu-heading {\n  font-size: 140%;\n  color: #fff;\n  margin: 0;\n}\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n  position: fixed;\n  display: block; /* show this only on small screens */\n  top: 0;\n  left: 0; /* \"#menu width\" */\n  background: #0C0C0C;\n  background: rgba(0,0,0,0.7);\n  font-size: 10px; /* change this value to increase/decrease button size */\n  z-index: 10;\n  width: 2em;\n  height: auto;\n  padding: 2.1em 1.6em;\n}\n\n.menu-link:hover,\n.menu-link:focus {\n  background: #0C0C0C;\n}\n\n.menu-link span {\n  position: relative;\n  display: block;\n}\n\n.menu-link span,\n.menu-link span:before,\n.menu-link span:after {\n  background-color: #fff;\n  width: 100%;\n  height: 0.2em;\n}\n\n.menu-link span:before,\n.menu-link span:after {\n  position: absolute;\n  margin-top: -0.6em;\n  content: \" \";\n}\n\n.menu-link span:after {\n  margin-top: 0.6em;\n}\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n  .header,\n  .content {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  #layout {\n    padding-left: 150px; /* left col width \"#menu\" */\n    left: 0;\n  }\n  #menu {\n    left: 150px;\n  }\n\n  .menu-link {\n    position: fixed;\n    left: 150px;\n    display: none;\n  }\n\n  #layout.active .menu-link {\n    left: 150px;\n  }\n}\n\n@media (max-width: 48em) {\n  /* Only apply this when the window is small. Otherwise, the following\n  case results in extra padding on the left:\n      * Make the window small.\n      * Tap the menu to trigger the active state.\n      * Make the window large again.\n  */\n  #layout.active {\n    position: relative;\n    left: 150px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\">\n  <div class=\"pure-menu\">\n    <div class=\"pure-menu-heading\">\n      {{title}}\n    </div>\n\n    <ul class=\"pure-menu-list\">\n\n      <li class=\"pure-menu-item\">\n        <a [routerLink]=\"['']\" class=\"pure-menu-link\">\n          <i class=\"fa fa-th-list\" aria-hidden=\"true\">&nbsp;&nbsp;Problem list</i>\n        </a>\n      </li>\n      <li class=\"pure-menu-item\">\n        <a *ngIf=\"authService.isAuthenticated()\" [routerLink]=\"['rooms']\" class=\"pure-menu-link\">\n          <i class=\"fa fa-group\" aria-hidden=\"true\">&nbsp;&nbsp;Rooms</i>\n        </a>\n      </li>\n      <li class=\"pure-menu-item\">\n        <a [routerLink]=\"['/new-problem']\" class=\"pure-menu-link\">\n          <i class=\"fa fa-heart\" aria-hidden=\"true\">&nbsp;&nbsp;Contribute</i>\n        </a>\n      </li>\n\n      <li class=\"pure-menu-item menu-item-divided\">\n        <a *ngIf=\"!authService.isAuthenticated()\"  (click)=\"authService.login()\" class=\"pure-menu-link\">\n          <i  class=\"fa fa-sign-in\" aria-hidden=\"true\">\n            &nbsp;&nbsp;Sign in\n          </i>\n        </a>\n\n        <a *ngIf=\"authService.isAuthenticated()\" (click)=\"authService.logout()\" class=\"pure-menu-link\">\n          <i class=\"fa fa-sign-out\" aria-hidden=\"true\">\n            &nbsp;&nbsp;Sign Out\n          </i>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(authService) {
        this.authService = authService;
        this.title = 'PCodes';
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.email = localStorage.getItem('email');
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding: 20px;\n}\n\n.img-side{\n  margin-left: 20%;\n  width: 70%;\n}\n\nlabel{\n  margin-top: 10px;\n}\n\ntextarea{\n  resize: none;\n  z-index: -1;\n}\n\nselect optgroup{\n  padding: 3px;\n  color:#757575;\n  font-style:normal;\n  font-weight:normal;\n  font-size: 70%;\n}\n\nselect option{\n  color: #0C0C0C;\n  font-size: 130%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"pure-u-1-2 pure-form pure-form-stacked\">\n      <fieldset>\n        <legend>Adding Question Application</legend>\n\n        <form #formRef = \"ngForm\">\n          <label for=\"title\">Title</label>\n          <input class=\"pure-input-1\" id=\"title\"\n                 name=\"title\"\n                 [(ngModel)]=\"problem.title\"\n                 type=\"text\" placeholder=\"Question Title\">\n\n          <label for=\"description\">Description</label>\n          <textarea class=\"pure-input-1\" rows=\"7\"\n                    name=\"description\"\n                    [(ngModel)]=\"problem.description\"\n                    id=\"description\" placeholder=\"Question Description\"></textarea>\n\n          <label for=\"difficulty\">Difficulty</label>\n          <select id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"problem.difficulty\">\n            <optgroup label=\"Easy\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n            </optgroup>\n            <optgroup label=\"Medium\">\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n            </optgroup>\n            <optgroup label=\"Hard\">\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n            </optgroup>\n          </select>\n\n          <button type=\"submit\"\n                  (click)=\"addProblem()\"\n                  class=\"pull-right pure-button pure-button-primary\">Submit</button>\n        </form>\n      </fieldset>\n    </div>\n    <div class=\"pure-u-2-5\">\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var default_problem = Object.freeze({
    id: -1,
    title: '',
    description: '',
    difficulty: 1
});
var NewProblemComponent = (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.problem = Object.assign({}, default_problem);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        if (this.problem.title.length > 0 && this.problem.description.length > 0) {
            this.dataService.addProblem(this.problem)
                .catch(function (error) { return console.log(error); });
            this.problem = Object.assign({}, default_problem);
        }
    };
    return NewProblemComponent;
}());
NewProblemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-problem',
        template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */]) === "function" && _a || Object])
], NewProblemComponent);

var _a;
//# sourceMappingURL=new-problem.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding: 20px;\n}\n\n.detail{\n  font-size: 110%;\n}\n\n#editor {\n  height: 500px;\n  width: 100%;\n}\n\n#log-section {\n  margin: 0 10px;\n  padding: 20px;\n  height: 460px;\n  background: #FAFAFA;\n\n  font-size: small;\n  font-weight: bold;\n\n  word-break:break-all;\n}\n\n.difficulty {\n  padding: 0 10px;\n}\n\n.diff-1{\n  border-left: 6px solid #b9f6ca;\n}\n\n.diff-2{\n  border-left: 6px solid #69f0ae;\n}\n\n.diff-3{\n  border-left: 6px solid #00e676;\n}\n\n.diff-4{\n  border-left: 6px solid #ffca28;\n}\n\n.diff-5{\n  border-left: 6px solid #ffb300;\n}\n\n.diff-6{\n  border-left: 6px solid #ff8f00;\n}\n\n.diff-7{\n  border-left: 6px solid #e53935;\n}\n\n.diff-8{\n  border-left: 6px solid #d32f2f;\n}\n\n.diff-9{\n  border-left: 6px solid #b71c1c;\n}\n\np{\n  line-height: 200%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom: 80px;\">\n\n\n  <div *ngIf=\"problem\" class=\"pure-u-18-24\">\n    <h2 class=\"difficulty diff-{{problem.difficulty}}\">\n      {{problem.id}} {{problem.title}}\n    </h2>\n\n    <p class=\"detail\">\n      {{problem.description}}\n    </p>\n  </div>\n\n  <div class=\"pure-g\">\n    <div class=\"pure-u-18-24\">\n\n      <div class=\"pull-right\">\n        <div class=\"pure-menu pure-menu-horizontal\">\n          <ul class=\"pure-menu-list\">\n            <li *ngIf=\"sessionId\" [routerLink]=\"['/room', sessionId]\" class=\"pure-menu-item\">\n              <a class=\"pure-menu-link\">Create Room</a>\n            </li>\n            <li class=\"pure-menu-item\">\n              <a (click)=\"resetEditor()\" class=\"pure-menu-link\">Reset</a>\n            </li>\n            <li class=\"pure-menu-item pure-menu-has-children pure-menu-allow-hover\">\n              <a class=\"pure-menu-link\">{{language}}</a>\n              <ul class=\"pure-menu-children\">\n                <li *ngFor=\"let lang of languages\" (click)=\"changeLang(lang)\" class=\"pure-menu-item\">\n                  <a class=\"pure-menu-link\">{{lang}}</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"editor\"></div>\n\n      <br>\n      <button (click)=\"submitCode()\" class=\"pull-right pure-button pure-button-primary\">Submit</button>\n\n    </div>\n\n    <div class=\"pure-u-6-24\">\n      <div class=\"pure-menu-link\">Results</div>\n      <div id=\"log-section\">\n          <div *ngIf=\"result\">\n            <span style=\"color: #757575\">Build:</span><br>\n            {{result.build}}<br>\n            <span style=\"color: #757575\">Output:</span><br>\n            {{result.run}}<br>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_values_default_content__ = __webpack_require__("../../../../../src/assets/values/default-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(spinnerService, authService, router, dataService) {
        this.spinnerService = spinnerService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.language = 'Java';
        this.languages = ['Java', 'Python'];
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) {
                _this.problem = problem;
                if (_this.authService.isAuthenticated()) {
                    _this.sessionId = _this.problem.id + '^' + localStorage.getItem('email');
                }
            });
        });
        this.initEditor();
    };
    ProblemDetailComponent.prototype.initEditor = function () {
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/monokai');
        this.changeLang('Java');
    };
    ProblemDetailComponent.prototype.changeLang = function (lang) {
        this.language = lang;
        this.editor.setValue(__WEBPACK_IMPORTED_MODULE_3__assets_values_default_content__["a" /* default_content */][this.language]);
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
    };
    ProblemDetailComponent.prototype.resetEditor = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'Gonna lose your code',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Reset'
        }).then(function () {
            _this.changeLang(_this.language);
        }, function () {
        });
    };
    ProblemDetailComponent.prototype.submitCode = function () {
        var _this = this;
        this.spinnerService.show();
        var userCode = this.editor.getValue();
        var userData = {
            code: userCode,
            lang: this.language.toLowerCase()
        };
        this.dataService.submitCode(userData)
            .then(function (res) {
            _this.spinnerService.hide();
            _this.result = res;
        });
    };
    return ProblemDetailComponent;
}());
ProblemDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-problem-detail',
        template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__["a" /* DataService */]) === "function" && _d || Object])
], ProblemDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=problem-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item{\n  padding: 10px;\n}\n\n.list-item:hover{\n  background: #eeeeee;\n}\n\n.difficulty {\n  font-size: 70%;\n  padding: 5px;\n}\n\n.diff-1{\n  border-left: 6px solid #b9f6ca;\n}\n\n.diff-2{\n  border-left: 6px solid #69f0ae;\n}\n\n.diff-3{\n  border-left: 6px solid #00e676;\n}\n\n.diff-4{\n  border-left: 6px solid #ffca28;\n}\n\n.diff-5{\n  border-left: 6px solid #ffb300;\n}\n\n.diff-6{\n  border-left: 6px solid #ff8f00;\n}\n\n.diff-7{\n  border-left: 6px solid #e53935;\n}\n\n.diff-8{\n  border-left: 6px solid #d32f2f;\n}\n\n.diff-9{\n  border-left: 6px solid #b71c1c;\n}\n\ntd{\n  padding: 20px;\n}\n\nth{\n  padding: 14px;\n}\n\ntable{\n  width: 100%;\n  border-right: 0;\n  border-left: 0;\n}\n\n.icon{\n  color: #fff;\n  text-shadow: 1px 1px 1px #ccc;\n  font-size: 1.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"pure-table pure-table-horizontal\">\n\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Level</th>\n      <th>Title</th>\n      <th>Acceptance</th>\n    </tr>\n  </thead>\n\n  <tbody>\n\n    <tr class=\"list-item\" *ngFor=\"let problem of problems\">\n      <td>\n        {{problem.id}}\n      </td>\n      <td>\n        <div class=\"difficulty diff-{{problem.difficulty}}\">{{difficulties[problem.difficulty]}}</div>\n      </td>\n      <td>\n        <a [routerLink]=\"['/problem',problem.id]\">{{problem.title}}</a>\n      </td>\n      <td>\n        0.00%\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemListComponent = (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.difficulties = ['', 'Easy1', 'Easy2', 'Easy3', 'Medium1', 'Medium2', 'Medium3', 'Hard1', 'Hard2', 'Hard3'];
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscription = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-problem-list',
        template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ProblemListComponent);

var _a;
//# sourceMappingURL=problem-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/room-detail/room-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding: 20px;\n}\n\n.detail{\n  font-size: 110%;\n}\n\n#editor {\n  height: 500px;\n  width: 100%;\n}\n\n#log-section {\n  margin: 0 10px 40px 20px;\n  min-height: 80px;\n  background: #FAFAFA;\n}\n\n.member {\n  padding: 0 10px;\n  font-size: 80%;\n}\n\n.difficulty {\n  padding: 0 10px;\n}\n\n.diff-1{\n  border-left: 6px solid #b9f6ca;\n}\n\n.diff-2{\n  border-left: 6px solid #69f0ae;\n}\n\n.diff-3{\n  border-left: 6px solid #00e676;\n}\n\n.diff-4{\n  border-left: 6px solid #ffca28;\n}\n\n.diff-5{\n  border-left: 6px solid #ffb300;\n}\n\n.diff-6{\n  border-left: 6px solid #ff8f00;\n}\n\n.diff-7{\n  border-left: 6px solid #e53935;\n}\n\n.diff-8{\n  border-left: 6px solid #d32f2f;\n}\n\n.diff-9{\n  border-left: 6px solid #b71c1c;\n}\n\np{\n  line-height: 200%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-detail/room-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pure-g\">\n\n  <div class=\"pure-u-18-24\">\n    <div *ngIf=\"problem\">\n      <h2 class=\"difficulty diff-{{problem.difficulty}}\">\n        {{problem.id}} {{problem.title}}\n      </h2>\n\n      <p class=\"detail\">\n        {{problem.description}}\n      </p>\n    </div>\n\n    <div class=\"pull-right\">\n      <div class=\"pure-menu pure-menu-horizontal\">\n        <ul class=\"pure-menu-list\">\n          <li class=\"pure-menu-item pure-menu-selected\">\n            <a (click)=\"resetEditor()\" class=\"pure-menu-link\">Reset</a>\n          </li>\n          <li class=\"pure-menu-item pure-menu-has-children pure-menu-allow-hover\">\n            <a class=\"pure-menu-link\">{{language}}</a>\n            <ul class=\"pure-menu-children\">\n              <li *ngFor=\"let lang of languages\" (click)=\"changeLang(lang)\" class=\"pure-menu-item\">\n                <a class=\"pure-menu-link\">{{lang}}</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div id=\"editor\"></div>\n\n    <br>\n    <button (click)=\"submitCode()\" class=\"pull-right pure-button pure-button-primary\">Submit</button>\n\n  </div>\n\n  <div class=\"pure-u-1-24\"></div>\n\n  <div *ngIf=\"room\" class=\"pure-u-5-24\">\n    <h2 style=\"color: #4CAF50;\">Who else here</h2>\n    <p *ngFor=\"let member of room.members\"\n       class=\"member\"\n       [style.border-left] = \"'6px solid ' + member.color\">\n      {{member.email}}\n    </p>\n  </div>\n</div>\n\n<div class=\"pure-g\">\n  <div class=\"pure-u-18-24\">\n    <div id=\"log-section\">\n      <div *ngIf=\"result\">\n        <span style=\"color: #757575\">Build:</span><br>\n        {{result.build}}<br>\n        <span style=\"color: #757575\">Output:</span><br>\n        {{result.run}}<br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/room-detail/room-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_values_default_content__ = __webpack_require__("../../../../../src/assets/values/default-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_collaborate_collaborate_service__ = __webpack_require__("../../../../../src/app/services/collaborate/collaborate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoomDetailComponent = (function () {
    function RoomDetailComponent(sanitizer, collaborateService, router, dataService, spinnerService) {
        this.sanitizer = sanitizer;
        this.collaborateService = collaborateService;
        this.router = router;
        this.dataService = dataService;
        this.spinnerService = spinnerService;
        this.language = 'Java';
        this.languages = ['Java', 'Python'];
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.sessionId = params['sessionId'];
            _this.email = localStorage.getItem('email');
            var id = _this.sessionId.split('^')[0];
            _this.dataService.getProblem(+id)
                .then(function (problem) {
                _this.problem = problem;
            });
            _this.initEditor();
            _this.collaborateService.init(_this.sessionId, _this.email, _this.editor);
            _this.collaborateService.restoreBuffer();
            _this.subscription = _this.collaborateService.getRoom(_this.sessionId)
                .subscribe(function (res) { return _this.room = res; });
        });
    };
    RoomDetailComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/monokai');
        this.changeLang('Java');
        this.editor.lastAppliedChange = null;
        // register change callback
        this.editor.on('change', function (e) {
            if (_this.editor.lastAppliedChange !== e) {
                _this.collaborateService.change(JSON.stringify(e));
            }
        });
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            _this.collaborateService.cursorMove(JSON.stringify(cursor));
        });
    };
    RoomDetailComponent.prototype.changeLang = function (lang) {
        this.language = lang;
        this.editor.setValue(__WEBPACK_IMPORTED_MODULE_3__assets_values_default_content__["a" /* default_content */][this.language]);
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
    };
    RoomDetailComponent.prototype.resetEditor = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'Gonna lose your code',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Reset'
        }).then(function () {
            _this.changeLang(_this.language);
        }, function () {
        });
    };
    RoomDetailComponent.prototype.submitCode = function () {
        var _this = this;
        this.spinnerService.show();
        var userCode = this.editor.getValue();
        var userData = {
            code: userCode,
            lang: this.language.toLowerCase()
        };
        this.dataService.submitCode(userData)
            .then(function (res) {
            _this.spinnerService.hide();
            _this.result = res;
        });
    };
    return RoomDetailComponent;
}());
RoomDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-room-detail',
        template: __webpack_require__("../../../../../src/app/components/room-detail/room-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/room-detail/room-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_collaborate_collaborate_service__["a" /* CollaborateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_collaborate_collaborate_service__["a" /* CollaborateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _e || Object])
], RoomDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=room-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/room-list/room-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item{\n  padding: 10px;\n}\n\n.list-item:hover{\n  background: #eeeeee;\n}\n\n.difficulty {\n  font-size: 70%;\n  padding: 5px;\n}\n\n.diff-1{\n  border-left: 6px solid #b9f6ca;\n}\n\n.diff-2{\n  border-left: 6px solid #69f0ae;\n}\n\n.diff-3{\n  border-left: 6px solid #00e676;\n}\n\n.diff-4{\n  border-left: 6px solid #ffca28;\n}\n\n.diff-5{\n  border-left: 6px solid #ffb300;\n}\n\n.diff-6{\n  border-left: 6px solid #ff8f00;\n}\n\n.diff-7{\n  border-left: 6px solid #e53935;\n}\n\n.diff-8{\n  border-left: 6px solid #d32f2f;\n}\n\n.diff-9{\n  border-left: 6px solid #b71c1c;\n}\n\ntd{\n  padding: 20px;\n}\n\nth{\n  padding: 14px;\n}\n\ntable{\n  width: 100%;\n  border-right: 0;\n  border-left: 0;\n}\n\n.icon{\n  color: #fff;\n  text-shadow: 1px 1px 1px #ccc;\n  font-size: 1.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-list/room-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"pure-table pure-table-horizontal\">\n\n  <thead>\n  <tr>\n    <th>Problem</th>\n    <th>Owner</th>\n    <th>Members</th>\n  </tr>\n  </thead>\n\n  <tbody>\n\n  <tr [routerLink]=\"['/room',room.sessionId]\" class=\"list-item\" *ngFor=\"let room of rooms\">\n    <td>Problem {{room.problem}}</td>\n    <td>{{room.owner}}</td>\n    <td>{{room.members.length}}</td>\n  </tr>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/room-list/room-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collaborate_collaborate_service__ = __webpack_require__("../../../../../src/app/services/collaborate/collaborate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomListComponent = (function () {
    function RoomListComponent(collaborateService, dataService) {
        this.collaborateService = collaborateService;
        this.dataService = dataService;
    }
    RoomListComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomListComponent.prototype.getRooms = function () {
        var _this = this;
        this.collaborateService.getRooms()
            .then(function (res) {
            _this.rooms = Object.values(res);
        });
    };
    return RoomListComponent;
}());
RoomListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-room-list',
        template: __webpack_require__("../../../../../src/app/components/room-list/room-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/room-list/room-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_collaborate_collaborate_service__["a" /* CollaborateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collaborate_collaborate_service__["a" /* CollaborateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */]) === "function" && _b || Object])
], RoomListComponent);

var _a, _b;
//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
// src/app/auth/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'UxuUW7XwLsLRZZV5ZlSF67ElgMQON7q8',
            domain: 'jarviszhang.auth0.com',
            responseType: 'token id_token',
            audience: 'https://jarviszhang.auth0.com/userinfo',
            redirectUri: window.location.origin + '/callback',
            scope: 'openid email'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['']);
            }
            else if (err) {
                _this.router.navigate(['']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('email', authResult.idTokenPayload.email);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('email');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/collaborate/collaborate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var empty_room = {
    sessionId: '',
    owner: '',
    problem: 0,
    members: []
};
var CollaborateService = (function () {
    function CollaborateService(http) {
        this.http = http;
    }
    CollaborateService.prototype.init = function (sessionId, email, editor) {
        var _this = this;
        console.log('Client init SocketIO');
        this.markers = {};
        this.publisher = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](empty_room);
        this.collSocket = io(window.location.origin, { query: 'data=' + sessionId + '^' + email });
        this.collSocket.on('change', function (delta) {
            console.log('Client receive change');
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collSocket.on('cursorMove', function (res) {
            console.log('Client receive cursorMove');
            var session = editor.getSession();
            var cursor = JSON.parse(res);
            var x = cursor['row'];
            var y = cursor['column'];
            var id = cursor['id'];
            if (id in _this.markers) {
                session.removeMarker(_this.markers[id]);
            }
            else {
                var member = _this.room['members'].find(function (o) { return o.id === id; });
                var color = member ? member.color : '#FFFFFF';
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = ".cursor-" + id + " {position:absolute;z-index:100;background:" + color + ";width:3px !important;}";
                document.body.appendChild(css);
            }
            var Range = ace.require('ace/range').Range;
            var marker = session.addMarker(new Range(x, y, x, y + 1), "cursor-" + id, true);
            _this.markers[id] = marker;
        });
        this.collSocket.on('memberChange', function () {
            console.log('Client receive member change');
            _this.getRoom(sessionId);
        });
    };
    CollaborateService.prototype.restoreBuffer = function () {
        this.collSocket.emit('restoreBuffer');
    };
    CollaborateService.prototype.change = function (delta) {
        this.collSocket.emit('change', delta);
    };
    CollaborateService.prototype.cursorMove = function (cursor) {
        this.collSocket.emit('cursorMove', cursor);
    };
    CollaborateService.prototype.getRoom = function (sessionId) {
        var _this = this;
        this.http.get('api/v1/rooms/' + sessionId)
            .toPromise()
            .then(function (res) {
            _this.room = res.json();
            _this.publisher.next(res.json());
        });
        return this.publisher.asObservable();
    };
    CollaborateService.prototype.getRooms = function () {
        return this.http.get('api/v1/rooms')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return CollaborateService;
}());
CollaborateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CollaborateService);

var _a;
//# sourceMappingURL=collaborate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    // Observable 自动更新
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get('api/v1/problems/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('api/v1/problems', problem, headers)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.submitCode = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('api/v1/code_results', data, headers)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('Error occured.', error);
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/assets/values/default-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return default_content; });
var default_content = {
    'Java': "class Solution {\n    public static void main(String[] args) {\n        \n    }\n}",
    'Python': "class Solution(object):",
    'C++': "class Solution {\npublic:\n\n};",
    'JavaScript': ""
};
//# sourceMappingURL=default-content.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map