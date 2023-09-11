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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var global_service_1 = require("./../global.service");
var constellations_service_1 = require("./constellations.service");
var ConstellationIndexComponent = /** @class */ (function () {
    function ConstellationIndexComponent(globals, router, _constellationsService) {
        this.globals = globals;
        this.router = router;
        this._constellationsService = _constellationsService;
        this.constellations = [];
    }
    ConstellationIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._constellationsService.fetchAll().subscribe(function (constellations) { return _this.constellations = constellations; });
    };
    ConstellationIndexComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './index.component.html',
        }),
        __metadata("design:paramtypes", [global_service_1.GlobalService,
            router_1.Router,
            constellations_service_1.ConstellationsService])
    ], ConstellationIndexComponent);
    return ConstellationIndexComponent;
}());
exports.ConstellationIndexComponent = ConstellationIndexComponent;
