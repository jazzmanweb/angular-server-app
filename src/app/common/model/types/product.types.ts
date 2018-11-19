import { DbInterface } from '../interfaces/db.interface';

export type Index = DbInterface;
export type OneSizeType = 'onesize';
export type GenderType = 'unisex' | 'male' | 'female';
export type AgeType = OneSizeType | 'baby' | 'child' | 'youth' | 'adult';
export type SizeType = OneSizeType | 'xs' | 's' | 'm' | 'l' | 'xl';
export type HeightBabiesType = '' | '50' | '56' | '62' | '68' | '74' | '80' | '86' | '92' | '98';
export type HeightKidsType = '' | '104' | '110' | '116' | '122' | '128' | '134' | '140' | '146' | '152' | '158' | '164' | '170';
export type HeightType = OneSizeType | HeightBabiesType | HeightKidsType;
export type HeadSizeType = OneSizeType | '40' | '44' | '48' | '52';
export type AvailabilityType = 'unavailable' | 'onstock' | 'request';
