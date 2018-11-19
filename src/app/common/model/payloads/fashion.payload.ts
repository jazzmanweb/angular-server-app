import { FashionInterface } from '../interfaces/fashion.interface';
import { IndexPayload } from './index.payload';
import { ProductPayload } from './product.payload';

export class FashionPayload extends ProductPayload implements FashionInterface {
	public product: ProductPayload;

	constructor(options: FashionInterface = {} as FashionInterface) {
		options = options || ({} as FashionInterface);
		super(options);
		this.product = new ProductPayload(options.product || null);
	}
}
