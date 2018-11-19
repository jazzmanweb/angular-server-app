import { IndexInterface } from './index.interface';

export interface DbInterface extends IndexInterface {
	creationDate?: Date;
	modificationDate?: Date;
	unpublishDate?: Date;
}
