import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { ProductsService } from 'src/app/common/services/products/products.service';
import { ProductsDetailsComponent } from './components/details/products-details.component';
import { ProductsEditComponent } from './components/edit/products-edit.component';
import { ProductsListComponent } from './components/list/products-list.component';
import { ProductsOldListComponent } from './components/old-list/products-old-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PRODUCTS_FEATURE_SELECTOR } from './products.constants';
import { ProductsActions } from './store/actions/products.actions';
import { ProductsEffects } from './store/effects/products.effects';
import { productsModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		ProductsRoutingModule,
		StoreModule.forFeature(
			PRODUCTS_FEATURE_SELECTOR,
			productsModuleReducers
		),
		EffectsModule.forFeature([ProductsEffects])
	],
	declarations: [
		ProductsListComponent,
		ProductsOldListComponent,
		ProductsDetailsComponent,
		ProductsEditComponent
	],
	providers: [ProductsActions, ProductsService]
})
export class ProductsModule {}
