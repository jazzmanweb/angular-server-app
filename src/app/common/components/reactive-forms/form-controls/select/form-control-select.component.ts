import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';

@Component({
	selector: 'form-control-select',
	templateUrl: './form-control-select.component.html',
	styleUrls: ['./form-control-select.component.css']
})
export class FormControlSelectComponent<T> extends AbstractFormComponent {
	@Input() public control: FormItemModel<T>;
	@Input() public form: FormGroup;

	public compareFn(x: T, y: T): boolean {
		return this.isPrimitive(x) && this.isPrimitive(y)
			? x === y
			: x['id'] === y['id'];
	}
}
