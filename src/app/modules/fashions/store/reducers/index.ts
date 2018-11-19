import { ActionReducerMap } from '@ngrx/store';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import * as fromFashion from './fashion.reducer';
import * as fromFashions from './fashions.reducer';
import * as fromOldFashions from './old-fashions.reducer';

export interface FashionsModuleStateInterface {
	old: any[];
	list: FashionPayload[];
	item: FashionPayload;
}

export const fashionsModuleReducers: ActionReducerMap<
	FashionsModuleStateInterface
> = {
	old: fromOldFashions.reducer,
	list: fromFashions.reducer,
	item: fromFashion.reducer
};
