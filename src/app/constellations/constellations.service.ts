import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../shared/api.service';

import { IConstellation } from './constellation';

@Injectable()
export class ConstellationsService {
	private _ResourceUrl: string = 'constellations';

	constructor(private _apiService: ApiService) {

	}

	public fetchAll(): Observable<IConstellation[]> {
		return this._apiService.get(this._ResourceUrl)
		.map((data: IConstellation[]) => <IConstellation[]>data)
	}

	public create(constellation): Observable<IConstellation> {
		return this._apiService.post(this._ResourceUrl, constellation)
		.map((data: IConstellation) => <IConstellation>data)
	}
}
