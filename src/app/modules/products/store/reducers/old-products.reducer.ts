import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OldProductPayload } from 'src/app/common/model/old-data/old-product.payload';
import { ProductsActions } from '../actions/products.actions';

const initialState: OldProductPayload[] = [];

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): OldProductPayload[] {
	switch (action.type) {
		case ProductsActions.LOAD_OLD_LIST_SUCCESS: {
			console.log({ products: action.payload });
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
