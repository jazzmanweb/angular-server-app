import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { SizesActions } from '../actions/sizes.actions';

const initialState: SizePayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): SizePayload {
	switch (action.type) {
		case SizesActions.LOAD_ITEM: {
			return initialState;
		}
		case SizesActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case SizesActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case SizesActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
