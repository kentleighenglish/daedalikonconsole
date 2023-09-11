import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../shared/api.service';

import { ISymbol } from './symbol';

@Injectable()
export class SymbolsService {
	private _ResourceUrl: string = 'symbols';

	constructor(private _apiService: ApiService) {

	}

	public fetchAll(): Observable<ISymbol[]> {
		return this._apiService.get(this._ResourceUrl)
		.map((data: ISymbol[]) => <ISymbol[]>data)
	}

	public create(constellation): Observable<ISymbol> {
		return this._apiService.post(this._ResourceUrl, constellation)
		.map((data: ISymbol) => <ISymbol>data)
	}
}
