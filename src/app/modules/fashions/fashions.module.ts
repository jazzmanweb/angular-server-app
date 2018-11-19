import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { FashionsService } from 'src/app/common/services/fashions/fashions.service';
import { FashionsDetailsComponent } from './components/details/fashions-details.component';
import { FashionsEditComponent } from './components/edit/fashions-edit.component';
import { FashionsListComponent } from './components/list/fashions-list.component';
import { FashionsOldListComponent } from './components/old-list/fashions-old-list.component';
import { FashionsRoutingModule } from './fashions-routing.module';
import { FASHIONS_FEATURE_SELECTOR } from './fashions.constants';
import { FashionsActions } from './store/actions/fashions.actions';
import { FashionsEffects } from './store/effects/fashions.effects';
import { fashionsModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		FashionsRoutingModule,
		StoreModule.forFeature(
			FASHIONS_FEATURE_SELECTOR,
			fashionsModuleReducers
		),
		EffectsModule.forFeature([FashionsEffects])
	],
	declarations: [
		FashionsListComponent,
		FashionsOldListComponent,
		FashionsDetailsComponent,
		FashionsEditComponent
	],
	providers: [FashionsActions, FashionsService]
})
export class FashionsModule {}
