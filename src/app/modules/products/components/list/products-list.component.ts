import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { ProductsActions } from '../../store/actions/products.actions';
import { getProducts } from '../../store/selectors/products.selectors';

@Component({
	selector: 'products-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent extends AbstractListComponent<
	ProductPayload
> {
	public listSelector = getProducts;
	public displayedColumns: ColumnModel[] = [
		new ColumnModel({
			field: 'id',
			name: 'id'
		}),
		new ColumnModel({
			field: 'name',
			name: 'name'
		}),
		new ColumnModel({
			field: 'description',
			name: 'description'
		}),
		new ColumnModel({
			field: 'options',
			name: 'options'
		})
	];

	constructor(
		protected store: Store<StateInterface>,
		protected actions: ProductsActions
	) {
		super({ store, actions });
	}
}
