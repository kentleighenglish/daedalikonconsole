/*
 * Constellation Object
 */

export interface ISite {
	uuid: number;
	name: string;
	latitude: number;
	longitude: number;
}

export class Site implements ISite {

	constructor(
		public uuid: number,
		public name: string,
		public latitude: number,
		public longitude: number
	){}

}
