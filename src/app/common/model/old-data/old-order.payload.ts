import { OldOrderInterface } from './old-order.interface';
import { OldContactPayload } from './old-contact.payload';
import { OldOrderItemPayload } from './old-order-item.payload';

export class OldOrderPayload {
	public id: number;
    public orderDate: Date;
    public uid: number;
    public name: string;
    public email: string;
    public contact: OldContactPayload;
    public items: OldOrderItemPayload[];
    public total: number;
    public method: string;
	public status: number;

	constructor(options: OldOrderInterface = {} as OldOrderInterface) {
		options = options || ({} as OldOrderInterface);
		this.id = options.id || null;
		this.orderDate = options.orderDate || null;
		this.uid = options.uid || null;
		this.name = options.name || null;
		this.email = options.email || null;
		this.contact = new OldContactPayload(options.contact || {});
		this.items = (options.items || []).map((item) => new OldOrderItemPayload(item));
		this.total = options.total || null;
		this.method = options.method || null;
		this.status = options.status || null;
	}
}
