import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class GlobalService {
	public name: string = "Deadalikon Console";
	public navigation: any = [
		{url: '/', label: 'Dashboard'},
		{url: '/constellations', label: 'Constellations'},
		{url: '/patterns', label: 'Patterns'},
		{url: '/symbols', label: 'Symbols'},
		{url: '/sites', label: 'Sites'}
	]
}
