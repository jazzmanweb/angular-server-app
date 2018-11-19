import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsListComponent } from './components/list/campaigns-list.component';
import { CampaignsDetailsComponent } from './components/details/campaigns-details.component';
import { CampaignsEditComponent } from './components/edit/campaigns-edit.component';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';

const routes: Routes = [
	{
		path: 'campaigns',
		data: { pageTitle: 'Campaigns' },
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'old-list',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: CampaignsListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'create',
				component: CampaignsEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: CampaignsDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: CampaignsEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CampaignsRoutingModule {}
