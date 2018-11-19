import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateInterface } from 'src/app/store/state.interface';
import { ShippingActions } from '../../store/actions/shipping.actions';
import { getShipping } from '../../store/selectors/shipping.selectors';
import {
	getItemViewParams,
	filterDetailsViewParams,
	getIdFromViewParams
} from 'src/app/common/utils/rxjs.utils';
import { take } from 'rxjs/operators';

@Component({
	selector: 'shipping-details',
	templateUrl: './shipping-details.component.html',
	styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
	public item$: Observable<ShippingPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: ShippingActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getShipping);
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
