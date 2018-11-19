import { getAlias } from '../../utils/string.utils';
import { CampaignInterface } from '../interfaces/campaign.interface';
import { DateRangePayload } from './date-range.payload';
import { DbPayload } from './db.payload';
import { IndexPayload } from './index.payload';
import { ImagePayload } from './image.payload';
import { ProductPayload } from './product.payload';

export class CampaignPayload extends DbPayload implements CampaignInterface {
	public name: string;
	public code: string;
	public dates: DateRangePayload;
	public images: ImagePayload[];
	public description: string;
	public promotion: boolean;
	public novelty: boolean;
	public sale: boolean;

	constructor(options: CampaignInterface = {} as CampaignInterface) {
		options = options || ({} as CampaignInterface);
		super(options);
		this.alias = options.alias || getAlias(options.name);
		this.name = options.name || null;
		this.code = options.code || null;
		this.dates = new DateRangePayload(options.dates || {});
		this.images = (options.images || []).map((model) => new ImagePayload(model));
		this.description = options.description || null;
		this.promotion = options.promotion === true;
		this.novelty = options.novelty === true;
		this.sale = options.sale === true;
	}
}
