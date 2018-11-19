import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { FashionsService } from 'src/app/common/services/fashions/fashions.service';
import { FashionsActions } from '../actions/fashions.actions';

@Injectable()
export class FashionsEffects {
	@Effect()
	public loadList$: Observable<Action> = this.actions$
		.ofType(
			FashionsActions.LOAD_LIST,
			FashionsActions.REMOVE_ITEMS_SUCCESS,
			FashionsActions.TOGGLE_ITEMS_SUCCESS,
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
		.ofType(FashionsActions.LOAD_OLD_LIST)
		.pipe(
			switchMap(({ type }: ActionInterface) => {
				return this.service.oldList().pipe(
					map((response: any[]) => response),
					mergeMap((response: any[]) => [
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
		.ofType(FashionsActions.LOAD_ITEM)
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
		.ofType(FashionsActions.SAVE_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<FashionPayload>) => {
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
		.ofType(FashionsActions.REMOVE_ITEMS)
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
		.ofType(FashionsActions.TOGGLE_ITEMS)
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
		private service: FashionsService,
		private actions: FashionsActions
	) {}
}
