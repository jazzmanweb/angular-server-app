import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { FashionsActions } from '../actions/fashions.actions';

const initialState: any[] = [];

export function reducer(state = initialState, action: ActionInterface<any>): any[] {
	switch (action.type) {
		case FashionsActions.LOAD_OLD_LIST_SUCCESS: {
			console.log({products: action.payload});
			return action.payload;
		}
		default: {
			return state;
		}
	}
}
