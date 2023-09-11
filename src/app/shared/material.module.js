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
var material_1 = require("@angular/material");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MdSidenavModule,
                material_1.MdButtonModule,
                material_1.MdListModule,
                material_1.MdInputModule,
                material_1.MdAutocompleteModule,
                material_1.MdIconModule,
                material_1.MdToolbarModule,
                material_1.MdGridListModule,
                material_1.MdCheckboxModule
            ],
            exports: [
                material_1.MdSidenavModule,
                material_1.MdButtonModule,
                material_1.MdListModule,
                material_1.MdInputModule,
                material_1.MdAutocompleteModule,
                material_1.MdIconModule,
                material_1.MdToolbarModule,
                material_1.MdGridListModule,
                material_1.MdCheckboxModule
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
