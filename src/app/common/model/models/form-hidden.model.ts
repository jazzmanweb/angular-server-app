import { ControlTypeEnum } from '../enums/form.enums';
import { FormItemInterface } from '../interfaces/form-item.interface';
import { FormItemModel } from './form-item.model';

export class FormHiddenModel<T> extends FormItemModel<T>
	implements FormItemInterface<T> {

	constructor(options: FormItemInterface<T> = {} as FormItemInterface<T>) {
		options = options || ({} as FormItemInterface<T>);
		super(options);
		this.controlType = ControlTypeEnum.FormHidden;
	}
}
