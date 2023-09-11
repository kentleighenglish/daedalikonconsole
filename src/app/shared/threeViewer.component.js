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
var three_service_1 = require("./three.service");
var ThreeViewerComponent = /** @class */ (function () {
    function ThreeViewerComponent(_threeService) {
        this._threeService = _threeService;
        this.points = [];
        this.close = false;
    }
    Object.defineProperty(ThreeViewerComponent.prototype, "canvas", {
        get: function () {
            return this.viewerRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    ThreeViewerComponent.prototype.onResize = function () {
        this._threeService.onResize();
    };
    ThreeViewerComponent.prototype.update = function () {
        this._threeService.createSymbol(this.points, this.close);
    };
    ThreeViewerComponent.prototype.ngAfterViewInit = function () {
        this._threeService.init(this.canvas);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ThreeViewerComponent.prototype, "points", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ThreeViewerComponent.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild('threeViewer'),
        __metadata("design:type", core_1.ElementRef)
    ], ThreeViewerComponent.prototype, "viewerRef", void 0);
    ThreeViewerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './threeViewer.component.html',
            selector: 'three-viewer'
        }),
        __metadata("design:paramtypes", [three_service_1.ThreeService])
    ], ThreeViewerComponent);
    return ThreeViewerComponent;
}());
exports.ThreeViewerComponent = ThreeViewerComponent;
