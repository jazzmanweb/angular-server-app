import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { OrdersActions } from '../actions/orders.actions';

const initialState: OrderPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): OrderPayload {
	switch (action.type) {
		case OrdersActions.LOAD_ITEM: {
			return initialState;
		}
		case OrdersActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case OrdersActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case OrdersActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
