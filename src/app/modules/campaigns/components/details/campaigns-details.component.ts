import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { filterDetailsViewParams, getIdFromViewParams, getItemViewParams } from 'src/app/common/utils/rxjs.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { CampaignsActions } from '../../store/actions/campaigns.actions';
import { getCampaign } from '../../store/selectors/campaigns.selectors';

@Component({
	selector: 'campaigns-details',
	templateUrl: './campaigns-details.component.html',
	styleUrls: ['./campaigns-details.component.css']
})
export class CampaignsDetailsComponent implements OnInit {
	public item$: Observable<CampaignPayload>;

	constructor(
		protected route: ActivatedRoute,
		protected store: Store<StateInterface>,
		protected actions: CampaignsActions
	) {}

	public ngOnInit() {
		this.item$ = this.store.select(getCampaign);
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
