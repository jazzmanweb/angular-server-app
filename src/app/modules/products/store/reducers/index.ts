import { ActionReducerMap } from '@ngrx/store';
import { OldProductPayload } from 'src/app/common/model/old-data/old-product.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import * as fromOldProducts from './old-products.reducer';
import * as fromProduct from './product.reducer';
import * as fromProducts from './products.reducer';

export interface ProductsModuleStateInterface {
	old: OldProductPayload[];
	list: ProductPayload[];
	item: ProductPayload;
}

export const productsModuleReducers: ActionReducerMap<
	ProductsModuleStateInterface
> = {
	old: fromOldProducts.reducer,
	list: fromProducts.reducer,
	item: fromProduct.reducer
};
