import { Schema, model } from 'mongoose';

let UserSchema: Schema = new Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true, lowercase: true },
	email: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String, required: true },
})

export default model('UserModel', UserSchema);