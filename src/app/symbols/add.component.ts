import { Component, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MdAutocompleteModule, MdCheckboxModule, MdButtonModule, MdIconModule } from '@angular/material';

import { GlobalService } from './../global.service';
import { SymbolsService } from './symbols.service';
import { ConstellationsService } from '../constellations/constellations.service';

import { ISymbol } from './symbol';
import { IConstellation } from '../constellations/constellation';
import { IPoint } from '../constellations/point';

@Component({
  moduleId: module.id,
  templateUrl: './add.component.html',
})
export class SymbolAddComponent {
	public symbol: ISymbol = {
		uuid: null,
		name: null,
		constellation_uuid: null,
		author: null,
		date_created: null,
		date_modified: null,
		points: []
	};

	public constellationField: string = null;
	public constellations: IConstellation[];
	public filteredConstellations: any;
	public activeConstellation: IConstellation = null;
	public activePoints: IPoint[];
	public filteredPoints: IPoint[];
	public selectedPoints = {};

	@ViewChild('viewer') viewer;


	constructor(
		private globals: GlobalService,
		private router: Router,
		private _symbolsService: SymbolsService,
		private _constellationsService: ConstellationsService
	) {
	}

	onSubmit() {

	}

	onConstellationChange() {
		this.filteredConstellations = this.filterConstellations(this.constellationField);
		this.onSelectedConstellation();
	}

	onSelectedConstellation() {
		let matches = this.constellations.filter(c => c.uuid === this.constellationField);
		if(matches.length) {
			this.activeConstellation = matches[0];
			this.constellationField = this.activeConstellation.name;

			this.symbol.points = [];
			this.activeConstellation.points.map(function() {
				this.symbol.points.push({});
			}.bind(this));
			this.activePoints = this.activeConstellation.points;

			this.filterPoints();
		} else {
			this.activeConstellation = null;
		}
	}

	changeConstellation() {
		this.activeConstellation = null;
		this.activePoints = [];
		this.symbol.points = [];
		this.viewer.update();
	}

	filterPoints(point: IPoint = null) {
		this.selectedPoints = [];
		this.activePoints.map(p => {
			if (this.symbol.points.filter(s => s['uuid'] == p.uuid).length) {
				this.selectedPoints[p.uuid] = true;
			} else {
				this.selectedPoints[p.uuid] = false;
			}
		});
		this.viewer.update();
	}

	changePoint(e, i) {
		var point = this.activePoints.filter(p => p.uuid == this.symbol.points[i].uuid)[0];
		this.symbol.points[i] = {
			uuid: this.symbol.points[i].uuid,
			name: point.name,
			constellation_uuid: point.constellation_uuid,
			x: point.x,
			y: point.y,
			z: point.z
		};

		this.filterPoints();
	}
	clearPoint(i) {
		this.symbol.points[i] = {
			uuid: null,
			name: null,
			constellation_uuid: null,
			x: null,
			y: null,
			z: null
		};
		this.filterPoints();
	}

	filterConstellations(val: string) {
      return val ? this.constellations.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
                 : this.constellations;
    }

	ngOnInit(): void {
		this._constellationsService.fetchAll().subscribe(
			result => this.constellations = result
		)
	}

}
