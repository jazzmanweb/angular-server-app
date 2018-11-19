import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlTypeEnum, InputFieldSuffix, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { AvailabilityEnum } from 'src/app/common/model/enums/products.enum';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormArrayModel } from 'src/app/common/model/models/form-array.model';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { FormService } from 'src/app/common/services/form.service';
import { enumValues } from 'src/app/common/utils/enum.utils';
import { filterListBySelected, getRelatedOptions } from 'src/app/common/utils/rxjs.utils';
import { CampaignsActions } from 'src/app/modules/campaigns/store/actions/campaigns.actions';
import { getCampaigns } from 'src/app/modules/campaigns/store/selectors/campaigns.selectors';
import { CategoriesActions } from 'src/app/modules/categories/store/actions/categories.actions';
import { getCategories } from 'src/app/modules/categories/store/selectors/categories.selectors';
import { ShippingActions } from 'src/app/modules/shipping/store/actions/shipping.actions';
import { getShippings } from 'src/app/modules/shipping/store/selectors/shipping.selectors';
import { SizesActions } from 'src/app/modules/sizes/store/actions/sizes.actions';
import { getSizes } from 'src/app/modules/sizes/store/selectors/sizes.selectors';
import { StateInterface } from 'src/app/store/state.interface';
import { ProductsActions } from '../../store/actions/products.actions';
import { getProduct } from '../../store/selectors/products.selectors';

@Component({
	selector: 'products-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./products-edit.component.css'],
	providers: [FormService]
})
export class ProductsEditComponent extends AbstractEditComponent<
	ProductPayload
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
		categories: new FormItemModel<CategoryPayload>({
			formControlName: 'categories',
			placeholder: 'categories',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		price: new FormItemModel<number>({
			formControlName: 'price',
			placeholder: 'price',
			styleClass: 'col-md-6',
			inputType: InputTypeEnum.number,
			suffix: InputFieldSuffix.price
		}),
		available: new FormItemModel<string>({
			formControlName: 'available',
			placeholder: 'available',
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.SELECT,
			options: enumValues(AvailabilityEnum)
		}),
		sizes: new FormItemModel<SizePayload>({
			formControlName: 'sizes',
			placeholder: 'sizes',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		images: new FormArrayModel<ImagePayload>({
			formControlName: 'images',
			placeholder: 'images',
			formControlType: FormControlTypeEnum.IMAGE,
			styleClass: 'col-md-8'
		}),
		colors: new FormArrayModel<string>({
			formControlName: 'colors',
			placeholder: 'colors',
			styleClass: 'col-md-4'
		}),
		description: new FormItemModel<string>({
			formControlName: 'description',
			placeholder: 'description',
			formControlType: FormControlTypeEnum.TEXTAREA
		}),
		campaigns: new FormItemModel<CampaignPayload>({
			formControlName: 'campaigns',
			placeholder: 'campaigns',
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		shipping: new FormItemModel<ShippingPayload>({
			formControlName: 'shipping',
			placeholder: 'shipping',
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.MULTISELECT
		})
	};

	public itemSelector = getProduct;
	public saveSuccessAction$ = this.actions$.ofType(
		ProductsActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		ProductsActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions: ProductsActions,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected categoriesActions: CategoriesActions,
		protected sizesActions: SizesActions,
		protected campaignsActions: CampaignsActions,
		protected shippingActions: ShippingActions
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

	public handleSave(form: ProductPayload): void {
		this.store.dispatch(this.actions.saveItem(new ProductPayload(form)));
	}

	public getOptions(): void {
		this.getControlOptions(
			this.controls.categories,
			this.store.select(getCategories),
			this.categoriesActions.loadList()
		);
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
		this.getControlOptions(
			this.controls.campaigns,
			this.store.select(getCampaigns),
			this.campaignsActions.loadList()
		);
	}

	public subscribeToValueChanges() {
		const formCategories$ = this.form
			.get('categories')
			.valueChanges.pipe(filter(list => list && list.length > 0));

		combineLatest(
			this.store.select(getSizes),
			formCategories$.pipe(
				getRelatedOptions<CategoryPayload, SizePayload>('sizes')
			)
		)
			.pipe(
				filterListBySelected,
				takeWhile(() => this.subscribe)
			)
			.subscribe((options: SizePayload[]) => {
				this.controls.sizes.options = [...options];
				this.form.get('sizes').setValue(options);
			});

		combineLatest(
			this.store.select(getShippings),
			formCategories$.pipe(
				getRelatedOptions<CategoryPayload, ShippingPayload>('shipping')
			)
		)
			.pipe(
				filterListBySelected,
				takeWhile(() => this.subscribe)
			)
			.subscribe((options: ShippingPayload[]) => {
				this.controls.shipping.options = [...options];
				this.form.get('shipping').setValue(options);
			});
	}
}
