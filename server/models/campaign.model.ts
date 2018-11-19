import { Schema, model } from 'mongoose';
import { campaignDefinitions } from '../definitions/campaign.definitions';

const campaignSchema: Schema = new Schema({
	...campaignDefinitions,
});

export default model('Campaign', campaignSchema);
