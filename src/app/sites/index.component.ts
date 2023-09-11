import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MdGridListModule, MdButtonModule, MdIconModule } from '@angular/material';

import { GlobalService } from './../global.service';
import { SitesService } from './sites.service';

@Component({
  moduleId: module.id,
  templateUrl: './index.component.html',
})
export class SiteIndexComponent {
	public sites: any[] = [];

	constructor(
		private globals: GlobalService,
		private router: Router,
		private _sitesService: SitesService
	) {
	}

	ngOnInit(): void {
		this._sitesService.fetchAll().subscribe(
			constellations => this.sites = constellations
		);
	}
}
