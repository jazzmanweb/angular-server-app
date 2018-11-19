import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlTypeEnum, InputFieldSuffix, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormArrayModel } from 'src/app/common/model/models/form-array.model';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { FormService } from 'src/app/common/services/form.service';
import { StateInterface } from 'src/app/store/state.interface';
import { ShippingActions } from '../../store/actions/shipping.actions';
import { getShipping } from '../../store/selectors/shipping.selectors';

@Component({
	selector: 'shipping-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./shipping-edit.component.css'],
	providers: [FormService]
})
export class ShippingEditComponent extends AbstractEditComponent<
	ShippingPayload
> {
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
		price: new FormItemModel<number>({
			formControlName: 'price',
			placeholder: 'price',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.price,
			styleClass: 'col-md-6'
		}),
		prices: new FormArrayModel<number>({
			formControlName: 'prices',
			placeholder: 'prices',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.price,
			styleClass: 'col-md-6'
		})
	};

	public itemSelector = getShipping;
	public saveSuccessAction$ = this.actions$.ofType(
		ShippingActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		ShippingActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: ShippingActions
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

	public handleSave(form: ShippingPayload) {
		this.store.dispatch(this.actions.saveItem(new ShippingPayload(form)));
	}
}
