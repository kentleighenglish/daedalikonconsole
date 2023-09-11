//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { SiteIndexComponent } from './index.component';

import { SitesService } from './sites.service';

const SiteRoutes: Routes = [
	{ path: 'sites', component: SiteIndexComponent }
]

@NgModule({
	declarations: [
		SiteIndexComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(SiteRoutes),
		MaterialModule
	],
	exports: [
		SiteIndexComponent
	],
	providers: [
		SitesService
	]
})
export class SitesModule {

	constructor() {
	}
}
