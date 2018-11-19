import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map, takeWhile } from 'rxjs/operators';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlTypeEnum, InputFieldSuffix, InputTypeEnum } from 'src/app/common/model/enums/form.enums';
import { AvailabilityEnum } from 'src/app/common/model/enums/products.enum';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormArrayModel } from 'src/app/common/model/models/form-array.model';
import { FormHiddenModel } from 'src/app/common/model/models/form-hidden.model';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { CategoryPayload } from 'src/app/common/model/payloads/category.payload';
import { FashionPayload } from 'src/app/common/model/payloads/fashion.payload';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';
import { IndexPayload } from 'src/app/common/model/payloads/index.payload';
import { ProductPayload } from 'src/app/common/model/payloads/product.payload';
import { ShippingPayload } from 'src/app/common/model/payloads/shipping.payload';
import { SizePayload } from 'src/app/common/model/payloads/size.payload';
import { FormService } from 'src/app/common/services/form.service';
import { enumValues } from 'src/app/common/utils/enum.utils';
import { getRelatedOptions, filterListBySelected } from 'src/app/common/utils/rxjs.utils';
import { CampaignsActions } from 'src/app/modules/campaigns/store/actions/campaigns.actions';
import { getCampaigns } from 'src/app/modules/campaigns/store/selectors/campaigns.selectors';
import { CategoriesActions } from 'src/app/modules/categories/store/actions/categories.actions';
import { getCategories } from 'src/app/modules/categories/store/selectors/categories.selectors';
import { ProductsActions } from 'src/app/modules/products/store/actions/products.actions';
import { getProducts } from 'src/app/modules/products/store/selectors/products.selectors';
import { ShippingActions } from 'src/app/modules/shipping/store/actions/shipping.actions';
import { getShippings } from 'src/app/modules/shipping/store/selectors/shipping.selectors';
import { SizesActions } from 'src/app/modules/sizes/store/actions/sizes.actions';
import { getSizes } from 'src/app/modules/sizes/store/selectors/sizes.selectors';
import { StateInterface } from 'src/app/store/state.interface';
import { FashionsActions } from '../../store/actions/fashions.actions';
import { getFashion } from '../../store/selectors/fashions.selectors';
import { CampaignPayload } from 'src/app/common/model/payloads/campaign.payload';

@Component({
	selector: 'fashions-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./fashions-edit.component.css'],
	providers: [FormService]
})
export class FashionsEditComponent extends AbstractEditComponent<
	FashionPayload
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
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.MULTISELECT
		}),
		product: new FormItemModel<ProductPayload>({
			formControlName: 'product',
			placeholder: 'product',
			styleClass: 'col-md-6',
			formControlType: FormControlTypeEnum.SELECT
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
			styleClass: 'col-md-8',
			formControlType: FormControlTypeEnum.IMAGE
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

	public itemSelector = getFashion;
	public saveSuccessAction$ = this.actions$.ofType(
		FashionsActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		FashionsActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: FashionsActions,
		protected productsActions: ProductsActions,
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

	public handleSave(form: FashionPayload) {
		this.store.dispatch(this.actions.saveItem(new FashionPayload(form)));
	}

	public getOptions(): void {
		this.getControlOptions(
			this.controls.product,
			this.store.select(getProducts),
			this.productsActions.loadList()
		);
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
		const formProduct$ = this.form.get('product').valueChanges.pipe(
			filter(item => !!item),
		);
		const formProducts$ = formProduct$.pipe(
			map(item => [item])
		);

		formProduct$.pipe(
			takeWhile(() => this.subscribe)
		).subscribe((product) => {
			this.form.patchValue(product);
		})

		combineLatest(
			this.store.select(getSizes),
			formProducts$.pipe(
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
			formProducts$.pipe(
				getRelatedOptions<ProductPayload, ShippingPayload>('shipping')
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

		combineLatest(
			this.store.select(getShippings),
			formProducts$.pipe(
				getRelatedOptions<ProductPayload, CategoryPayload>('categories')
			)
		)
			.pipe(
				filterListBySelected,
				takeWhile(() => this.subscribe)
			)
			.subscribe((options: CategoryPayload[]) => {
				this.controls.categories.options = [...options];
				this.form.get('categories').setValue(options);
			});
	}
}
