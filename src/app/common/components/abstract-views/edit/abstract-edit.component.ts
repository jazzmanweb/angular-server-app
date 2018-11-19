import { OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { MemoizedSelector, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, filter, map, take, takeWhile, tap } from 'rxjs/operators';
import { ControlTypeEnum } from 'src/app/common/model/enums/form.enums';
import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';
import { FormItemType } from 'src/app/common/model/types/form.types';
import { FormService } from 'src/app/common/services/form.service';
import { filterEditViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { AbstractActions } from 'src/app/store/abstract.actions';
import { StateInterface } from 'src/app/store/state.interface';

export abstract class AbstractEditComponent<T extends IndexPayload>
	implements OnInit, OnDestroy {
	public data: T;
	public item$: Observable<T>;
	public optionsList$: Array<Observable<any[]>> = [];
	public controlTypeEnum = ControlTypeEnum;
	public loader: boolean = false;
	public subscribe: boolean = false;
	public abstract controls: FormControlsInterface;
	public abstract saveSuccessAction$;
	public abstract saveFailureAction$;
	public abstract itemSelector: MemoizedSelector<object, T>;

	constructor(
		public providers: {
			route?: ActivatedRoute;
			router?: Router;
			formService?: FormService;
			actions?: AbstractActions<T>;
			actions$?: Actions;
			store?: Store<StateInterface>;
		}
	) {}

	public get form(): FormGroup {
		return this.providers.formService.form;
	}

	public abstract handleSave(form: T): void;

	public ngOnInit(): void {
		this.subscribe = true;
		this.subscribeToSaveSuccess();
		this.subscribeToSaveFailure();
		this.subscribeToRoute();
		this.item$ = this.providers.store.select(this.itemSelector);
		this.subscribeToItem();
		this.getOptions();
		this.subscribeToValueChanges();
	}

	public ngOnDestroy(): void {
		this.subscribe = false;
	}

	public getOptions(): void {}
	public subscribeToValueChanges(): void {}

	public onFormSubmit(form: T): void {
		console.log({ form, formGroup: this.form });
		this.loader = true;
		this.handleSave(form);
	}

	private subscribeToRoute() {
		combineLatest(this.providers.route.data, this.providers.route.params)
			.pipe(
				getItemViewParams,
				filterEditViewParams,
				take(1),
				getIdFromViewParams
			)
			.subscribe((id: string) => {
				this.providers.store.dispatch(
					this.providers.actions.loadItem(id)
				);
			});
	}

	private subscribeToItem(): void {
		this.item$
			.pipe(
				filter(item => !!item),
				take(1)
			)
			.subscribe(item => {
				console.log({ item });
				this.providers.formService.form.patchValue(item);
				this.providers.formService.form.markAsPristine();
			});
	}

	public subscribeToSaveSuccess(): void {
		this.saveSuccessAction$
			.pipe(
				map(({ payload }: ActionInterface<T>) => payload.id),
				debounceTime(2000),
				tap(() => (this.loader = false)),
				filter((id: string) => !!id),
				takeWhile(() => this.subscribe)
			)
			.subscribe((id: string) => {
				this.providers.router.navigate([id, 'edit'], {
					relativeTo: this.providers.route.parent
				});
			});
	}

	public subscribeToSaveFailure() {
		this.saveFailureAction$
			.pipe(
				map(({ payload }: ActionInterface<T>) => payload.id),
				debounceTime(2000),
				tap(() => (this.loader = false)),
				takeWhile(() => this.subscribe)
			)
			.subscribe((id: string) => {
				console.error(id);
			});
	}

	public setImageUploader(control: FormItemType): void {
		this.item$
			.pipe(
				filter(item => !!item),
				take(1)
			)
			.subscribe(item => {
				control.customization = {
					...control.customization,
					id: item.id
				};
			});
	}

	public getControlOptions<T>(
		control: FormItemType,
		list$: Observable<T[]>,
		loadListAction: ActionInterface
	): void {
		this.optionsList$.push(list$);

		list$
			.pipe(
				filter((list: T[]) => list && list.length > 0),
				take(1)
			)
			.subscribe(list => {
				control.options = [...list];
			});

		this.providers.store.dispatch(loadListAction);
	}

	public getControlOptionsFromValue<T>(
		control: FormItemType
		// itemList$: Observable<T[]>,
		// pluck: string,
	): void {
		this.item$
			.pipe(
				filter(
					item =>
						!!item &&
						!!item['categories'] &&
						!!item['categories'][0]['sizes']
				),
				map(item => item['categories'][0]['sizes']),
				filter((list: T[]) => list && list.length > 0),
				take(1)
			)
			.subscribe(list => {
				control.options = [...list];
			});
	}
}
