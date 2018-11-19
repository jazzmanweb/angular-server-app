import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { ControlTypeEnum, FormControlTypeEnum, InputTypeEnum } from '../enums/form.enums';
import { FormItemInterface } from '../interfaces/form-item.interface';
import { FormCustomizationInterface } from '../interfaces/form-customization.interface';

export class FormItemModel<T> extends FormControl
	implements FormItemInterface<T> {
	public formControlValue: T;
	public controlType: ControlTypeEnum;
	public inputType: InputTypeEnum;
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
			options.formControlValue,
			options.validators,
			options.asyncValidators
		);
		this.formControlValue = options.formControlValue || null;
		this.validators = options.validators || [];
		this.asyncValidators = options.asyncValidators || [];
		this.controlType = ControlTypeEnum.FormControl;
		this.inputType = options.inputType || InputTypeEnum.text;
		this.formControlType = options.formControlType || FormControlTypeEnum.INPUT;
		this.formControlName = options.formControlName || null;
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
