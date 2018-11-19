import { CampaignsModuleStateInterface } from '../modules/campaigns/store/reducers';
import { CategoriesModuleStateInterface } from '../modules/categories/store/reducers';
import { FashionsModuleStateInterface } from '../modules/fashions/store/reducers';
import { ProductsModuleStateInterface } from '../modules/products/store/reducers';
import { ShippingModuleStateInterface } from '../modules/shipping/store/reducers';
import { SizesModuleStateInterface } from '../modules/sizes/store/reducers';

export interface StateInterface {
	campaigns: CampaignsModuleStateInterface;
	categories: CategoriesModuleStateInterface;
	fashions: FashionsModuleStateInterface;
	products: ProductsModuleStateInterface;
	sizes: SizesModuleStateInterface;
	shipping: ShippingModuleStateInterface;
}
