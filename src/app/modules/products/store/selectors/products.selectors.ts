import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OldProductPayload } from 'src/app/common/model/old-data/old-product.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { PRODUCTS_FEATURE_SELECTOR } from '../../products.constants';
import { ProductsModuleStateInterface } from '../reducers';
import {
	AvailabilityEnum,
	AgeEnum
} from 'src/app/common/model/enums/products.enum';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { getCategories } from 'src/app/modules/categories/store/selectors/categories.selectors';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';

const productsSelector = createFeatureSelector(PRODUCTS_FEATURE_SELECTOR);

export const getProductsState = createSelector(
	productsSelector,
	(state: ProductsModuleStateInterface): ProductPayload[] => state.list
);

export const getProducts = createSelector(
	getProductsState,
	(state: ProductPayload[]): ProductPayload[] =>
		(state || []).map(item => new ProductPayload(item))
);

export const getProductState = createSelector(
	productsSelector,
	(state: ProductsModuleStateInterface): ProductPayload => state.item
);

export const getProduct = createSelector(
	getProductState,
	(state: ProductPayload): ProductPayload =>
		state ? new ProductPayload(state) : null
);

export const getOldProductsState = createSelector(
	productsSelector,
	(state: ProductsModuleStateInterface): OldProductPayload[] => state.old
);

export const getOldProducts = createSelector(
	getOldProductsState,
	(state: OldProductPayload[]): OldProductPayload[] =>
		(state || []).map(item => new OldProductPayload(item))
);

export const getOldProductsAsNew = createSelector(
	getOldProductsState,
	getCategories,
	(
		state: OldProductPayload[],
		categories: CategoryPayload[]
	): ProductPayload[] =>
		(state || []).map(item => {
			const category = categories.find(
				category => category.styleClass === item.category
			);
			return new ProductPayload({
				oldId: '' + item.id,
				name: item.name,
				categories: category ? [category] : [],
				price: item.price,
				images: ((item.images || '').split(',') || []).map(
					image => new ImagePayload({ filename: image })
				),
				colors: (item.colors || '').split(','),
				description: item.description,
				available: item.availability
					? AvailabilityEnum.request
					: AvailabilityEnum.unavailable,
				published: !!item.published
			});
		})
);
