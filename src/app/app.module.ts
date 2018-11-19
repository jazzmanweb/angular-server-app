import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { SharedModule } from './common/modules/shared/shared.module';
import { RequestHandlerService } from './common/services/request-handler.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { CampaignsModule } from './modules/campaigns/campaigns.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FashionsModule } from './modules/fashions/fashions.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { ShippingModule } from './modules/shipping/shipping.module';
import { SizesModule } from './modules/sizes/sizes.module';
import { metaReducers, reducers } from './store/reducers';

const MODULES = [
	CampaignsModule,
	CategoriesModule,
	FashionsModule,
	OrdersModule,
	ProductsModule,
	ShippingModule,
	SizesModule
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DashboardComponent,
		Page404Component
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule,
		...MODULES,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([AppEffects]),
		AppRoutingModule,
		LayoutModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'pl' }, RequestHandlerService],
	bootstrap: [AppComponent]
})
export class AppModule {}
