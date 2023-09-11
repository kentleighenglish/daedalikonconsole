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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var THREE = require("three");
var OrbitControls = require('three-orbit-controls')(THREE);
var ThreeService = /** @class */ (function () {
    function ThreeService() {
        /* STAGE PROPERTIES */
        this.cameraZ = 10;
        this.fieldOfView = 45;
        this.nearClippingPane = .1;
        this.farClippingPane = 1000;
    }
    ThreeService.prototype.init = function (domContainer) {
        this.container = domContainer;
        this.createScene();
        this.startRenderingLoop();
    };
    /**
    * Create the scene
    */
    ThreeService.prototype.createScene = function () {
        /* Scene */
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.backgroundColour);
        var grid = new THREE.GridHelper(10, 8);
        grid.position.x = 5;
        grid.position.z = 5;
        this.scene.add(grid);
        /* Camera */
        var aspectRatio = this.getAspectRatio();
        this.camera = new THREE.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        this.camera.position.set(-this.cameraZ, this.cameraZ, -this.cameraZ);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    };
    ThreeService.prototype.getAspectRatio = function () {
        return this.container.clientWidth / this.container.clientHeight;
    };
    /**
    * Start the rendering loop
    */
    ThreeService.prototype.startRenderingLoop = function () {
        /* Renderer */
        // Use canvas element in template
        this.renderer = new THREE.WebGLRenderer({ canvas: this.container });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.container.clientWidth, this.container.clientWidth);
        var service = this;
        (function render() {
            requestAnimationFrame(render);
            service.controls.update();
            service.renderer.render(service.scene, service.camera);
        }());
    };
    /**
    * Update scene after resizing.
    */
    ThreeService.prototype.onResize = function () {
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    };
    /**
    * Create a symbol
    */
    ThreeService.prototype.createSymbol = function (points, close) {
        if (close === void 0) { close = false; }
        this.scene.remove(this.symbolPoints);
        this.scene.remove(this.symbolLines);
        var geometry = new THREE.Geometry();
        points.map(function (point) {
            if (point.x != null && point.y != null && point.z != null) {
                geometry.vertices.push(new THREE.Vector3(point.x, point.y, point.z));
            }
        });
        if (close && points.length > 2) {
            var point = points[0];
            if (point.x != null && point.y != null && point.z != null) {
                geometry.vertices.push(new THREE.Vector3(point.x, point.y, point.z));
            }
        }
        var pointMaterial = new THREE.PointsMaterial({ color: 0x666666, size: .5 });
        var lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888, linewidth: 2 });
        this.symbolPoints = new THREE.Points(geometry, pointMaterial);
        this.symbolLines = new THREE.Line(geometry, lineMaterial);
        this.scene.add(this.symbolPoints);
        this.scene.add(this.symbolLines);
    };
    ThreeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ThreeService);
    return ThreeService;
}());
exports.ThreeService = ThreeService;
