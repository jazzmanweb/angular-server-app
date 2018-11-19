import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { OldProductPayload } from 'src/app/common/model/old-data/old-product.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ProductsService } from 'src/app/common/services/products/products.service';
import { ProductsActions } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
	@Effect()
	public loadList$: Observable<Action> = this.actions$
		.ofType(
			ProductsActions.LOAD_LIST,
			ProductsActions.REMOVE_ITEMS_SUCCESS,
			ProductsActions.TOGGLE_ITEMS_SUCCESS,
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
		.ofType(ProductsActions.LOAD_OLD_LIST)
		.pipe(
			switchMap(({ type }: ActionInterface) => {
				return this.service.oldList().pipe(
					map((response: OldProductPayload[]) =>
						(response || []).map(
							item => new OldProductPayload(item)
						)
					),
					mergeMap((response: OldProductPayload[]) => [
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
		.ofType(ProductsActions.LOAD_ITEM)
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
		.ofType(ProductsActions.SAVE_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<ProductPayload>) => {
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
		.ofType(ProductsActions.REMOVE_ITEMS)
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
		.ofType(ProductsActions.TOGGLE_ITEMS)
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
		private service: ProductsService,
		private actions: ProductsActions
	) {}
}
