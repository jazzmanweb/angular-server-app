import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { ShippingService } from 'src/app/common/services/shipping/shipping.service';
import { ShippingDetailsComponent } from './components/details/shipping-details.component';
import { ShippingEditComponent } from './components/edit/shipping-edit.component';
import { ShippingListComponent } from './components/list/shipping-list.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { SHIPPING_FEATURE_SELECTOR } from './shipping.constants';
import { ShippingActions } from './store/actions/shipping.actions';
import { ShippingEffects } from './store/effects/shipping.effects';
import { shippingModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		ShippingRoutingModule,
		StoreModule.forFeature(
			SHIPPING_FEATURE_SELECTOR,
			shippingModuleReducers
		),
		EffectsModule.forFeature([ShippingEffects])
	],
	declarations: [
		ShippingListComponent,
		ShippingDetailsComponent,
		ShippingEditComponent
	],
	providers: [ShippingActions, ShippingService]
})
export class ShippingModule {}
