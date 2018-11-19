import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractListComponent } from 'src/app/common/components/abstract-views/list/abstract-list.component';
import { ColumnModel } from 'src/app/common/model/models/column.model';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { StateInterface } from 'src/app/store/state.interface';
import { CampaignsActions } from '../../store/actions/campaigns.actions';
import { getCampaigns } from '../../store/selectors/campaigns.selectors';

@Component({
	selector: 'campaigns-list',
	templateUrl:
		'../../../../common/components/abstract-views/list/abstract-list.component.html',
	styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent extends AbstractListComponent<
	CampaignPayload
> {
	public listSelector = getCampaigns;
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
			field: 'code',
			name: 'code'
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
		protected actions: CampaignsActions
	) {
		super({ store, actions });
	}
}
