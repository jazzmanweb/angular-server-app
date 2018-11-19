import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormControlsInterface } from '../model/interfaces/form-controls.interface';
import { ControlTypeEnum } from '../model/enums/form.enums';
import { FormGroupModel } from '../model/models/form-group.model';
import { FormItemModel } from '../model/models/form-item.model';
import { FormItemType } from '../model/types/form.types';

@Injectable()
export class FormService {
	public form: FormGroup;
	constructor() {
		this.form = new FormGroup({});
	}

	public createForm(
		controls: FormControlsInterface,
		form?: FormGroup,
		formPath?: Array<string | number>
	) {
		const formGroup = form || this.form;
		Object.values(controls).forEach(control => {
			const validators = this.getValidators(control);
			
			switch (control.controlType) {
				case ControlTypeEnum.FormGroup: {
					formGroup.addControl(
						control.formControlName,
						new FormGroup({}, validators, control.asyncValidators)
					);
					this.createForm(
						<FormControlsInterface>(
							(<FormGroupModel<any>>control).formGroup
						),
						<FormGroup>(
							formGroup.get(
									control.formControlName
							)
						),
						this.getFormNode(formPath, control.formControlName)
					);
				}
				case ControlTypeEnum.FormArray: {
					formGroup.addControl(
						control.formControlName,
						new FormArray([], validators, control.asyncValidators)
					);
				}
				case ControlTypeEnum.FormControl:
				default: {
					formGroup.addControl(
						control.formControlName,
						new FormControl(
							(<FormItemModel<any>>control).formControlValue,
							validators,
							control.asyncValidators
						)
					);
				}
			}
		});
	}

	public getValidators(control: FormItemType) {
		const validators = !control.validators ? [] : [...control.validators];
		if (control.required) {
			validators.push(Validators.required);
		}
		return validators;
	}

	private getFormNode(
		formPath: Array<string | number>,
		formControlName: string
	): Array<string | number> {
		return formPath && formPath.length ? [...formPath, formControlName] : [formControlName];
	}
}
