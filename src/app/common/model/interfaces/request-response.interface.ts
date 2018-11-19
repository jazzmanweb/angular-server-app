export interface RequestResponseInterface<T> {
	message: string;
	payload?: T;
	error?: any;
}
