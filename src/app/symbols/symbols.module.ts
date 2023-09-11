//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { SymbolIndexComponent  } from './index.component';
import { SymbolAddComponent  } from './add.component';

import { SymbolsService } from './symbols.service';

const SymbolRoutes: Routes = [
	{ path: 'symbols', component: SymbolIndexComponent },
	{ path: 'symbols/add', component: SymbolAddComponent }
]

@NgModule({
	declarations: [
		SymbolIndexComponent,
		SymbolAddComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(SymbolRoutes),
		SharedModule,
		MaterialModule
	],
	exports: [
		SymbolIndexComponent,
		SymbolAddComponent
	],
	providers: [
		SymbolsService
	]
})
export class SymbolsModule {

	constructor() {
	}
}
