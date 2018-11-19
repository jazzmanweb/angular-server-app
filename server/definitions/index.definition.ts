import { SchemaDefinition } from 'mongoose';

export const indexDefinition: SchemaDefinition = {
	id: { type: "string", required: false },
	oldId: { type: "string", required: false },
	alias: { type: 'string', required: false },
	published: { type: 'boolean', required: true },
};
