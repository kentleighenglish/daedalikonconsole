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
var SymbolIndexComponent = /** @class */ (function () {
    function SymbolIndexComponent(globals, router, _symbolsService) {
        this.globals = globals;
        this.router = router;
        this._symbolsService = _symbolsService;
        this.symbols = [];
    }
    SymbolIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._symbolsService.fetchAll().subscribe(function (symbols) { return _this.symbols = symbols; });
    };
    SymbolIndexComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './index.component.html',
        }),
        __metadata("design:paramtypes", [global_service_1.GlobalService,
            router_1.Router,
            symbols_service_1.SymbolsService])
    ], SymbolIndexComponent);
    return SymbolIndexComponent;
}());
exports.SymbolIndexComponent = SymbolIndexComponent;
