import { ProductInterface } from './product.interface';

export interface FashionInterface extends ProductInterface {
	product?: ProductInterface;
}
