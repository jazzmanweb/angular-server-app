import { Schema, model } from 'mongoose';
import { productDefinitions } from '../definitions/product.definitions';

const productSchema: Schema = new Schema({
	...productDefinitions,
});

export default model('Product', productSchema);
