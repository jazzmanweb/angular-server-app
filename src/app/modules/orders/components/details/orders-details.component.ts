import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateInterface } from 'src/app/store/state.interface';
import { OrdersActions } from '../../store/actions/orders.actions';
import { getOrder } from '../../store/selectors/orders.selectors';
import {
	getItemViewParams,
	filterDetailsViewParams,
	getIdFromViewParams
} from 'src/app/common/utils/rxjs.utils';
import { take } from 'rxjs/operators';

@Component({
	selector: 'orders-details',
	templateUrl: './orders-details.component.html',
	styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
	public item$: Observable<OrderPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: OrdersActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getOrder);
		combineLatest(this.route.data, this.route.params)
			.pipe(
				getItemViewParams,
				filterDetailsViewParams,
				getIdFromViewParams,
				take(1)
			)
			.subscribe((id: string) => {
				this.store.dispatch(this.actions.loadItem(id));
			});
	}
}
