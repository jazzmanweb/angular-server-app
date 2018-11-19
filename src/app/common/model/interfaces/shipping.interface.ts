import { DbInterface } from './db.interface';

export interface ShippingInterface extends DbInterface {
	name?: string;
	price?: number;
	prices?: number[];
}
