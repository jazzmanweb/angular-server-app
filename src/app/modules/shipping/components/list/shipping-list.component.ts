import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { ShippingActions } from '../../store/actions/shipping.actions';
import { getShippings } from '../../store/selectors/shipping.selectors';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';

@Component({
	selector: 'shipping-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./shipping-list.component.css']
})
export class ShippingListComponent extends AbstractListComponent<
	ShippingPayload
> {
	public listSelector = getShippings;
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
			field: 'price',
			name: 'price'
		}),
		new ColumnModel({
			field: 'prices',
			name: 'prices'
		}),
		new ColumnModel({
			field: 'options',
			name: 'options'
		})
	];

	constructor(
		protected store: Store<StateInterface>,
		protected actions: ShippingActions
	) {
		super({ store, actions });
	}
}
