import { DbInterface } from './db.interface';
import { IndexInterface } from './index.interface';
import { CategoryInterface } from './category.interface';
import { SizeInterface } from './size.interface';
import { ShippingInterface } from './shipping.interface';
import { CampaignInterface } from './campaign.interface';
import { AvailabilityEnum } from '../enums/products.enum';
import { ImageInterface } from './image.interface';

export interface ProductInterface extends DbInterface {
	name?: string;
	description?: string;
	categories?: CategoryInterface[];
	price?: number | number[];
	images?: ImageInterface[];
	colors?: string[];
	sizes?: SizeInterface[];
	campaigns?: CampaignInterface[];
	shipping?: ShippingInterface[];
	available?: AvailabilityEnum;
}
