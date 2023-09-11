"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
//Components
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./pages/dashboard.component");
//Custom Modules
var shared_module_1 = require("./shared/shared.module");
var routing_module_1 = require("./shared/routing.module");
var material_module_1 = require("./shared/material.module");
//Services
var global_service_1 = require("./global.service");
// import 'hammerjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                common_1.CommonModule,
                shared_module_1.SharedModule,
                routing_module_1.RoutingModule,
                material_module_1.MaterialModule
            ],
            providers: [
                platform_browser_1.Title,
                [global_service_1.GlobalService]
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
