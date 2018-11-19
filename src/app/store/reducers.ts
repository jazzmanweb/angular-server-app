import { MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export const reducers = {};

export const metaReducers: Array<MetaReducer<any>> = !environment.production
	? []
	: [];
