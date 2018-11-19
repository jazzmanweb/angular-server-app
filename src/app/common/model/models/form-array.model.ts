import { AbstractControl, AsyncValidatorFn, FormArray, ValidatorFn } from '@angular/forms';
import { ControlTypeEnum, FormControlTypeEnum } from '../enums/form.enums';
import { FormItemInterface } from '../interfaces/form-item.interface';
import { FormCustomizationInterface } from '../interfaces/form-customization.interface';

export class FormArrayModel<T> extends FormArray
	implements FormItemInterface<T> {
	public formArray: AbstractControl[];
	public controlType: ControlTypeEnum;
	public formControlName: string;
	public formControlType: FormControlTypeEnum;
	public label: string;
	public placeholder: string;
	public prefix: string;
	public suffix: string;
	public options: T[];
	public customization: FormCustomizationInterface;
	public styleClass: string;
	public error: string;
	public required: boolean;
	public validators?: ValidatorFn[];
	public asyncValidators?: AsyncValidatorFn[];

	constructor(options: FormItemInterface<T> = {} as FormItemInterface<T>) {
		options = options || ({} as FormItemInterface<T>);
		super(
			options.formArray || [],
			options.validators,
			options.asyncValidators
		);
		this.formArray = options.formArray || [];
		this.validators = options.validators || [];
		this.asyncValidators = options.asyncValidators || [];
		this.controlType = ControlTypeEnum.FormArray;
		this.formControlName = options.formControlName || null;
		this.formControlType = options.formControlType || FormControlTypeEnum.INPUT;
		this.label = options.label || null;
		this.placeholder = options.placeholder || null;
		this.prefix = options.prefix || null;
		this.suffix = options.suffix || null;
		this.options = options.options || [];
		this.customization = options.customization || {} as FormCustomizationInterface;
		this.styleClass = options.styleClass || null;
		this.error = options.error || null;
		this.required = options.required === true;
	}
}
