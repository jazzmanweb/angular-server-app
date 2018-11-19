import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingListComponent } from './components/list/shipping-list.component';
import { ShippingDetailsComponent } from './components/details/shipping-details.component';
import { ShippingEditComponent } from './components/edit/shipping-edit.component';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';

const routes: Routes = [
	{
		path: 'shipping',
		data: { pageTitle: 'Shipping' },
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
				component: ShippingListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'create',
				component: ShippingEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: ShippingDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: ShippingEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class ShippingRoutingModule {}
