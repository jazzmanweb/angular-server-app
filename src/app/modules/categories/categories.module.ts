import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { CategoriesService } from 'src/app/common/services/categories/categories.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CATEGORIES_FEATURE_SELECTOR } from './categories.constants';
import { CategoriesDetailsComponent } from './components/details/categories-details.component';
import { CategoriesEditComponent } from './components/edit/categories-edit.component';
import { CategoriesListComponent } from './components/list/categories-list.component';
import { CategoriesActions } from './store/actions/categories.actions';
import { CategoriesEffects } from './store/effects/categories.effects';
import { categoriesModuleReducers } from './store/reducers';

@NgModule({
	imports: [
		SharedModule,
		CategoriesRoutingModule,
		EffectsModule.forFeature([CategoriesEffects]),
		StoreModule.forFeature(
			CATEGORIES_FEATURE_SELECTOR,
			categoriesModuleReducers
		)
	],
	declarations: [
		CategoriesListComponent,
		CategoriesDetailsComponent,
		CategoriesEditComponent
	],
	providers: [CategoriesActions, CategoriesService]
})
export class CategoriesModule {}
