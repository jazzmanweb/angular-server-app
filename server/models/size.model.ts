import { Schema, model } from 'mongoose';
import { sizeDefinitions } from '../definitions/size.definitions';

const sizeSchema: Schema = new Schema({
	...sizeDefinitions,
});

export default model('Size', sizeSchema);
