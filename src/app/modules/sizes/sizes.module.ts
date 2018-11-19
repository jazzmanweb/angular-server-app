import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { SizesListComponent } from './components/list/sizes-list.component';
import { SizesEditComponent } from './components/edit/sizes-edit.component';
import { SizesDetailsComponent } from './components/details/sizes-details.component';
import { SizesRoutingModule } from './sizes-routing.module';
import { StoreModule } from '@ngrx/store';
import { SIZES_FEATURE_SELECTOR } from './sizes.constants';
import { sizesModuleReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SizesEffects } from './store/effects/sizes.effects';
import { SizesActions } from './store/actions/sizes.actions';
import { SizesService } from 'src/app/common/services/sizes/sizes.service';

@NgModule({
	imports: [
		SharedModule,
		SizesRoutingModule,
		StoreModule.forFeature(SIZES_FEATURE_SELECTOR, sizesModuleReducers),
		EffectsModule.forFeature([SizesEffects])
	],
	declarations: [
		SizesListComponent,
		SizesDetailsComponent,
		SizesEditComponent
	],
	providers: [SizesActions, SizesService]
})
export class SizesModule {}
