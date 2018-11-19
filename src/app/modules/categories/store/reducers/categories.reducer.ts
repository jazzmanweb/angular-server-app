import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { CategoriesActions } from '../actions/categories.actions';

const initialState: CategoryPayload[] = [];

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): CategoryPayload[] {
	switch (action.type) {
		case CategoriesActions.LOAD_LIST_SUCCESS: {
			console.log({ categories: action.payload });
			return action.payload;
		}
		case CategoriesActions.CLEAR_LIST_CACHE: {
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
