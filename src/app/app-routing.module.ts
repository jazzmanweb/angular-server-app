import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page404Component } from './components/page404/page404.component';

const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false, useHash: true } // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
