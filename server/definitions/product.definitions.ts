import { SchemaDefinition } from 'mongoose';
import { campaignDefinitions } from './campaign.definitions';
import { categoryDefinitions } from './category.definitions';
import { dbDefinition } from './db.definitions';
import { imageDefinition } from './image.definitions';
import { shippingDefinitions } from './shipping.definitions';
import { sizeDefinitions } from './size.definitions';

export const productDefinitions: SchemaDefinition = {
	...dbDefinition,
	name: { type: 'string', required: true },
	description: { type: 'string', required: false },
	categories: { type: [categoryDefinitions], required: false },
	price: { type: ['number'], required: false },
	images: { type: [imageDefinition], required: false },
	colors: { type: ['string'], required: false },
	sizes: { type: [sizeDefinitions], required: false },
	campaigns: { type: [campaignDefinitions], required: false },
	shipping: { type: [shippingDefinitions], required: false },
	available: { type: 'string', required: false }
};
