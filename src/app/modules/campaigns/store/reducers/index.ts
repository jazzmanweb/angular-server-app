import { ActionReducerMap } from '@ngrx/store';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import * as fromCampaign from './campaign.reducer';
import * as fromCampaigns from './campaigns.reducer';

export interface CampaignsModuleStateInterface {
	list: CampaignPayload[];
	item: CampaignPayload;
}

export const campaignsModuleReducers: ActionReducerMap<
	CampaignsModuleStateInterface
> = {
	list: fromCampaigns.reducer,
	item: fromCampaign.reducer
};
