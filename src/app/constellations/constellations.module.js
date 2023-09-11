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
var shared_module_1 = require("../shared/shared.module");
var material_module_1 = require("../shared/material.module");
var index_component_1 = require("./index.component");
var add_component_1 = require("./add.component");
var constellations_service_1 = require("./constellations.service");
var ConstellationRoutes = [
    { path: 'constellations/add', component: add_component_1.ConstellationAddComponent },
    { path: 'constellations', component: index_component_1.ConstellationIndexComponent }
];
var ConstellationsModule = /** @class */ (function () {
    function ConstellationsModule() {
    }
    ConstellationsModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_component_1.ConstellationIndexComponent,
                add_component_1.ConstellationAddComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(ConstellationRoutes),
                shared_module_1.SharedModule,
                material_module_1.MaterialModule
            ],
            exports: [
                index_component_1.ConstellationIndexComponent,
                add_component_1.ConstellationAddComponent
            ],
            providers: [
                constellations_service_1.ConstellationsService
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ConstellationsModule);
    return ConstellationsModule;
}());
exports.ConstellationsModule = ConstellationsModule;
