import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { SizesService } from 'src/app/common/services/sizes/sizes.service';
import { SizesActions } from '../actions/sizes.actions';

@Injectable()
export class SizesEffects {
	@Effect()
	public loadList$: Observable<Action> = this.actions$
		.ofType(
			SizesActions.LOAD_LIST,
			SizesActions.REMOVE_ITEMS_SUCCESS,
			SizesActions.TOGGLE_ITEMS_SUCCESS,
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
	public loadItem$: Observable<Action> = this.actions$
		.ofType(SizesActions.LOAD_ITEM)
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
		.ofType(SizesActions.SAVE_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<SizePayload>) => {
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
		.ofType(SizesActions.REMOVE_ITEMS)
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
		.ofType(SizesActions.TOGGLE_ITEMS)
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
		private service: SizesService,
		private actions: SizesActions
	) {}
}
