import { ActionInterface } from 'src/app/common/model/interfaces/action.interface';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { CampaignsActions } from '../actions/campaigns.actions';

const initialState: CampaignPayload[] = [];

export function reducer(
	state = initialState,
	action: ActionInterface<any>
): CampaignPayload[] {
	switch (action.type) {
		case CampaignsActions.LOAD_LIST_SUCCESS: {
			console.log({ campaigns: action.payload });
			return action.payload;
		}
		case CampaignsActions.CLEAR_LIST_CACHE: {
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
