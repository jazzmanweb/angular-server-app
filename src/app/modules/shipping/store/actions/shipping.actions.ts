import { Injectable } from '@angular/core';
import { ActionDecorator } from 'src/app/common/decorators/action.decorator';
import { ActionsDecorator } from 'src/app/common/decorators/actions.decorator';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { AbstractActions } from 'src/app/store/abstract.actions';

@Injectable()
@ActionsDecorator()
export class ShippingActions extends AbstractActions<ShippingPayload> {
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
			type: ShippingActions.LOAD_LIST
		};
	}

	public loadListSuccess(
		payload: ShippingPayload[]
	): ActionInterface<ShippingPayload[]> {
		return {
			type: ShippingActions.LOAD_LIST_SUCCESS,
			payload
		};
	}

	public loadListFailure(): ActionInterface {
		return {
			type: ShippingActions.LOAD_LIST_FAILURE
		};
	}

	public loadItem(id: string): ActionInterface<string> {
		return {
			type: ShippingActions.LOAD_ITEM,
			payload: id
		};
	}

	public loadItemSuccess(
		payload: ShippingPayload
	): ActionInterface<ShippingPayload> {
		return {
			type: ShippingActions.LOAD_ITEM_SUCCESS,
			payload
		};
	}

	public loadItemFailure(): ActionInterface {
		return {
			type: ShippingActions.LOAD_ITEM_FAILURE
		};
	}

	public saveItem(
		payload: ShippingPayload
	): ActionInterface<ShippingPayload> {
		return {
			type: ShippingActions.SAVE_ITEM,
			payload
		};
	}

	public saveItemSuccess(
		payload: ShippingPayload
	): ActionInterface<ShippingPayload> {
		return {
			type: ShippingActions.SAVE_ITEM_SUCCESS,
			payload
		};
	}

	public saveItemFailure(): ActionInterface {
		return {
			type: ShippingActions.SAVE_ITEM_FAILURE
		};
	}

	public removeItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: ShippingActions.REMOVE_ITEMS,
			payload: ids
		};
	}

	public removeItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: ShippingActions.REMOVE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public removeItemsFailure(): ActionInterface {
		return {
			type: ShippingActions.REMOVE_ITEMS_FAILURE
		};
	}

	public toggleItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: ShippingActions.TOGGLE_ITEMS,
			payload: ids
		};
	}

	public toggleItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: ShippingActions.TOGGLE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public toggleItemsFailure(): ActionInterface {
		return {
			type: ShippingActions.TOGGLE_ITEMS_FAILURE
		};
	}

	public clearCache(): ActionInterface {
		return {
			type: ShippingActions.CLEAR_CACHE,
		};
	}

	public clearItemCache(): ActionInterface {
		return {
			type: ShippingActions.CLEAR_ITEM_CACHE,
		};
	}

	public clearListCache(): ActionInterface {
		return {
			type: ShippingActions.CLEAR_LIST_CACHE,
		};
	}
}
