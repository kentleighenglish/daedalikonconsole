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
var api_service_1 = require("../shared/api.service");
var SymbolsService = /** @class */ (function () {
    function SymbolsService(_apiService) {
        this._apiService = _apiService;
        this._ResourceUrl = 'symbols';
    }
    SymbolsService.prototype.fetchAll = function () {
        return this._apiService.get(this._ResourceUrl)
            .map(function (data) { return data; });
    };
    SymbolsService.prototype.create = function (constellation) {
        return this._apiService.post(this._ResourceUrl, constellation)
            .map(function (data) { return data; });
    };
    SymbolsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], SymbolsService);
    return SymbolsService;
}());
exports.SymbolsService = SymbolsService;
