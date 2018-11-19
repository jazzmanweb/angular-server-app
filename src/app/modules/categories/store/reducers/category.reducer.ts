import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { CategoriesActions } from '../actions/categories.actions';

const initialState: CategoryPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): CategoryPayload {
	switch (action.type) {
		case CategoriesActions.LOAD_ITEM: {
			return initialState;
		}
		case CategoriesActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case CategoriesActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case CategoriesActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
