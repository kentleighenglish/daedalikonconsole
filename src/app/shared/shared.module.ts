//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar.component';
import { ThreeViewerComponent } from './threeViewer.component';

import { ApiService } from './api.service';
import { ThreeService } from './three.service';
// import 'hammerjs';

import { MaterialModule } from './material.module';


@NgModule({
	declarations: [
		LayoutComponent,
		SidebarComponent,
		ThreeViewerComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule
	],
	exports: [
		LayoutComponent,
		SidebarComponent,
		ThreeViewerComponent
	],
	providers: [
		ApiService,
		ThreeService
	]
})
export class SharedModule {

	constructor() {
	}
}
