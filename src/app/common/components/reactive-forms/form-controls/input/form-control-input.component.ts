import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.css']
})
export class FormControlInputComponent<T> extends AbstractFormComponent {
	@Input() public control: FormItemModel<T>;
	@Input() public form: FormGroup;
}