/*
 * Constellation Object
 */
import { IPoint } from './point';

export interface IConstellation {
	uuid: string;
	name: string;
	code: string;
	points: IPoint[]
}

export class Constellation implements IConstellation {

	constructor(public uuid: string,
				public name: string,
				public code: string,
				public points: IPoint[]
	){}

}
