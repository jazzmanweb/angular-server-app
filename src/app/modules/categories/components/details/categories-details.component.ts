import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { filterDetailsViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { CategoriesActions } from '../../store/actions/categories.actions';
import { getCategory } from '../../store/selectors/categories.selectors';

@Component({
	selector: 'categories-details',
	templateUrl: './categories-details.component.html',
	styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {
	public item$: Observable<CategoryPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: CategoriesActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getCategory);
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
