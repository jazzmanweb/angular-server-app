import { Schema, model } from 'mongoose';
import { orderDefinitions } from '../definitions/order.definitions';

const orderSchema: Schema = new Schema({
	...orderDefinitions,
});

export default model('Order', orderSchema);
