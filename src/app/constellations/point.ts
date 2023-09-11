/*
 * Point Object
 */

export interface IPoint {
	uuid: string;
	constellation_uuid: string;
	x: number;
	y: number;
	z: number;
	name: string;
}

export class Point implements IPoint {

	constructor(
		public uuid: string,
		public constellation_uuid: string,
		public x: number,
		public y: number,
		public z: number,
		public name: string,
	){}

}
