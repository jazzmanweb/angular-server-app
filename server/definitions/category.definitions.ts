import { SchemaDefinition } from 'mongoose';
import { dbDefinition } from './db.definitions';
import { sizeDefinitions } from './size.definitions';
import { shippingDefinitions } from './shipping.definitions';

export const categoryDefinitions: SchemaDefinition = {
	...dbDefinition,
	name: { type: 'string', required: true },
	icon: { type: 'string', required: false },
	styleClass: { type: 'string', required: false },
	image: { type: 'string', required: false },
	sizes: { type: [sizeDefinitions], required: false },
	shipping: { type: [shippingDefinitions], required: false },
};
