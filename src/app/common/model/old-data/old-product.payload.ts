import { OldProductInterface } from './old-product.interface';

export class OldProductPayload {
	public id: number;
	public sort: number;
	public name: string;
	public category: string;
	public showall: number;
	public colors: string;
	public colorhex: string;
	public height: number;
	public width: number;
	public length: number;
	public thickness: number;
	public sizetypes: string;
	public sizeslist: string;
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

	constructor(options: OldProductInterface = {} as OldProductInterface) {
		options = options || ({} as OldProductInterface);
		this.id = options.id || null;
		this.sort = options.sort || null;
		this.name = options.name || null;
		this.category = options.category || null;
		this.showall = options.showall || null;
		this.colors = options.colors || null;
		this.colorhex = options.colorhex || null;
		this.height = options.height || null;
		this.width = options.width || null;
		this.length = options.length || null;
		this.thickness = options.thickness || null;
		this.sizetypes = options.sizetypes || null;
		this.sizeslist = options.sizeslist || null;
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
	}
}
