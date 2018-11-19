import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { filterDetailsViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { ProductsActions } from '../../store/actions/products.actions';
import { getProduct } from '../../store/selectors/products.selectors';

@Component({
	selector: 'products-details',
	templateUrl: './products-details.component.html',
	styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
	public item$: Observable<ProductPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: ProductsActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getProduct);
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
