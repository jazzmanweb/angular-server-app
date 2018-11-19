import { RequestResponseInterface } from '../interfaces/request-response.interface';

export class RequestResponseModel<T> {
	public message: string;
	public payload: T;
	public error: any;

	constructor(options?: RequestResponseInterface<T>) {
		options = options || {} as RequestResponseInterface<T>;
		this.message = options.message || null;
		this.payload = options.payload || null;
		this.error = options.error || null;
	}
}