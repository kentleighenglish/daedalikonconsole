import { Component, Input, AfterViewInit, ElementRef, KeyValueDiffers, ViewChild } from '@angular/core';

import { ThreeService } from './three.service';

import { IPoint } from '../constellations/point';

@Component({
  moduleId: module.id,
  templateUrl: './threeViewer.component.html',
  selector: 'three-viewer'
})
export class ThreeViewerComponent implements AfterViewInit {
	@Input() public points: IPoint[] = [];
	@Input() public close: boolean = false;

	constructor(
		private _threeService: ThreeService,
	){
	}

    private get canvas() : HTMLCanvasElement {
      return this.viewerRef.nativeElement;
    }

	@ViewChild('threeViewer')
	private viewerRef: ElementRef;

	public onResize() {
		this._threeService.onResize();
	}

	public update() {
		this._threeService.createSymbol(this.points, this.close);
	}

    public ngAfterViewInit() {
		this._threeService.init(this.canvas);
    }
}
