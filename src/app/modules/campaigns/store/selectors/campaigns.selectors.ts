import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { CAMPAIGNS_FEATURE_SELECTOR } from '../../campaigns.constants';
import { CampaignsModuleStateInterface } from '../reducers';

const campaignsSelector = createFeatureSelector(CAMPAIGNS_FEATURE_SELECTOR);

export const getCampaignsState = createSelector(
	campaignsSelector,
	(state: CampaignsModuleStateInterface): CampaignPayload[] => state.list
);

export const getCampaigns = createSelector(
	getCampaignsState,
	(state: CampaignPayload[]): CampaignPayload[] =>
		(state || []).map(item => new CampaignPayload(item))
);

export const getCampaignState = createSelector(
	campaignsSelector,
	(state: CampaignsModuleStateInterface): CampaignPayload => state.item
);

export const getCampaign = createSelector(
	getCampaignState,
	(state: CampaignPayload): CampaignPayload =>
		state ? new CampaignPayload(state) : null
);
