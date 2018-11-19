import { SchemaDefinition } from 'mongoose';
import { productDefinitions } from './product.definitions';
import { dbDefinition } from './db.definitions';

export const fashionDefinitions: SchemaDefinition = {
	...dbDefinition,
	product: { type: productDefinitions, required: true },
	...productDefinitions,
};
