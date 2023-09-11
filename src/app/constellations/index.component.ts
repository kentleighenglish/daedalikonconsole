import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { GlobalService } from './../global.service';
import { ConstellationsService } from './constellations.service';
import { IConstellation } from './constellation';

@Component({
  moduleId: module.id,
  templateUrl: './index.component.html',
})
export class ConstellationIndexComponent {
	public constellations: IConstellation[] = [];

	constructor(
		private globals: GlobalService,
		private router: Router,
		private _constellationsService: ConstellationsService
	) {
	}

	ngOnInit(): void {
		this._constellationsService.fetchAll().subscribe(
			constellations => this.constellations = constellations
		);
	}
}
