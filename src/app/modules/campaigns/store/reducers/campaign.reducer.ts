import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { CampaignsActions } from '../actions/campaigns.actions';

const initialState: CampaignPayload = null;

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): CampaignPayload {
	switch (action.type) {
		case CampaignsActions.LOAD_ITEM: {
			return initialState;
		}
		case CampaignsActions.LOAD_ITEM_SUCCESS: {
			return action.payload;
		}
		case CampaignsActions.CLEAR_ITEM_CACHE: {
			return initialState;
		}
		case CampaignsActions.CLEAR_CACHE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}
