import { getAlias } from '../../utils/string.utils';
import { ShippingInterface } from '../interfaces/shipping.interface';
import { DbPayload } from './db.payload';

export class ShippingPayload extends DbPayload implements ShippingInterface {
	name: string;
	price: number;
	prices: number[];

	constructor(options: ShippingInterface = {} as ShippingInterface) {
		options = options || ({} as ShippingInterface);
		super(options);
		this.alias = options.alias || getAlias(options.name);
		this.name = options.name || null;
		this.price = options.price || 0;
		this.prices = options.prices || [];
	}
}
