import { DbInterface } from './db.interface';

export interface OrderInterface extends DbInterface {
	date?: Date;
}
