import { OldOrderItemInterface } from './old-order-item.interface';

export class OldOrderItemPayload {
	public id: number;
	public name: string;
	public category: string;
	public showall: number;
	public colors: string;
	public colorhex: string;
	public height: number;
	public width: number;
	public length: number;
	public thickness: number;
	public size: string;
	public growth: string;
	public age: string;
	public gender: number;
	public fabric: string;
	public fulfillment: string;
	public description: string;
	public price: number;
	public quantity: number;
	public availability: number;
	public availabilityinfo: string;
	public novelty: number;
	public sale: number;
	public promotion: number;
	public thumb: string;
	public images: string;
	public published: number;
	public select: {
		size?: string;
		color?: string;
	};
	public qty: number;

	constructor(options: OldOrderItemInterface = {} as OldOrderItemInterface) {
		options = options || ({} as OldOrderItemInterface);
		this.id = options.id || null;
		this.name = options.name || null;
		this.category = options.category || null;
		this.showall = options.showall || null;
		this.colors = options.colors || null;
		this.colorhex = options.colorhex || null;
		this.height = options.height || null;
		this.width = options.width || null;
		this.length = options.length || null;
		this.thickness = options.thickness || null;
		this.size = options.size || null;
		this.growth = options.growth || null;
		this.age = options.age || null;
		this.gender = options.gender || null;
		this.fabric = options.fabric || null;
		this.fulfillment = options.fulfillment || null;
		this.description = options.description || null;
		this.price = options.price || null;
		this.quantity = options.quantity || null;
		this.availability = options.availability || null;
		this.availabilityinfo = options.availabilityinfo || null;
		this.novelty = options.novelty || null;
		this.sale = options.sale || null;
		this.promotion = options.promotion || null;
		this.thumb = options.thumb || null;
		this.images = options.images || null;
		this.published = options.published || null;
		this.select = options.select || null;
		this.qty = options.qty || null;
	}
}
