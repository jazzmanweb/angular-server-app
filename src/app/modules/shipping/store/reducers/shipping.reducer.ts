import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { ShippingActions } from '../actions/shipping.actions';

const initialState: ShippingPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): ShippingPayload {
	switch (action.type) {
		case ShippingActions.LOAD_ITEM: {
			return initialState;
		}
		case ShippingActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case ShippingActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case ShippingActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
