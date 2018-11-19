import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTypeEnum, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';

@Component({
	selector: 'app-form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.css']
})
export class FormControlComponent<T> extends AbstractFormComponent {
	@Input() public formPath: Array<string | number> = [];
	@Input() public control: FormItemModel<T>;
	@Input() public form: FormGroup;

	public inputTypeEnum = InputTypeEnum;
	public formControlTypeEnum = FormControlTypeEnum;
}
