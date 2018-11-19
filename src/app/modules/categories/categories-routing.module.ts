import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { CategoriesDetailsComponent } from './components/details/categories-details.component';
import { CategoriesEditComponent } from './components/edit/categories-edit.component';
import { CategoriesListComponent } from './components/list/categories-list.component';

const routes: Routes = [
	{
		path: 'categories',
		data: { pageTitle: 'Categories' },
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
				component: CategoriesListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'create',
				component: CategoriesEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: CategoriesDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: CategoriesEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CategoriesRoutingModule {}
