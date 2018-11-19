import { SchemaDefinition } from 'mongoose';

export const imageDefinition: SchemaDefinition = {
	path: { type: "string", required: false },
	filename: { type: 'string', required: true },
	extension: { type: 'string', required: false },
};
