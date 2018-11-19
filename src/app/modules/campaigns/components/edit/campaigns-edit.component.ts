import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import {
	FormControlTypeEnum,
	InputTypeEnum
} from 'src/app/common/model/enums/form.enums';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormArrayModel } from 'src/app/common/model/models/form-array.model';
import { FormGroupModel } from 'src/app/common/model/models/form-group.model';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';
import { FormService } from 'src/app/common/services/form.service';
import { ProductsActions } from 'src/app/modules/products/store/actions/products.actions';
import { getProducts } from 'src/app/modules/products/store/selectors/products.selectors';
import { StateInterface } from 'src/app/store/state.interface';
import { CampaignsActions } from '../../store/actions/campaigns.actions';
import { getCampaign } from '../../store/selectors/campaigns.selectors';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';

@Component({
	selector: 'campaigns-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./campaigns-edit.component.css'],
	providers: [FormService]
})
export class CampaignsEditComponent extends AbstractEditComponent<
	CampaignPayload
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
		code: new FormItemModel<string>({
			formControlName: 'code',
			placeholder: 'code'
		}),
		dates: new FormGroupModel<Date>({
			formControlName: 'dates',
			placeholder: 'dates',
			formGroup: {
				dateFrom: new FormItemModel<Date>({
					formControlName: 'dateFrom',
					placeholder: 'dateFrom',
					styleClass: 'col-md-6',
					inputType: InputTypeEnum.date
				}),
				dateTo: new FormItemModel<Date>({
					formControlName: 'dateTo',
					placeholder: 'dateTo',
					styleClass: 'col-md-6',
					inputType: InputTypeEnum.date
				})
			}
		}),
		promotion: new FormItemModel<boolean>({
			formControlName: 'promotion',
			placeholder: 'promotion',
			styleClass: 'col-md-4',
			formControlType: FormControlTypeEnum.CHECKBOX
		}),
		novelty: new FormItemModel<boolean>({
			formControlName: 'novelty',
			placeholder: 'novelty',
			styleClass: 'col-md-4',
			formControlType: FormControlTypeEnum.CHECKBOX
		}),
		sale: new FormItemModel<boolean>({
			formControlName: 'sale',
			placeholder: 'sale',
			styleClass: 'col-md-4',
			formControlType: FormControlTypeEnum.CHECKBOX
		}),
		description: new FormItemModel<string>({
			formControlName: 'description',
			placeholder: 'description',
			formControlType: FormControlTypeEnum.TEXTAREA
		}),
		products: new FormItemModel<ProductPayload>({
			formControlName: 'products',
			placeholder: 'products',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		images: new FormItemModel<ImagePayload[]>({
			formControlName: 'images',
			placeholder: 'images',
			customization: {
				directory: 'campaigns'
			},
			formControlType: FormControlTypeEnum.IMAGE
		})
	};

	public itemSelector = getCampaign;
	public saveSuccessAction$ = this.actions$.ofType(
		CampaignsActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		CampaignsActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: CampaignsActions,
		protected productsActions: ProductsActions
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

	public handleSave(form: CampaignPayload) {
		this.store.dispatch(this.actions.saveItem(new CampaignPayload(form)));
	}

	public getOptions(): void {
		this.getControlOptions(
			this.controls.products,
			this.store.select(getProducts),
			this.productsActions.loadList()
		);
		this.setImageUploader(this.controls.images);
	}
}
