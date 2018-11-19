import { ShippingInterface } from './shipping.interface';
import { DbInterface } from './db.interface';
import { IndexInterface } from './index.interface';
import { SizeInterface } from './size.interface';

export interface CategoryInterface extends DbInterface {
	name?: string;
	icon?: string;
	styleClass?: string;
	image?: string;
	sizes?: SizeInterface[];
	shipping?: ShippingInterface[];
}
