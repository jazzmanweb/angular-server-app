import { IndexPayload } from './index.payload';
import { DbInterface } from '../interfaces/db.interface';

export class DbPayload extends IndexPayload implements DbInterface {
	public creationDate: Date;
	public modificationDate: Date;
	public unpublishDate: Date;

	constructor(options: DbInterface = {} as DbInterface) {
		options = options || ({} as DbInterface);
		super(options);
		this.creationDate = options.creationDate || new Date();
		this.modificationDate = options.modificationDate || null;
		this.unpublishDate = options.unpublishDate || null;
	}
}
