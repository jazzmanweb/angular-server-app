import { ActionReducerMap } from '@ngrx/store';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import * as fromSize from './size.reducer';
import * as fromSizes from './sizes.reducer';

export interface SizesModuleStateInterface {
	list: SizePayload[];
	item: SizePayload;
}

export const sizesModuleReducers: ActionReducerMap<
	SizesModuleStateInterface
> = {
	list: fromSizes.reducer,
	item: fromSize.reducer
};
