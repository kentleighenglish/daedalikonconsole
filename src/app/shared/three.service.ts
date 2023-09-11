import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);

@Injectable()
export class ThreeService {
	/* STAGE PROPERTIES */
	public cameraZ: number = 10;
	public fieldOfView: number = 45;
	public nearClippingPane: number = .1;
	public farClippingPane: number = 1000;

	private renderer: THREE.WebGLRenderer;
	private scene: THREE.Scene;
	private camera: THREE.PerspectiveCamera;
	private controls: THREE.OrbitControls;

	private container: HTMLCanvasElement;
	private mesh: THREE.Mesh;
	private symbolPoints: THREE.Points;
	private symbolLines: THREE.Line;

	private backgroundColour: '0xFFFFFF';

	constructor(
	){}

	init(domContainer) {
		this.container = domContainer;
		this.createScene();
		this.startRenderingLoop();
	}


	/**
	* Create the scene
	*/
	private createScene() {
		/* Scene */
		this.scene = new THREE.Scene();

		this.scene.background = new THREE.Color(this.backgroundColour);

		var grid = new THREE.GridHelper(10, 8);
		grid.position.x = 5;
		grid.position.z = 5;

		this.scene.add(grid);

		/* Camera */
		let aspectRatio = this.getAspectRatio();
		this.camera = new THREE.PerspectiveCamera(
			this.fieldOfView,
			aspectRatio,
			this.nearClippingPane,
			this.farClippingPane
		);
		this.camera.position.set(-this.cameraZ, this.cameraZ, -this.cameraZ);
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	}

	private getAspectRatio() {
		return this.container.clientWidth / this.container.clientHeight;
	}

	/**
	* Start the rendering loop
	*/
	private startRenderingLoop() {
		/* Renderer */
		// Use canvas element in template
		this.renderer = new THREE.WebGLRenderer({ canvas: this.container });
		this.controls = new OrbitControls( this.camera, this.renderer.domElement );

		this.controls.enableZoom = false;
		this.controls.enablePan = false;

		this.renderer.setPixelRatio(devicePixelRatio);
		this.renderer.setSize(this.container.clientWidth, this.container.clientWidth);

		let service: ThreeService = this;
		(function render() {
			requestAnimationFrame(render);
			service.controls.update();
			service.renderer.render(service.scene, service.camera);
		}());
	}


	/**
	* Update scene after resizing.
	*/
	public onResize() {
		this.camera.aspect = this.getAspectRatio();
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
	}


	/**
	* Create a symbol
	*/
	public createSymbol(points, close = false) {
		this.scene.remove(this.symbolPoints);
		this.scene.remove(this.symbolLines);
		var geometry = new THREE.Geometry();

		points.map(function(point){
			if(point.x != null && point.y != null && point.z != null) {
				geometry.vertices.push(new THREE.Vector3(point.x, point.y, point.z));
			}
		});

		if(close && points.length > 2) {
			let point = points[0];
			if(point.x != null && point.y != null && point.z != null) {
				geometry.vertices.push(new THREE.Vector3(point.x, point.y, point.z));
			}
		}

		var pointMaterial = new THREE.PointsMaterial({ color: 0x666666, size: .5 });
		var lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888, linewidth: 2 });

		this.symbolPoints = new THREE.Points(geometry, pointMaterial);
		this.symbolLines = new THREE.Line(geometry, lineMaterial);

		this.scene.add(this.symbolPoints);
		this.scene.add(this.symbolLines);
	}
}
