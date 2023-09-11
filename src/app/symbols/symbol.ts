/*
 * Constellation Object
 */
import { IPoint } from '../constellations/point';

export interface ISymbol {
	uuid: string;
	name: string;
	constellation_uuid: string;
	author: string;
	date_created: Date;
	date_modified: Date;
	points: IPoint[];
}

export class Symbol implements ISymbol {

	constructor(
		public uuid: string,
		public name: string,
		public constellation_uuid: string,
		public author: string,
		public date_created: Date,
		public date_modified: Date,
		public points: IPoint[]
	){}

}
