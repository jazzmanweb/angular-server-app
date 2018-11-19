import { getAlias } from '../../utils/string.utils';
import { AgeEnum, GenderEnum, HeightEnum, SizeEnum } from '../enums/products.enum';
import { SizeInterface } from '../interfaces/size.interface';
import { DbPayload } from './db.payload';

export class SizePayload extends DbPayload implements SizeInterface {
	public name: string;
	public height: number;
	public width: number;
	public length: number;
	public thickness: number;
	public layers: number;
	public size: SizeEnum;
	public age: AgeEnum;
	public growth: HeightEnum;
	public gender: GenderEnum;

	constructor(options: SizeInterface = {} as SizeInterface) {
		options = options || ({} as SizeInterface);
		super(options);
		this.alias = options.alias || getAlias(options.name);
		this.name = options.name || null;
		this.height = options.height || null;
		this.width = options.width || null;
		this.length = options.length || null;
		this.thickness = options.thickness || null;
		this.layers = options.layers || null;
		this.size = options.size || SizeEnum.onesize;
		this.age = options.age || AgeEnum.onesize;
		this.growth = options.growth || HeightEnum.onesize;
		this.gender = options.gender || GenderEnum.unisex;
	}
}
