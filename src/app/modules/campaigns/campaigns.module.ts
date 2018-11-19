import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { CampaignsService } from 'src/app/common/services/campaigns/campaigns.service';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CAMPAIGNS_FEATURE_SELECTOR } from './campaigns.constants';
import { CampaignsDetailsComponent } from './components/details/campaigns-details.component';
import { CampaignsEditComponent } from './components/edit/campaigns-edit.component';
import { CampaignsListComponent } from './components/list/campaigns-list.component';
import { CampaignsActions } from './store/actions/campaigns.actions';
import { CampaignsEffects } from './store/effects/campaigns.effects';
import { campaignsModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		CampaignsRoutingModule,
		StoreModule.forFeature(
			CAMPAIGNS_FEATURE_SELECTOR,
			campaignsModuleReducers
		),
		EffectsModule.forFeature([CampaignsEffects])
	],
	declarations: [
		CampaignsListComponent,
		CampaignsDetailsComponent,
		CampaignsEditComponent
	],
	providers: [CampaignsActions, CampaignsService]
})
export class CampaignsModule {}
