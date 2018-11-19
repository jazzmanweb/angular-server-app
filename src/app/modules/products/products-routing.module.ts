import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { ProductsDetailsComponent } from './components/details/products-details.component';
import { ProductsEditComponent } from './components/edit/products-edit.component';
import { ProductsListComponent } from './components/list/products-list.component';
import { ProductsOldListComponent } from './components/old-list/products-old-list.component';

const routes: Routes = [
	{
		path: 'products',
		data: { pageTitle: 'Products' },
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: ProductsListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'old-list',
				component: ProductsOldListComponent,
				data: { viewType: ViewTypesEnum.OLD_LIST }
			},
			{
				path: 'create',
				component: ProductsEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: ProductsDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: ProductsEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule {}
