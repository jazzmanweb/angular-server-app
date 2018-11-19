import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { CategoriesActions } from '../../store/actions/categories.actions';
import { getCategories } from '../../store/selectors/categories.selectors';

@Component({
	selector: 'categories-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent extends AbstractListComponent<
	CategoryPayload
> {
	public listSelector = getCategories;
	public displayedColumns: ColumnModel[] = [
		new ColumnModel({
			field: 'id',
			name: 'id'
		}),
		new ColumnModel({
			field: 'icon',
			name: 'icon'
		}),
		new ColumnModel({
			field: 'name',
			name: 'name'
		}),
		new ColumnModel({
			field: 'sizes.*.name',
			name: 'first size'
		}),
		new ColumnModel({
			field: 'options',
			name: 'options'
		})
	];

	constructor(
		protected store: Store<StateInterface>,
		protected actions: CategoriesActions
	) {
		super({ store, actions });
	}
}
