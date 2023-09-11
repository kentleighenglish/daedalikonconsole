//Modules
import { NgModule } from '@angular/core';

import {
	MdSidenavModule,
	MdButtonModule,
	MdListModule,
	MdInputModule,
	MdAutocompleteModule,
	MdIconModule,
	MdToolbarModule,
	MdGridListModule,
	MdCheckboxModule
} from '@angular/material';

@NgModule({
	imports: [
		MdSidenavModule,
		MdButtonModule,
		MdListModule,
		MdInputModule,
		MdAutocompleteModule,
		MdIconModule,
		MdToolbarModule,
		MdGridListModule,
		MdCheckboxModule
	],
	exports: [
		MdSidenavModule,
		MdButtonModule,
		MdListModule,
		MdInputModule,
		MdAutocompleteModule,
		MdIconModule,
		MdToolbarModule,
		MdGridListModule,
		MdCheckboxModule
	]
})
export class MaterialModule {

	constructor() {
	}
}
