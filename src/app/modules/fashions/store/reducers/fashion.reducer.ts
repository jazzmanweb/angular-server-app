import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { FashionsActions } from '../actions/fashions.actions';

const initialState: FashionPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): FashionPayload {
	switch (action.type) {
		case FashionsActions.LOAD_ITEM: {
			return initialState;
		}
		case FashionsActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case FashionsActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case FashionsActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
