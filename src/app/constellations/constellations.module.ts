//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { ConstellationIndexComponent } from './index.component';
import { ConstellationAddComponent } from './add.component';

import { ConstellationsService } from './constellations.service';

const ConstellationRoutes: Routes = [
	{ path: 'constellations/add', component: ConstellationAddComponent },
	{ path: 'constellations', component: ConstellationIndexComponent }
]

@NgModule({
	declarations: [
		ConstellationIndexComponent,
		ConstellationAddComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(ConstellationRoutes),
		SharedModule,
		MaterialModule
	],
	exports: [
		ConstellationIndexComponent,
		ConstellationAddComponent
	],
	providers: [
		ConstellationsService
	]
})
export class ConstellationsModule {

	constructor() {
	}
}
