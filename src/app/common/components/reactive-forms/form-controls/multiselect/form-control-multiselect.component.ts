import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';
import { isPrimitive } from 'util';

@Component({
	selector: 'form-control-multiselect',
	templateUrl: './form-control-multiselect.component.html',
	styleUrls: ['./form-control-multiselect.component.css']
})
export class FormControlMultiselectComponent<T> extends AbstractFormComponent {
	@Input() public control: FormItemModel<T>;
	@Input() public form: FormGroup;

	public compareFn(x: T, y: T): boolean {
		if (!x || !y) {
			return false;
		}
		return isPrimitive(x) && isPrimitive(y)
			? x === y
			: x['id'] === y['id'];
	}
}
