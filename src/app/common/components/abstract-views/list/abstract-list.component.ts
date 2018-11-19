import { OnDestroy, OnInit } from '@angular/core';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';
import { AbstractActions } from 'src/app/store/abstract.actions';
import { StateInterface } from 'src/app/store/state.interface';

export abstract class AbstractListComponent<T extends IndexPayload>
	implements OnInit, OnDestroy {
	public list$: Observable<T[]>;
	public subscribe: boolean = false;
	public abstract displayedColumns: ColumnModel[];
	public abstract listSelector: MemoizedSelector<object, T[]>;

	constructor(
		public providers: {
			actions?: AbstractActions<T>;
			store?: Store<StateInterface>;
		}
	) {}

	public ngOnInit(): void {
		this.subscribe = true;
		this.list$ = this.providers.store.select(this.listSelector);
		this.providers.store.dispatch(this.providers.actions.clearItemCache());
		this.providers.store.dispatch(this.providers.actions.loadList());
	}

	public ngOnDestroy(): void {
		this.subscribe = false;
	}

	public handleRemoveItem(id: string): void {
		if (!id) {
			return;
		}
		this.providers.store.dispatch(this.providers.actions.removeItems([id]));
	}

	public handleToggleItem(id: string): void {
		if (!id) {
			return;
		}
		this.providers.store.dispatch(this.providers.actions.toggleItems([id]));
	}

	public handleCopyItem(item: T) {
		this.providers.store.dispatch(
			this.providers.actions.loadItemSuccess(item)
		);
	}
}
