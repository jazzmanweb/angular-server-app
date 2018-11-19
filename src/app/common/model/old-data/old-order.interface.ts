import { OldContactInterface } from './old-contact.interface';
import { OldOrderItemInterface } from './old-order-item.interface';

export interface OldOrderInterface {
	id?: number;
    orderDate?: Date;
    uid?: number;
    name?: string;
    email?: string;
    contact?: OldContactInterface;
    items?: OldOrderItemInterface[];
    total?: number;
    method?: string;
    status?: number;
}
