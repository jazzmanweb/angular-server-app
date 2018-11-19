import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OldOrderPayload } from 'src/app/common/model/old-data/old-order.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { OrdersActions } from '../../store/actions/orders.actions';
import { getOldOrders } from '../../store/selectors/orders.selectors';
import { ColumnModel } from 'src/app/common/model/models/column.model';

@Component({
	selector: 'orders-old-list',
	templateUrl: './orders-old-list.component.html',
	styleUrls: ['./orders-old-list.component.css']
})
export class OrdersOldListComponent implements OnInit {
	public list$: Observable<OldOrderPayload[]>;
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
	];
	
	constructor(
		protected store: Store<StateInterface>,
		protected actions: OrdersActions
	) {}

	public ngOnInit(): void {
		this.list$ = this.store.select(getOldOrders);
		this.store.dispatch(this.actions.loadOldList());
	}
}
