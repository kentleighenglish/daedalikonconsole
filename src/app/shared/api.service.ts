import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
	private _ApiUrl: string = 'api';

	constructor(private _http: Http) {

	}

	public get(url: string): Observable<any> {
		return this._http.get(this._ApiUrl+'/'+url)
		.map((response: Response) => { if(response.json().success) { return <Object>response.json().data } })
		.catch((this.handleError));
	}

	public post(url: string, data: any): Observable<any> {
		return this._http.post(this._ApiUrl+'/'+url, data)
		.map((response: Response) => { if(response.json().success) { return <Object>response.json().data } })
		.catch((this.handleError));
	}

	public put(url: string, data: any): Observable<any> {
		return this._http.post(this._ApiUrl+'/'+url, data)
		.map((response: Response) => { if(response.json().success) { return <Object>response.json().data } })
		.catch((this.handleError));
	}

	public delete(url: string, data: any): Observable<any> {
		return this._http.post(this._ApiUrl+'/'+url, data)
		.map((response: Response) => { if(response.json().success) { return <Object>response.json().data } })
		.catch((this.handleError));
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}
