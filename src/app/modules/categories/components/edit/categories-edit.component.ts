import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlTypeEnum } from 'src/app/common/model/enums/form.enums';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';
import { FormService } from 'src/app/common/services/form.service';
import { ShippingActions } from 'src/app/modules/shipping/store/actions/shipping.actions';
import { getShippings } from 'src/app/modules/shipping/store/selectors/shipping.selectors';
import { StateInterface } from 'src/app/store/state.interface';
import { CategoriesActions } from '../../store/actions/categories.actions';
import { getCategory } from '../../store/selectors/categories.selectors';
import { SizesActions } from 'src/app/modules/sizes/store/actions/sizes.actions';
import { getSizes } from 'src/app/modules/sizes/store/selectors/sizes.selectors';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';

@Component({
	selector: 'categories-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./categories-edit.component.css'],
	providers: [FormService]
})
export class CategoriesEditComponent extends AbstractEditComponent<
	CategoryPayload
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
		icon: new FormItemModel<string>({
			formControlName: 'icon',
			placeholder: 'icon',
			styleClass: 'col-md-6'
		}),
		styleClass: new FormItemModel<string>({
			formControlName: 'styleClass',
			placeholder: 'styleClass',
			styleClass: 'col-md-6'
		}),
		sizes: new FormItemModel<SizePayload>({
			formControlName: 'sizes',
			placeholder: 'sizes',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		image: new FormItemModel<string>({
			formControlName: 'image',
			placeholder: 'image',
			styleClass: 'col-md-6'
		}),
		shipping: new FormItemModel<ShippingPayload>({
			formControlName: 'shipping',
			placeholder: 'shipping',
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.MULTISELECT
		})
	};

	public itemSelector = getCategory;
	public saveSuccessAction$ = this.actions$.ofType(
		CategoriesActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		CategoriesActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: CategoriesActions,
		protected shippingActions: ShippingActions,
		protected sizesActions: SizesActions,
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

	public handleSave(form: CategoryPayload) {
		this.store.dispatch(this.actions.saveItem(new CategoryPayload(form)));
	}

	public getOptions(): void {
		this.getControlOptions(
			this.controls.sizes,
			this.store.select(getSizes),
			this.sizesActions.loadList()
		);
		this.getControlOptions(
			this.controls.shipping,
			this.store.select(getShippings),
			this.shippingActions.loadList()
		);
	}
}
