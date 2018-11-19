import { Schema, model } from 'mongoose';
import { categoryDefinitions } from '../definitions/category.definitions';

const categorySchema: Schema = new Schema({
	...categoryDefinitions,
});

export default model('Category', categorySchema);
