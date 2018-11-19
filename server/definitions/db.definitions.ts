import { SchemaDefinition } from 'mongoose';
import { indexDefinition } from './index.definition';

export const dbDefinition: SchemaDefinition = {
	...indexDefinition,
	creationDate: { type: 'date', required: true },
	modificationDate: { type: 'date', required: false },
	unpublishDate: { type: 'date', required: false },
};
