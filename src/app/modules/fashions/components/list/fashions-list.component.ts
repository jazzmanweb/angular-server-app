import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { FashionsActions } from '../../store/actions/fashions.actions';
import { getFashions } from '../../store/selectors/fashions.selectors';

@Component({
	selector: 'fashions-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./fashions-list.component.css']
})
export class FashionsListComponent extends AbstractListComponent<
	FashionPayload
> {
	public listSelector = getFashions;
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
		protected actions: FashionsActions
	) {
		super({ store, actions });
	}
}
