import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StateInterface } from 'src/app/store/state.interface';
import { FashionsActions } from '../../store/actions/fashions.actions';
import { getOldFashions, getOldFashionsAsNew } from '../../store/selectors/fashions.selectors';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { ProductsActions } from 'src/app/modules/products/store/actions/products.actions';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { OldFashionPayload } from 'src/app/common/model/old-data/old-fashion.payload';

@Component({
	selector: 'fashions-old-list',
	templateUrl: './fashions-old-list.component.html',
	styleUrls: ['./fashions-old-list.component.css']
})
export class FashionsOldListComponent implements OnInit {
	public list$: Observable<OldFashionPayload[]>;
	public listAsNew$: Observable<FashionPayload[]>;
	public displayedColumns: ColumnModel[] = [
		new ColumnModel({
			field: 'id',
			name: 'id',
		}),
		new ColumnModel({
			field: 'name',
			name: 'name',
		}),
		new ColumnModel({
			field: 'category',
			name: 'category',
		}),
		new ColumnModel({
			field: 'fabric',
			name: 'fabric',
		}),
		new ColumnModel({
			field: 'options',
			name: 'options',
		}),
	];
	public displayedNewColumns: ColumnModel[] = [
		new ColumnModel({
			field: 'id',
			name: 'id',
		}),
		new ColumnModel({
			field: 'name',
			name: 'name',
		}),
		new ColumnModel({
			field: 'description',
			name: 'description',
		}),
		new ColumnModel({
			field: 'options',
			name: 'options',
		}),
	];

	constructor(
		protected store: Store<StateInterface>,
		protected actions: FashionsActions,
		protected productsActions: ProductsActions,
	) {}

	public ngOnInit(): void {
		this.list$ = this.store.select(getOldFashions);
		this.listAsNew$ = this.store.select(getOldFashionsAsNew);
		this.store.dispatch(this.productsActions.loadList());
		this.store.dispatch(this.actions.loadOldList());
	}

	public handleCopyItem(item: FashionPayload) {
		this.store.dispatch(this.actions.loadItemSuccess(item));
	}
}
