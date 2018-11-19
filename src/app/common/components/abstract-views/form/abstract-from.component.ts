import { Input } from '@angular/core';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import {
	FormGroup,
	NgForm,
	AbstractControl,
	FormArray,
	FormControl
} from '@angular/forms';
import { FormItemType } from 'src/app/common/model/types/form.types';

export abstract class AbstractFormComponent {
	@Input()
	public formPath: Array<string | number> = [];
	@Input()
	public controls: FormControlsInterface;
	@Input()
	public form: FormGroup;

	public getForm(formControlName: string) {
		const formPath = this.getFormNode(formControlName);
		return formPath && this.form
			? this.form.get(formPath)
			: new FormGroup({});
	}

	public controlsArray(controls: FormControlsInterface): FormItemType[] {
		return controls ? Object.values(controls) : [];
	}

	public controlFormArray(formControlName: string): AbstractControl[] {
		return (<FormArray>this.getForm(formControlName)).controls || [];
	}

	public handleAdd(formControlName: string) {
		if (!(<FormArray>this.getForm(formControlName))) {
			const control = this.controls[formControlName];
			(<FormGroup>this.getForm(formControlName)).addControl(
				formControlName,
				new FormArray([], control.validators, control.asyncValidators)
			);
		}
		(<FormArray>this.getForm(formControlName)).push(new FormControl());
	}

	public isInvalid(formControlName: string): boolean {
		return (
			!this.getForm(formControlName) ||
			(this.getForm(formControlName) &&
				!this.getForm(formControlName).valid &&
				this.getForm(formControlName).touched)
		);
	}

	private getFormNode(formControlName: string): Array<string | number> {
		return [...this.formPath, formControlName];
	}

	public isPrimitive(value: any): boolean {
		return (
			!!value &&
			(typeof value === 'string' ||
				typeof value === 'number' ||
				typeof value === 'boolean')
		);
	}
}
