import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ProductsActions } from '../actions/products.actions';

const initialState: ProductPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): ProductPayload {
	switch (action.type) {
		case ProductsActions.LOAD_ITEM: {
			return initialState;
		}
		case ProductsActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case ProductsActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case ProductsActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
