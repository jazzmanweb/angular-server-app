import { SchemaDefinition } from 'mongoose';
import { dbDefinition } from './db.definitions';

export const sizeDefinitions: SchemaDefinition = {
	...dbDefinition,
	name: { type: 'string', required: true },
	height: { type: 'number', required: false },
	width: { type: 'number', required: false },
	length: { type: 'number', required: false },
	thickness: { type: 'number', required: false },
	layers: { type: 'string', required: false },
	size: { type: 'string', required: false },
	age: { type: 'string', required: false },
	growth: { type: 'string', required: false },
	gender: { type: 'string', required: false }
};
