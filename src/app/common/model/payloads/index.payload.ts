import { IndexInterface } from '../interfaces/index.interface';

export class IndexPayload implements IndexInterface {
	public id: string;
	public oldId: string;
	public alias: string;
	public published: boolean;

	constructor(options: IndexInterface = {} as IndexInterface) {
		options = options || ({} as IndexInterface);
		this.id = options.id || '';
		this.oldId = options.oldId || '';
		this.alias = options.alias || '';
		this.published = options.published || false;
	}
}
