import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { ControlTypeEnum, FormControlTypeEnum, InputTypeEnum } from '../enums/form.enums';
import { FormCustomizationInterface } from './form-customization.interface';

export interface FormItemInterface<T> {
	formControlName: string;
	controlType?: ControlTypeEnum;
	inputType?: InputTypeEnum;
	formControlValue?: T;
	formControlType?: FormControlTypeEnum;
	formArray?: AbstractControl[];
	formGroup?: {
		[key: string]: AbstractControl;
	};
	label?: string;
	placeholder?: string;
	prefix?: string;
	suffix?: string;
	options?: T[];
	customization?: FormCustomizationInterface;
	styleClass?: string;
	error?: string;
	required?: boolean;
	validators?: ValidatorFn[];
	asyncValidators?: AsyncValidatorFn[];
}
