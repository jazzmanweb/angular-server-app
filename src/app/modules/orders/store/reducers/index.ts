import { ActionReducerMap } from '@ngrx/store';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import * as fromOldOrders from './old-orders.reducer';
import * as fromOrder from './order.reducer';
import * as fromOrders from './orders.reducer';

export interface OrdersModuleStateInterface {
	old: OldOrderPayload[];
	list: OrderPayload[];
	item: OrderPayload;
}

export const ordersModuleReducers: ActionReducerMap<
	OrdersModuleStateInterface
> = {
	old: fromOldOrders.reducer,
	list: fromOrders.reducer,
	item: fromOrder.reducer
};
