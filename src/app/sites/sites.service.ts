import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../shared/api.service';

import { ISite } from './site';

@Injectable()
export class SitesService {
	private _ResourceUrl: string = 'sites';

	constructor(private _apiService: ApiService) {

	}

	public fetchAll(): Observable<ISite[]> {
		return this._apiService.get(this._ResourceUrl)
		.map((data: ISite[]) => <ISite[]>data)
	}

	public create(constellation): Observable<ISite> {
		return this._apiService.post(this._ResourceUrl, constellation)
		.map((data: ISite) => <ISite>data)
	}
}
