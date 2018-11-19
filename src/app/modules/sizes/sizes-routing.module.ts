import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { SizesDetailsComponent } from './components/details/sizes-details.component';
import { SizesEditComponent } from './components/edit/sizes-edit.component';
import { SizesListComponent } from './components/list/sizes-list.component';

const routes: Routes = [
	{
		path: 'sizes',
		data: { pageTitle: 'Sizes' },
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
				component: SizesListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'create',
				component: SizesEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: SizesDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: SizesEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class SizesRoutingModule {}
