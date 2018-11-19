import { ActionInterface } from '../common/model/interfaces/action.interface';

export abstract class AbstractActions<T> {
	// public abstract LOAD_LIST: string;
	// public abstract LOAD_LIST_SUCCESS: string;
	// public abstract LOAD_LIST_FAILURE: string;

	// public abstract LOAD_ITEM: string;
	// public abstract LOAD_ITEM_SUCCESS: string;
	// public abstract LOAD_ITEM_FAILURE: string;

	// public abstract SAVE_ITEM: string;
	// public abstract SAVE_ITEM_SUCCESS: string;
	// public abstract SAVE_ITEM_FAILURE: string;

	// public abstract REMOVE_ITEMS: string;
	// public abstract REMOVE_ITEMS_SUCCESS: string;
	// public abstract REMOVE_ITEMS_FAILURE: string;

	// public abstract TOGGLE_ITEMS: string;
	// public abstract TOGGLE_ITEMS_SUCCESS: string;
	// public abstract TOGGLE_ITEMS_FAILURE: string;

	// public abstract CLEAR_CACHE: string;
	// public abstract CLEAR_ITEM_CACHE: string;
	// public abstract CLEAR_LIST_CACHE: string;

	public abstract loadList(): ActionInterface;
	public abstract loadListSuccess(payload: T[]): ActionInterface<T[]>;
	public abstract loadListFailure(): ActionInterface;

	public abstract loadItem(id: string): ActionInterface<string>;
	public abstract loadItemSuccess(payload: T): ActionInterface<T>;
	public abstract loadItemFailure(): ActionInterface;

	public abstract saveItem(payload: T): ActionInterface<T>;
	public abstract saveItemSuccess(payload: T): ActionInterface<T>;
	public abstract saveItemFailure(): ActionInterface;

	public abstract removeItems(ids: string[]): ActionInterface<string[]>;
	public abstract removeItemsSuccess(ids: string[]): ActionInterface<string[]>;
	public abstract removeItemsFailure(): ActionInterface;

	public abstract toggleItems(ids: string[]): ActionInterface<string[]>;
	public abstract toggleItemsSuccess(ids: string[]): ActionInterface<string[]>;
	public abstract toggleItemsFailure(): ActionInterface;

	public abstract clearCache(): ActionInterface;
	public abstract clearItemCache(): ActionInterface;
	public abstract clearListCache(): ActionInterface;
}
