import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { SHIPPING_FEATURE_SELECTOR } from '../../shipping.constants';
import { ShippingModuleStateInterface } from '../reducers';

const shippingSelector = createFeatureSelector(SHIPPING_FEATURE_SELECTOR);

export const getShippingsState = createSelector(
	shippingSelector,
	(state: ShippingModuleStateInterface): ShippingPayload[] => state.list
);

export const getShippings = createSelector(
	getShippingsState,
	(state: ShippingPayload[]): ShippingPayload[] =>
		(state || []).map(item => new ShippingPayload(item))
);

export const getShippingState = createSelector(
	shippingSelector,
	(state: ShippingModuleStateInterface): ShippingPayload => state.item
);

export const getShipping = createSelector(
	getShippingState,
	(state: ShippingPayload): ShippingPayload =>
		state ? new ShippingPayload(state) : null
);
