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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this._ApiUrl = 'api';
    }
    ApiService.prototype.get = function (url) {
        return this._http.get(this._ApiUrl + '/' + url)
            .map(function (response) { if (response.json().success) {
            return response.json().data;
        } })
            .catch((this.handleError));
    };
    ApiService.prototype.post = function (url, data) {
        return this._http.post(this._ApiUrl + '/' + url, data)
            .map(function (response) { if (response.json().success) {
            return response.json().data;
        } })
            .catch((this.handleError));
    };
    ApiService.prototype.put = function (url, data) {
        return this._http.post(this._ApiUrl + '/' + url, data)
            .map(function (response) { if (response.json().success) {
            return response.json().data;
        } })
            .catch((this.handleError));
    };
    ApiService.prototype.delete = function (url, data) {
        return this._http.post(this._ApiUrl + '/' + url, data)
            .map(function (response) { if (response.json().success) {
            return response.json().data;
        } })
            .catch((this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
