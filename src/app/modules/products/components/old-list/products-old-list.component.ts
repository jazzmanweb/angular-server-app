import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OldProductPayload } from 'src/app/common/model/old-data/old-product.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { ProductsActions } from '../../store/actions/products.actions';
import { getOldProducts, getOldProductsAsNew } from '../../store/selectors/products.selectors';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { CategoriesActions } from 'src/app/modules/categories/store/actions/categories.actions';

@Component({
	selector: 'products-old-list',
	templateUrl: './products-old-list.component.html',
	styleUrls: ['./products-old-list.component.css']
})
export class ProductsOldListComponent implements OnInit {
	public list$: Observable<OldProductPayload[]>;
	public listAsNew$: Observable<ProductPayload[]>;
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
			field: 'colors',
			name: 'colors',
		}),
		new ColumnModel({
			field: 'fabric',
			name: 'fabric',
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
		protected actions: ProductsActions,
		protected categoriesActions: CategoriesActions,
	) {}

	public ngOnInit(): void {
		this.list$ = this.store.select(getOldProducts);
		this.listAsNew$ = this.store.select(getOldProductsAsNew);
		this.store.dispatch(this.categoriesActions.loadList());
		this.store.dispatch(this.actions.loadOldList());
	}

	public handleCopyItem(item: ProductPayload) {
		this.store.dispatch(this.actions.loadItemSuccess(item));
	}
}
