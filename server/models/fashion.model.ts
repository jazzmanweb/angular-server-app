import { Schema, model } from 'mongoose';
import { fashionDefinitions } from '../definitions/fashion.definitions';

const fashionSchema: Schema = new Schema({
	...fashionDefinitions,
});

export default model('Fashion', fashionSchema);
