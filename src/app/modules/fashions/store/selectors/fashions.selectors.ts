import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { FASHIONS_FEATURE_SELECTOR } from '../../fashions.constants';
import { FashionsModuleStateInterface } from '../reducers';
import { getProducts } from 'src/app/modules/products/store/selectors/products.selectors';
import { OldFashionPayload } from 'src/app/common/model/old-data/old-fashion.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';
import { AvailabilityEnum } from 'src/app/common/model/enums/products.enum';

const fashionsSelector = createFeatureSelector(FASHIONS_FEATURE_SELECTOR);

export const getFashionsState = createSelector(
	fashionsSelector,
	(state: FashionsModuleStateInterface): FashionPayload[] => state.list
);

export const getFashions = createSelector(
	getFashionsState,
	(state: FashionPayload[]): FashionPayload[] =>
		(state || []).map(item => new FashionPayload(item))
);

export const getFashionState = createSelector(
	fashionsSelector,
	(state: FashionsModuleStateInterface): FashionPayload => state.item
);

export const getFashion = createSelector(
	getFashionState,
	(state: FashionPayload): FashionPayload =>
		state ? new FashionPayload(state) : null
);

export const getOldFashionsState = createSelector(
	fashionsSelector,
	(state: FashionsModuleStateInterface): any[] => state.old
);

export const getOldFashions = createSelector(
	getOldFashionsState,
	(state: any[]): any[] => (state || []).map(item => item)
);

export const getOldFashionsAsNew = createSelector(
	getOldFashionsState,
	getProducts,
	(
		state: OldFashionPayload[],
		products: ProductPayload[]
	): FashionPayload[] =>
		(state || []).map(item => {
			const product = products.find(
				product => product.oldId === '' + item.type
			);
			return new FashionPayload({
				oldId: '' + item.id,
				name: item.name,
				product,
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
