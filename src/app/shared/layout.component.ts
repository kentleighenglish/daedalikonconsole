import { Component } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

import { GlobalService } from './../global.service';

@Component({
  moduleId: module.id,
  templateUrl: './layout.component.html',
  selector: 'layout'
})
export class LayoutComponent {
	constructor(
		private globals: GlobalService
	) {
	}
}
