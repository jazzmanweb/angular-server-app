import { SchemaDefinition } from 'mongoose';
import { dateRangeDefinitions } from './date-range.definitions';
import { dbDefinition } from './db.definitions';
import { imageDefinition } from './image.definitions';

export const campaignDefinitions: SchemaDefinition = {
	...dbDefinition,
	name: { type: 'string', required: true },
	code: { type: 'string', required: false },
	dates: { type: dateRangeDefinitions, required: false },
	images: { type: [imageDefinition], required: false },
	thumbs: { type: ['string'], required: false },
	description: { type: 'string', required: false },
	promotion: { type: 'boolean', required: false },
	novelty: { type: 'boolean', required: false },
	sale: { type: 'boolean', required: false },
};
