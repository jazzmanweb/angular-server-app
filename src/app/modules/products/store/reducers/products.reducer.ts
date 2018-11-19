import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ProductsActions } from '../actions/products.actions';

const initialState: ProductPayload[] = [];

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): ProductPayload[] {
	switch (action.type) {
		case ProductsActions.LOAD_LIST_SUCCESS: {
			console.log({ products: action.payload });
			return action.payload;
		}
		case ProductsActions.CLEAR_LIST_CACHE: {
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
