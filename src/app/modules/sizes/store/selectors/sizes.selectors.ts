import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { SIZES_FEATURE_SELECTOR } from '../../sizes.constants';
import { SizesModuleStateInterface } from '../reducers';

const sizesSelector = createFeatureSelector(SIZES_FEATURE_SELECTOR);

export const getSizesState = createSelector(
	sizesSelector,
	(state: SizesModuleStateInterface): SizePayload[] => state.list
);

export const getSizes = createSelector(
	getSizesState,
	(state: SizePayload[]): SizePayload[] =>
		(state || []).map(item => new SizePayload(item))
);

export const getSizeState = createSelector(
	sizesSelector,
	(state: SizesModuleStateInterface): SizePayload => state.item
);

export const getSize = createSelector(
	getSizeState,
	(state: SizePayload): SizePayload => (state ? new SizePayload(state) : null)
);
