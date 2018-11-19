import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlTypeEnum, InputFieldSuffix, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { AgeEnum, GenderEnum, HeightEnum, SizeEnum } from 'src/app/common/model/enums/products.enum';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { FormService } from 'src/app/common/services/form.service';
import { enumValues } from 'src/app/common/utils/enum.utils';
import { StateInterface } from 'src/app/store/state.interface';
import { SizesActions } from '../../store/actions/sizes.actions';
import { getSize } from '../../store/selectors/sizes.selectors';

@Component({
	selector: 'sizes-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./sizes-edit.component.css'],
	providers: [FormService]
})
export class SizesEditComponent extends AbstractEditComponent<SizePayload> {
	public controls: FormControlsInterface = {
		id: new FormHiddenModel<string>({
			formControlName: 'id'
		}),
		oldId: new FormHiddenModel<string>({
			formControlName: 'oldId'
		}),
		name: new FormItemModel<string>({
			formControlName: 'name',
			placeholder: 'name',
			styleClass: 'col-md-6'
		}),
		alias: new FormItemModel<string>({
			formControlName: 'alias',
			placeholder: 'alias',
			styleClass: 'col-md-3'
		}),
		published: new FormItemModel<boolean>({
			formControlName: 'published',
			placeholder: 'published',
			formControlType: FormControlTypeEnum.CHECKBOX,
			styleClass: 'col-md-3'
		}),
		size: new FormItemModel<string>({
			formControlName: 'size',
			placeholder: 'size',
			styleClass: 'col-md-3',
			formControlType: FormControlTypeEnum.SELECT,
			options: enumValues(SizeEnum)
		}),
		age: new FormItemModel<string>({
			formControlName: 'age',
			placeholder: 'age',
			styleClass: 'col-md-3',
			formControlType: FormControlTypeEnum.SELECT,
			options: enumValues(AgeEnum)
		}),
		growth: new FormItemModel<string>({
			formControlName: 'growth',
			placeholder: 'growth',
			styleClass: 'col-md-3',
			formControlType: FormControlTypeEnum.SELECT,
			options: enumValues(HeightEnum)
		}),
		gender: new FormItemModel<string>({
			formControlName: 'gender',
			placeholder: 'gender',
			styleClass: 'col-md-3',
			formControlType: FormControlTypeEnum.SELECT,
			options: enumValues(GenderEnum)
		}),
		height: new FormItemModel<number>({
			formControlName: 'height',
			placeholder: 'height',
			styleClass: 'col-md-6',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.cm
		}),
		width: new FormItemModel<number>({
			formControlName: 'width',
			placeholder: 'width',
			styleClass: 'col-md-6',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.cm
		}),
		length: new FormItemModel<number>({
			formControlName: 'length',
			placeholder: 'length',
			styleClass: 'col-md-4',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.cm
		}),
		thickness: new FormItemModel<number>({
			formControlName: 'thickness',
			placeholder: 'thickness',
			styleClass: 'col-md-4',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.cm
		}),
		layers: new FormItemModel<number>({
			formControlName: 'layers',
			placeholder: 'layers',
			styleClass: 'col-md-4',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.cm
		})
	};

	public itemSelector = getSize;
	public saveSuccessAction$ = this.actions$.ofType(
		SizesActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		SizesActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: SizesActions
	) {
		super({
			route,
			router,
			formService,
			actions,
			actions$,
			store
		});
		this.formService.createForm(this.controls);
	}

	public handleSave(form: SizePayload) {
		this.store.dispatch(this.actions.saveItem(new SizePayload(form)));
	}
}
