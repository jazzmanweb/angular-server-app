import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { filterDetailsViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { FashionsActions } from '../../store/actions/fashions.actions';
import { getFashion } from '../../store/selectors/fashions.selectors';

@Component({
	selector: 'fashions-details',
	templateUrl: './fashions-details.component.html',
	styleUrls: ['./fashions-details.component.css']
})
export class FashionsDetailsComponent implements OnInit {
	public item$: Observable<FashionPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: FashionsActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getFashion);
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
