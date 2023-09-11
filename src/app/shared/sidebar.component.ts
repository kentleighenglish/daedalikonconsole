import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MdSidenavModule, MdListModule, MdButtonModule } from '@angular/material';

import { GlobalService } from './../global.service';

@Component({
  moduleId: module.id,
  templateUrl: './sidebar.component.html',
  selector: 'sidebar'
})
export class SidebarComponent {
	constructor(
		private globals: GlobalService,
		private router: Router
	) {
	}
}
