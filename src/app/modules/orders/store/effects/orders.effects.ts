import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { OrdersService } from 'src/app/common/services/orders/orders.service';
import { OrdersActions } from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
	@Effect()
	public loadList$: Observable<Action> = this.actions$
		.ofType(
			OrdersActions.LOAD_LIST,
			OrdersActions.REMOVE_ITEMS_SUCCESS,
			OrdersActions.TOGGLE_ITEMS_SUCCESS
		)
		.pipe(
			switchMap(({ type }: ActionInterface) => {
				return this.service.list().pipe(
					map(response => response.payload),
					mergeMap(response => [
						this.actions.loadListSuccess(response)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	@Effect()
	public loadOldList$: Observable<Action> = this.actions$
		.ofType(OrdersActions.LOAD_OLD_LIST)
		.pipe(
			switchMap(({ type }: ActionInterface) => {
				return this.service.oldList().pipe(
					map((response: any[]) =>
						(response || []).map(item => {
							item.contact = JSON.parse(item.contact);
							item.items = JSON.parse(item.items);
							return new OldOrderPayload(item);
						})
					),
					mergeMap((response: OldOrderPayload[]) => [
						this.actions.loadOldListSuccess(response)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	@Effect()
	public loadItem$: Observable<Action> = this.actions$
		.ofType(OrdersActions.LOAD_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<string>) => {
				return this.service.item(payload).pipe(
					map(response => response.payload),
					mergeMap(response => [
						this.actions.loadItemSuccess(response)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	@Effect()
	public saveItem$: Observable<Action> = this.actions$
		.ofType(OrdersActions.SAVE_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<OrderPayload>) => {
				return this.service.save(payload).pipe(
					map(response => response),
					mergeMap(response => [
						this.actions.saveItemSuccess(payload)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	@Effect()
	public removeItems$: Observable<Action> = this.actions$
		.ofType(OrdersActions.REMOVE_ITEMS)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<string[]>) => {
				return this.service.delete(payload).pipe(
					map(response => response),
					mergeMap(response => [
						this.actions.removeItemsSuccess(payload)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	@Effect()
	public toggleItems$: Observable<Action> = this.actions$
		.ofType(OrdersActions.TOGGLE_ITEMS)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<string[]>) => {
				return this.service.toggle(payload).pipe(
					map(response => response),
					mergeMap(response => [
						this.actions.toggleItemsSuccess(payload)
					]),
					catchError((error, caught) => {
						console.error({ error, caught });
						return empty();
					})
				);
			})
		);

	constructor(
		private actions$: Actions,
		private service: OrdersService,
		private actions: OrdersActions
	) {}
}
