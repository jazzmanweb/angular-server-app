import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { OrdersActions } from '../actions/orders.actions';

const initialState: OldOrderPayload[] = [];

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): OldOrderPayload[] {
	switch (action.type) {
		case OrdersActions.LOAD_OLD_LIST_SUCCESS: {
			console.log({ orders: action.payload });
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
