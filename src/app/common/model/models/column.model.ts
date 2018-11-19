import { ColumnInterface } from '../interfaces/column.interface';

export class ColumnModel implements ColumnInterface {
	public name: string;
	public field: string;
	public sortable: boolean;

	constructor(options?: ColumnInterface) {
		options = options || {} as ColumnInterface;
		this.name = options.name || '';
		this.field = options.field || '';
		this.sortable = options.sortable === true;
	}
}