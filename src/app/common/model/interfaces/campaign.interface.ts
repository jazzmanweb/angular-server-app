import { DateRangeInterface } from './date-range.interface';
import { DbInterface } from './db.interface';
import { ImageInterface } from './image.interface';
import { ProductInterface } from './product.interface';

export interface CampaignInterface extends DbInterface {
	name?: string;
	code?: string;
	dates?: DateRangeInterface;
	images?: ImageInterface[];
	description?: string;
	promotion?: boolean;
	novelty?: boolean;
	sale?: boolean;
}
