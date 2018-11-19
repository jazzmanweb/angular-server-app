import { Injectable } from '@angular/core';
import { ActionDecorator } from 'src/app/common/decorators/action.decorator';
import { ActionsDecorator } from 'src/app/common/decorators/actions.decorator';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { AbstractActions } from 'src/app/store/abstract.actions';

@Injectable()
@ActionsDecorator()
export class CategoriesActions extends AbstractActions<CategoryPayload> {
	@ActionDecorator()
	public static LOAD_LIST: string;
	@ActionDecorator()
	public static LOAD_LIST_SUCCESS: string;
	@ActionDecorator()
	public static LOAD_LIST_FAILURE: string;

	@ActionDecorator()
	public static LOAD_ITEM: string;
	@ActionDecorator()
	public static LOAD_ITEM_SUCCESS: string;
	@ActionDecorator()
	public static LOAD_ITEM_FAILURE: string;

	@ActionDecorator()
	public static SAVE_ITEM: string;
	@ActionDecorator()
	public static SAVE_ITEM_SUCCESS: string;
	@ActionDecorator()
	public static SAVE_ITEM_FAILURE: string;

	@ActionDecorator()
	public static REMOVE_ITEMS: string;
	@ActionDecorator()
	public static REMOVE_ITEMS_SUCCESS: string;
	@ActionDecorator()
	public static REMOVE_ITEMS_FAILURE: string;

	@ActionDecorator()
	public static TOGGLE_ITEMS: string;
	@ActionDecorator()
	public static TOGGLE_ITEMS_SUCCESS: string;
	@ActionDecorator()
	public static TOGGLE_ITEMS_FAILURE: string;

	@ActionDecorator()
	public static CLEAR_CACHE: string;
	@ActionDecorator()
	public static CLEAR_ITEM_CACHE: string;
	@ActionDecorator()
	public static CLEAR_LIST_CACHE: string;

	public loadList(): ActionInterface {
		return {
			type: CategoriesActions.LOAD_LIST
		};
	}

	public loadListSuccess(
		payload: CategoryPayload[]
	): ActionInterface<CategoryPayload[]> {
		return {
			type: CategoriesActions.LOAD_LIST_SUCCESS,
			payload
		};
	}

	public loadListFailure(): ActionInterface {
		return {
			type: CategoriesActions.LOAD_LIST_FAILURE
		};
	}

	public loadItem(id: string): ActionInterface<string> {
		return {
			type: CategoriesActions.LOAD_ITEM,
			payload: id
		};
	}

	public loadItemSuccess(
		payload: CategoryPayload
	): ActionInterface<CategoryPayload> {
		return {
			type: CategoriesActions.LOAD_ITEM_SUCCESS,
			payload
		};
	}

	public loadItemFailure(): ActionInterface {
		return {
			type: CategoriesActions.LOAD_ITEM_FAILURE
		};
	}

	public saveItem(
		payload: CategoryPayload
	): ActionInterface<CategoryPayload> {
		return {
			type: CategoriesActions.SAVE_ITEM,
			payload
		};
	}

	public saveItemSuccess(
		payload: CategoryPayload
	): ActionInterface<CategoryPayload> {
		return {
			type: CategoriesActions.SAVE_ITEM_SUCCESS,
			payload
		};
	}

	public saveItemFailure(): ActionInterface {
		return {
			type: CategoriesActions.SAVE_ITEM_FAILURE
		};
	}

	public removeItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: CategoriesActions.REMOVE_ITEMS,
			payload: ids
		};
	}

	public removeItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: CategoriesActions.REMOVE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public removeItemsFailure(): ActionInterface {
		return {
			type: CategoriesActions.REMOVE_ITEMS_FAILURE
		};
	}

	public toggleItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: CategoriesActions.TOGGLE_ITEMS,
			payload: ids
		};
	}

	public toggleItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: CategoriesActions.TOGGLE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public toggleItemsFailure(): ActionInterface {
		return {
			type: CategoriesActions.TOGGLE_ITEMS_FAILURE
		};
	}

	public clearCache(): ActionInterface {
		return {
			type: CategoriesActions.CLEAR_CACHE
		};
	}

	public clearItemCache(): ActionInterface {
		return {
			type: CategoriesActions.CLEAR_ITEM_CACHE
		};
	}

	public clearListCache(): ActionInterface {
		return {
			type: CategoriesActions.CLEAR_LIST_CACHE
		};
	}
}
