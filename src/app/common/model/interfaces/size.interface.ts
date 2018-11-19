import { DbInterface } from './db.interface';
import { SizeEnum, AgeEnum, HeightEnum, GenderEnum } from '../enums/products.enum';

export interface SizeInterface extends DbInterface {
	name?: string;
	height?: number;
	width?: number;
	length?: number;
	thickness?: number;
	layers?: number;
	size?: SizeEnum;
	age?: AgeEnum;
	growth?: HeightEnum;
	gender?: GenderEnum;
}
