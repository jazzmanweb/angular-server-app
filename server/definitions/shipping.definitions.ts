import { SchemaDefinition } from 'mongoose';
import { dbDefinition } from './db.definitions';

export const shippingDefinitions: SchemaDefinition = {
	...dbDefinition,
	name: { type: 'string', required: false },
	price: { type: 'number', required: false },
	prices: { type: ['number'], required: true },
};
