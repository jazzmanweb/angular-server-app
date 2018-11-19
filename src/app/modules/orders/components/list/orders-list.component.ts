import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { OrdersActions } from '../../store/actions/orders.actions';
import { getOrders } from '../../store/selectors/orders.selectors';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';

@Component({
	selector: 'orders-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent extends AbstractListComponent<OrderPayload> {
	public listSelector = getOrders;
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
		protected actions: OrdersActions
	) {
		super({ store, actions });
	}
}
