import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { ORDERS_FEATURE_SELECTOR } from '../../orders.constants';
import { OrdersModuleStateInterface } from '../reducers';

const ordersSelector = createFeatureSelector(ORDERS_FEATURE_SELECTOR);

export const getOrdersState = createSelector(
	ordersSelector,
	(state: OrdersModuleStateInterface): OrderPayload[] => state.list
);

export const getOrders = createSelector(
	getOrdersState,
	(state: OrderPayload[]): OrderPayload[] =>
		(state || []).map(item => new OrderPayload(item))
);

export const getOrderState = createSelector(
	ordersSelector,
	(state: OrdersModuleStateInterface): OrderPayload => state.item
);

export const getOrder = createSelector(
	getOrderState,
	(state: OrderPayload): OrderPayload =>
		state ? new OrderPayload(state) : null
);

export const getOldOrdersState = createSelector(
	ordersSelector,
	(state: OrdersModuleStateInterface): OldOrderPayload[] => state.old
);

export const getOldOrders = createSelector(
	getOldOrdersState,
	(state: OldOrderPayload[]): OldOrderPayload[] =>
		(state || []).map(item => item)
);
