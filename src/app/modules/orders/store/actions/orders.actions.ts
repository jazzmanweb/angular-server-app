import { Injectable } from '@angular/core';
import { ActionDecorator } from 'src/app/common/decorators/action.decorator';
import { ActionsDecorator } from 'src/app/common/decorators/actions.decorator';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { AbstractActions } from 'src/app/store/abstract.actions';

@Injectable()
@ActionsDecorator()
export class OrdersActions extends AbstractActions<OrderPayload> {
	@ActionDecorator()
	public static LOAD_LIST: string;
	@ActionDecorator()
	public static LOAD_LIST_SUCCESS: string;
	@ActionDecorator()
	public static LOAD_LIST_FAILURE: string;

	@ActionDecorator()
	public static LOAD_OLD_LIST: string;
	@ActionDecorator()
	public static LOAD_OLD_LIST_SUCCESS: string;
	@ActionDecorator()
	public static LOAD_OLD_LIST_FAILURE: string;

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
			type: OrdersActions.LOAD_LIST
		};
	}

	public loadListSuccess(
		payload: OrderPayload[]
	): ActionInterface<OrderPayload[]> {
		return {
			type: OrdersActions.LOAD_LIST_SUCCESS,
			payload
		};
	}

	public loadListFailure(): ActionInterface {
		return {
			type: OrdersActions.LOAD_LIST_FAILURE
		};
	}

	public loadOldList(): ActionInterface {
		return {
			type: OrdersActions.LOAD_OLD_LIST
		};
	}

	public loadOldListSuccess(
		payload: OldOrderPayload[]
	): ActionInterface<OldOrderPayload[]> {
		return {
			type: OrdersActions.LOAD_OLD_LIST_SUCCESS,
			payload
		};
	}

	public loadOldListFailure(): ActionInterface {
		return {
			type: OrdersActions.LOAD_OLD_LIST_FAILURE
		};
	}

	public loadItem(id: string): ActionInterface<string> {
		return {
			type: OrdersActions.LOAD_ITEM,
			payload: id
		};
	}

	public loadItemSuccess(
		payload: OrderPayload
	): ActionInterface<OrderPayload> {
		return {
			type: OrdersActions.LOAD_ITEM_SUCCESS,
			payload
		};
	}

	public loadItemFailure(): ActionInterface {
		return {
			type: OrdersActions.LOAD_ITEM_FAILURE
		};
	}

	public saveItem(payload: OrderPayload): ActionInterface<OrderPayload> {
		return {
			type: OrdersActions.SAVE_ITEM,
			payload
		};
	}

	public saveItemSuccess(
		payload: OrderPayload
	): ActionInterface<OrderPayload> {
		return {
			type: OrdersActions.SAVE_ITEM_SUCCESS,
			payload
		};
	}

	public saveItemFailure(): ActionInterface {
		return {
			type: OrdersActions.SAVE_ITEM_FAILURE
		};
	}

	public removeItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: OrdersActions.REMOVE_ITEMS,
			payload: ids
		};
	}

	public removeItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: OrdersActions.REMOVE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public removeItemsFailure(): ActionInterface {
		return {
			type: OrdersActions.REMOVE_ITEMS_FAILURE
		};
	}

	public toggleItems(ids: string[]): ActionInterface<string[]> {
		return {
			type: OrdersActions.TOGGLE_ITEMS,
			payload: ids
		};
	}

	public toggleItemsSuccess(ids: string[]): ActionInterface<string[]> {
		return {
			type: OrdersActions.TOGGLE_ITEMS_SUCCESS,
			payload: ids
		};
	}

	public toggleItemsFailure(): ActionInterface {
		return {
			type: OrdersActions.TOGGLE_ITEMS_FAILURE
		};
	}

	public clearCache(): ActionInterface {
		return {
			type: OrdersActions.CLEAR_CACHE,
		};
	}

	public clearItemCache(): ActionInterface {
		return {
			type: OrdersActions.CLEAR_ITEM_CACHE,
		};
	}

	public clearListCache(): ActionInterface {
		return {
			type: OrdersActions.CLEAR_LIST_CACHE,
		};
	}
}
