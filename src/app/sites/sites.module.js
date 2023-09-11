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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var material_module_1 = require("../shared/material.module");
var index_component_1 = require("./index.component");
var sites_service_1 = require("./sites.service");
var SiteRoutes = [
    { path: 'sites', component: index_component_1.SiteIndexComponent }
];
var SitesModule = /** @class */ (function () {
    function SitesModule() {
    }
    SitesModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_component_1.SiteIndexComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(SiteRoutes),
                material_module_1.MaterialModule
            ],
            exports: [
                index_component_1.SiteIndexComponent
            ],
            providers: [
                sites_service_1.SitesService
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SitesModule);
    return SitesModule;
}());
exports.SitesModule = SitesModule;
