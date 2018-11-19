import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { CampaignsService } from 'src/app/common/services/campaigns/campaigns.service';
import { CampaignsActions } from '../actions/campaigns.actions';

@Injectable()
export class CampaignsEffects {
	@Effect()
	public loadList$: Observable<Action> = this.actions$
		.ofType(
			CampaignsActions.LOAD_LIST,
			CampaignsActions.REMOVE_ITEMS_SUCCESS,
			CampaignsActions.TOGGLE_ITEMS_SUCCESS,
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
		.ofType(CampaignsActions.LOAD_ITEM)
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
		.ofType(CampaignsActions.SAVE_ITEM)
		.pipe(
			switchMap(({ type, payload }: ActionInterface<CampaignPayload>) => {
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
		.ofType(CampaignsActions.REMOVE_ITEMS)
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
		.ofType(CampaignsActions.TOGGLE_ITEMS)
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
		private service: CampaignsService,
		private actions: CampaignsActions
	) {}
}
