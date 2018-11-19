import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { AbstractFormComponent } from '../../abstract-views/form/abstract-from.component';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent extends AbstractFormComponent {
	@Input()
	public formPath: Array<string | number> = [];
	@Input()
	public controls: FormControlsInterface;
	@Input()
	public form: FormGroup;
	@Input()
	public loader: boolean;
	@Output()
	public onSubmit: EventEmitter<NgForm> = new EventEmitter<NgForm>();
	public controlTypeEnum = ControlTypeEnum;

	constructor(public route: ActivatedRoute, public router: Router) {
		super();
	}

	public onFormSubmit(form: NgForm) {
		this.onSubmit.emit(form);
	}

	public handleDetails() {
		this.router.navigate(['..'], { relativeTo: this.route });
	}

	public handleList(form: NgForm) {
		const {value: {id = ''}} = form;
		if (!id) {
			this.router.navigate(['../'], { relativeTo: this.route });
		}
		this.router.navigate(['../../'], { relativeTo: this.route });
	}
}
