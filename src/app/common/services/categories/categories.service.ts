import { Injectable } from '@angular/core';
import { CategoryPayload } from '../../model/payloads/category.payload';
import { apiCategoriesList, apiCategoryItem, apiCategoryToggleItems } from './categories.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<CategoryPayload[]>> {
		return this.request.get(apiCategoriesList());
	}

	public item(id: string): Observable<RequestResponseModel<CategoryPayload>> {
		return this.request.get(apiCategoryItem(id));
	}

	public save(payload: CategoryPayload): Observable<RequestResponseModel<CategoryPayload>> {
		console.log(payload)
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: CategoryPayload): Observable<RequestResponseModel<CategoryPayload>> {
		return this.request.put(apiCategoryItem(payload.id), payload);
	}

	public create(payload: CategoryPayload): Observable<RequestResponseModel<CategoryPayload>> {
		return this.request.post(apiCategoryItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<CategoryPayload[]>> {
		return this.request.delete(apiCategoryItem(payload.toString()));
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<CategoryPayload[]>> {
		return this.request.put(apiCategoryToggleItems(payload.toString()));
	}
}

