import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { SizesActions } from '../../store/actions/sizes.actions';
import { getSizes } from '../../store/selectors/sizes.selectors';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';

@Component({
	selector: 'sizes-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./sizes-list.component.css']
})
export class SizesListComponent extends AbstractListComponent<SizePayload> {
	public listSelector = getSizes;
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
			field: 'size',
			name: 'size'
		}),
		new ColumnModel({
			field: 'age',
			name: 'age'
		}),
		new ColumnModel({
			field: 'growth',
			name: 'growth'
		}),
		new ColumnModel({
			field: 'gender',
			name: 'gender'
		}),
		new ColumnModel({
			field: 'options',
			name: 'options'
		})
	];

	constructor(
		protected store: Store<StateInterface>,
		protected actions: SizesActions
	) {
		super({ store, actions });
	}
}
