import { OldContactInterface } from './old-contact.interface';

export class OldContactPayload {
	public email: string;
	public firstname: string;
	public lastname: string;
	public address1: string;
	public zip: string;
	public city: string;
	public state: string;

	constructor(options: OldContactInterface = {} as OldContactInterface) {
		options = options || ({} as OldContactInterface);
		this.email = options.email || null;
		this.firstname = options.firstname || null;
		this.lastname = options.lastname || null;
		this.address1 = options.address1 || null;
		this.zip = options.zip || null;
		this.city = options.city || null;
		this.state = options.state || null;
	}
}
