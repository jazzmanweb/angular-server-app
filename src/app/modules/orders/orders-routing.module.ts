import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { OrdersDetailsComponent } from './components/details/orders-details.component';
import { OrdersEditComponent } from './components/edit/orders-edit.component';
import { OrdersListComponent } from './components/list/orders-list.component';
import { OrdersOldListComponent } from './components/old-list/orders-old-list.component';

const routes: Routes = [
	{
		path: 'orders',
		data: { pageTitle: 'Orders' },
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: OrdersListComponent,
				data: { viewType: ViewTypesEnum.LIST }
			},
			{
				path: 'old-list',
				component: OrdersOldListComponent,
				data: { viewType: ViewTypesEnum.OLD_LIST }
			},
			{
				path: 'create',
				component: OrdersEditComponent,
				data: { viewType: ViewTypesEnum.CREATE }
			},
			{
				path: ':id',
				component: OrdersDetailsComponent,
				data: { viewType: ViewTypesEnum.DETAILS }
			},
			{
				path: ':id/edit',
				component: OrdersEditComponent,
				data: { viewType: ViewTypesEnum.EDIT }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class OrdersRoutingModule {}
