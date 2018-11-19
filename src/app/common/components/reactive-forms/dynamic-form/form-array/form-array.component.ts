import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTypeEnum, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormArrayModel } from 'src/app/common/model/models/form-array.model';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';

@Component({
	selector: 'app-form-array',
	templateUrl: './form-array.component.html',
	styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent<T> extends AbstractFormComponent {
	@Input() public formPath: Array<string | number> = [];
	@Input() public control: FormArrayModel<T>;
	@Input() public form: FormGroup;

	public inputTypeEnum = InputTypeEnum;
	public formControlTypeEnum = FormControlTypeEnum;
}
