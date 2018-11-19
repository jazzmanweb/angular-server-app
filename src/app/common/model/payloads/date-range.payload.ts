import { DateRangeInterface } from '../interfaces/date-range.interface';

export class DateRangePayload<T = Date> implements DateRangeInterface<T> {
	public startDate: T;
	public endDate: T;

	constructor(options: DateRangeInterface<T> = {} as  DateRangeInterface<T>) {
		options = options || ({} as  DateRangeInterface<T>);
		this.startDate = options.startDate || null;
		this.endDate = options.endDate || null;
	}
}
