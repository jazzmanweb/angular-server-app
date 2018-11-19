import { SchemaDefinition } from 'mongoose';

export const dateRangeDefinitions: SchemaDefinition = {
	dateFrom: { type: 'date', required: false },
	dateTo: { type: 'date', required: false },
};
