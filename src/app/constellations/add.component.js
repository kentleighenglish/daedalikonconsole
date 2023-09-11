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
var ConstellationAddComponent = /** @class */ (function () {
    function ConstellationAddComponent(globals, _constellationsService, router) {
        this.globals = globals;
        this._constellationsService = _constellationsService;
        this.router = router;
        this.constellation = {
            uuid: null,
            name: null,
            code: null,
            points: []
        };
        this.onSubmit = function () {
            var _this = this;
            console.log(this.constellation);
            this._constellationsService.create(this.constellation).subscribe(function (result) { return _this.router.navigate(['/constellations/view'], result.uuid); });
        };
        this.addPoint();
    }
    ConstellationAddComponent.prototype.addPoint = function () {
        if (this.constellation.points.length < 12) {
            this.constellation.points.push({
                uuid: null,
                constellation_uuid: null,
                x: null,
                y: null,
                z: null,
                name: null
            });
        }
    };
    ConstellationAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './add.component.html',
        }),
        __metadata("design:paramtypes", [global_service_1.GlobalService,
            constellations_service_1.ConstellationsService,
            router_1.Router])
    ], ConstellationAddComponent);
    return ConstellationAddComponent;
}());
exports.ConstellationAddComponent = ConstellationAddComponent;
