import { DbPayload } from './db.payload';
import { OrderInterface } from '../interfaces/order.interface';

export class OrderPayload extends DbPayload implements OrderInterface {
	public date: Date;

	constructor(options: OrderInterface = {} as OrderInterface) {
		options = options || ({} as OrderInterface);
		super(options);
		this.alias = options.alias || null;
		this.date = options.date || null;
	}
}
