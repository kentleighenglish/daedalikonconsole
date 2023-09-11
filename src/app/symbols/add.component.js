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
var symbols_service_1 = require("./symbols.service");
var constellations_service_1 = require("../constellations/constellations.service");
var SymbolAddComponent = /** @class */ (function () {
    function SymbolAddComponent(globals, router, _symbolsService, _constellationsService) {
        this.globals = globals;
        this.router = router;
        this._symbolsService = _symbolsService;
        this._constellationsService = _constellationsService;
        this.symbol = {
            uuid: null,
            name: null,
            constellation_uuid: null,
            author: null,
            date_created: null,
            date_modified: null,
            points: []
        };
        this.constellationField = null;
        this.activeConstellation = null;
        this.selectedPoints = {};
    }
    SymbolAddComponent.prototype.onSubmit = function () {
    };
    SymbolAddComponent.prototype.onConstellationChange = function () {
        this.filteredConstellations = this.filterConstellations(this.constellationField);
        this.onSelectedConstellation();
    };
    SymbolAddComponent.prototype.onSelectedConstellation = function () {
        var _this = this;
        var matches = this.constellations.filter(function (c) { return c.uuid === _this.constellationField; });
        if (matches.length) {
            this.activeConstellation = matches[0];
            this.constellationField = this.activeConstellation.name;
            this.symbol.points = [];
            this.activeConstellation.points.map(function () {
                this.symbol.points.push({});
            }.bind(this));
            this.activePoints = this.activeConstellation.points;
            this.filterPoints();
        }
        else {
            this.activeConstellation = null;
        }
    };
    SymbolAddComponent.prototype.changeConstellation = function () {
        this.activeConstellation = null;
        this.activePoints = [];
        this.symbol.points = [];
        this.viewer.update();
    };
    SymbolAddComponent.prototype.filterPoints = function (point) {
        var _this = this;
        if (point === void 0) { point = null; }
        this.selectedPoints = [];
        this.activePoints.map(function (p) {
            if (_this.symbol.points.filter(function (s) { return s['uuid'] == p.uuid; }).length) {
                _this.selectedPoints[p.uuid] = true;
            }
            else {
                _this.selectedPoints[p.uuid] = false;
            }
        });
        this.viewer.update();
    };
    SymbolAddComponent.prototype.changePoint = function (e, i) {
        var _this = this;
        var point = this.activePoints.filter(function (p) { return p.uuid == _this.symbol.points[i].uuid; })[0];
        this.symbol.points[i] = {
            uuid: this.symbol.points[i].uuid,
            name: point.name,
            constellation_uuid: point.constellation_uuid,
            x: point.x,
            y: point.y,
            z: point.z
        };
        this.filterPoints();
    };
    SymbolAddComponent.prototype.clearPoint = function (i) {
        this.symbol.points[i] = {
            uuid: null,
            name: null,
            constellation_uuid: null,
            x: null,
            y: null,
            z: null
        };
        this.filterPoints();
    };
    SymbolAddComponent.prototype.filterConstellations = function (val) {
        return val ? this.constellations.filter(function (s) { return s.name.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.constellations;
    };
    SymbolAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._constellationsService.fetchAll().subscribe(function (result) { return _this.constellations = result; });
    };
    __decorate([
        core_1.ViewChild('viewer'),
        __metadata("design:type", Object)
    ], SymbolAddComponent.prototype, "viewer", void 0);
    SymbolAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './add.component.html',
        }),
        __metadata("design:paramtypes", [global_service_1.GlobalService,
            router_1.Router,
            symbols_service_1.SymbolsService,
            constellations_service_1.ConstellationsService])
    ], SymbolAddComponent);
    return SymbolAddComponent;
}());
exports.SymbolAddComponent = SymbolAddComponent;
