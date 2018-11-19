import { getAlias } from '../../utils/string.utils';
import { CategoryInterface } from '../interfaces/category.interface';
import { DbPayload } from './db.payload';
import { IndexPayload } from './index.payload';
import { ShippingPayload } from './shipping.payload';
import { SizePayload } from './size.payload';

export class CategoryPayload extends DbPayload implements CategoryInterface {
	public name: string;
	public icon: string;
	public styleClass: string;
	public image: string;
	public sizes: SizePayload[];
	public shipping: ShippingPayload[];

	constructor(options: CategoryInterface = {} as CategoryInterface) {
		options = options || ({} as CategoryInterface);
		super(options);
		this.alias = options.alias || getAlias(options.name);
		this.name = options.name || null;
		this.icon = options.icon || null;
		this.styleClass = options.styleClass || null;
		this.image = options.image || null;
		this.sizes = (options.sizes || []).map((model) => new SizePayload(model));
		this.shipping = (options.shipping || []).map((model) => new ShippingPayload(model));
	}
}
