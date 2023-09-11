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
var router_1 = require("@angular/router");
var layout_component_1 = require("./layout.component");
var sidebar_component_1 = require("./sidebar.component");
var threeViewer_component_1 = require("./threeViewer.component");
var api_service_1 = require("./api.service");
var three_service_1 = require("./three.service");
// import 'hammerjs';
var material_module_1 = require("./material.module");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_component_1.LayoutComponent,
                sidebar_component_1.SidebarComponent,
                threeViewer_component_1.ThreeViewerComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                material_module_1.MaterialModule
            ],
            exports: [
                layout_component_1.LayoutComponent,
                sidebar_component_1.SidebarComponent,
                threeViewer_component_1.ThreeViewerComponent
            ],
            providers: [
                api_service_1.ApiService,
                three_service_1.ThreeService
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
