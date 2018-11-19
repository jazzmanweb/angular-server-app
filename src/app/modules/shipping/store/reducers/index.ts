import { ActionReducerMap } from '@ngrx/store';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import * as fromShipping from './shipping.reducer';
import * as fromShippings from './shippings.reducer';

export interface ShippingModuleStateInterface {
	list: ShippingPayload[];
	item: ShippingPayload;
}

export const shippingModuleReducers: ActionReducerMap<
	ShippingModuleStateInterface
> = {
	list: fromShippings.reducer,
	item: fromShipping.reducer
};
