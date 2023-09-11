import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { GlobalService } from './../global.service';
import { SymbolsService } from './symbols.service';

import { ISymbol } from './symbol';

@Component({
  moduleId: module.id,
  templateUrl: './index.component.html',
})
export class SymbolIndexComponent {
	public symbols: ISymbol[] = [];

	constructor(
		private globals: GlobalService,
		private router: Router,
		private _symbolsService: SymbolsService
	) {
	}

	ngOnInit(): void {
		this._symbolsService.fetchAll().subscribe(
			symbols => this.symbols = symbols
		);
	}
}
