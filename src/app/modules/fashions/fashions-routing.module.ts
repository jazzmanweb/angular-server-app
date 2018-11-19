import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { FashionsDetailsComponent } from './components/details/fashions-details.component';
import { FashionsEditComponent } from './components/edit/fashions-edit.component';
import { FashionsListComponent } from './components/list/fashions-list.component';
import { FashionsOldListComponent } from './components/old-list/fashions-old-list.component';

const routes: Routes = [
	{
		path: 'fashions',
		data: { pageTitle: 'Fashions' },
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: FashionsListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'old-list',
				component: FashionsOldListComponent,
				data: { viewType: ViewTypesEnum.OLD_LIST }
			},
			{
				path: 'create',
				component: FashionsEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: FashionsDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: FashionsEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class FashionsRoutingModule {}
