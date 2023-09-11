import { Component } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';

import { GlobalService } from './../global.service';
import { ConstellationsService } from './constellations.service';
import { IConstellation } from './constellation';

@Component({
  moduleId: module.id,
  templateUrl: './add.component.html',
})
export class ConstellationAddComponent {
	public constellation: IConstellation = {
		uuid: null,
		name: null,
		code: null,
		points: []
	}

	constructor(
		private globals: GlobalService,
		private _constellationsService: ConstellationsService,
		private router: Router
	) {
		this.addPoint();
	}

	public onSubmit = function() {
		console.log(this.constellation);
		this._constellationsService.create(this.constellation).subscribe(
			result => this.router.navigate(['/constellations/view'], result.uuid)
		);
	}

	public addPoint() {
		if(this.constellation.points.length < 12) {
			this.constellation.points.push({
				uuid: null,
				constellation_uuid: null,
				x: null,
				y: null,
				z: null,
				name: null
			});
		}
	}


}
