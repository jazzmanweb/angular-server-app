import { ActionReducerMap } from '@ngrx/store';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import * as fromCategories from './categories.reducer';
import * as fromCategory from './category.reducer';

export interface CategoriesModuleStateInterface {
	list: CategoryPayload[];
	item: CategoryPayload;
}

export const categoriesModuleReducers: ActionReducerMap<
	CategoriesModuleStateInterface
> = {
	list: fromCategories.reducer,
	item: fromCategory.reducer
};
