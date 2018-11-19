import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { filterDetailsViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { SizesActions } from '../../store/actions/sizes.actions';
import { getSize } from '../../store/selectors/sizes.selectors';

@Component({
	selector: 'sizes-details',
	templateUrl: './sizes-details.component.html',
	styleUrls: ['./sizes-details.component.css']
})
export class SizesDetailsComponent implements OnInit {
	public item$: Observable<SizePayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: SizesActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getSize);
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
