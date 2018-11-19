import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { CATEGORIES_FEATURE_SELECTOR } from '../../categories.constants';
import { CategoriesModuleStateInterface } from '../reducers';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';

const categoriesSelector = createFeatureSelector(CATEGORIES_FEATURE_SELECTOR);

export const getCategoriesState = createSelector(
	categoriesSelector,
	(state: CategoriesModuleStateInterface): CategoryPayload[] => state.list
);

export const getCategories = createSelector(
	getCategoriesState,
	(state: CategoryPayload[]): CategoryPayload[] =>
		(state || []).map(item => new CategoryPayload(item))
);

export const getCategoryState = createSelector(
	categoriesSelector,
	(state: CategoriesModuleStateInterface): CategoryPayload => state.item
);

export const getCategory = createSelector(
	getCategoryState,
	(state: CategoryPayload): CategoryPayload =>
		state ? new CategoryPayload(state) : null
);

export const getCategorySizes = createSelector(
	getCategory,
	(state: CategoryPayload): IndexPayload[] => {
		return state ? state.sizes : []
	}
)
