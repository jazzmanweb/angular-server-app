import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';

@Component({
	selector: 'app-dynamic-form-node',
	templateUrl: './dynamic-form-node.component.html',
	styleUrls: ['./dynamic-form-node.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class DynamicFormNodeComponent extends AbstractFormComponent {
	@Input() public formPath: Array<string | number> = [];
	@Input() public controls: FormControlsInterface;
	@Input() public form: FormGroup;
	public controlTypeEnum = ControlTypeEnum;
}
