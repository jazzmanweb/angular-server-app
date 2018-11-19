import { Schema, model } from 'mongoose';
import { shippingDefinitions } from '../definitions/shipping.definitions';

const shippingSchema: Schema = new Schema({
	...shippingDefinitions,
});

export default model('Shipping', shippingSchema);
