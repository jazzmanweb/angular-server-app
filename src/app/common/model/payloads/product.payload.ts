import { getAlias } from '../../utils/string.utils';
import { AvailabilityEnum } from '../enums/products.enum';
import { ProductInterface } from '../interfaces/product.interface';
import { CampaignPayload } from './campaign.payload';
import { CategoryPayload } from './category.payload';
import { DbPayload } from './db.payload';
import { IndexPayload } from './index.payload';
import { ShippingPayload } from './shipping.payload';
import { SizePayload } from './size.payload';
import { ImagePayload } from './image.payload';

export class ProductPayload extends DbPayload implements ProductInterface {
	public name: string;
	public description: string;
	public categories: CategoryPayload[];
	public price: number | number[];
	public images: ImagePayload[];
	public colors: string[];
	public sizes: SizePayload[];
	public campaigns: CampaignPayload[];
	public shipping: ShippingPayload[];
	public available: AvailabilityEnum;

	constructor(options: ProductInterface = {} as ProductInterface) {
		options = options || ({} as ProductInterface);
		super(options);
		this.alias = options.alias || getAlias(options.name);
		this.name = options.name || null;
		this.description = options.description || null;
		this.categories = (options.categories || []).map((model) => new CategoryPayload(model));
		this.price = options.price || null;
		this.images = (options.images || []).map((model) => new ImagePayload(model));
		this.colors = options.colors || [];
		this.sizes = (options.sizes || []).map((model) => new SizePayload(model));
		this.campaigns = (options.campaigns || []).map((model) => new CampaignPayload(model));
		this.shipping = (options.shipping || []).map((model) => new ShippingPayload(model));
		this.available = options.available || AvailabilityEnum.unavailable;
	}
}
