import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { OrdersService } from 'src/app/common/services/orders/orders.service';
import { OrdersDetailsComponent } from './components/details/orders-details.component';
import { OrdersEditComponent } from './components/edit/orders-edit.component';
import { OrdersListComponent } from './components/list/orders-list.component';
import { OrdersOldListComponent } from './components/old-list/orders-old-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ORDERS_FEATURE_SELECTOR } from './orders.constants';
import { OrdersActions } from './store/actions/orders.actions';
import { OrdersEffects } from './store/effects/orders.effects';
import { ordersModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		OrdersRoutingModule,
		StoreModule.forFeature(ORDERS_FEATURE_SELECTOR, ordersModuleReducers),
		EffectsModule.forFeature([OrdersEffects])
	],
	declarations: [
		OrdersListComponent,
		OrdersOldListComponent,
		OrdersDetailsComponent,
		OrdersEditComponent
	],
	providers: [OrdersActions, OrdersService]
})
export class OrdersModule {}
