import { Injectable } from '@angular/core';
import { ProductPayload } from '../../model/payloads/product.payload';
import { apiProductsList, apiProductItem, oldApiProductsList, apiProductToggleItems } from './products.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<ProductPayload[]>> {
		return this.request.get(apiProductsList());
	}

	public item(id: string): Observable<RequestResponseModel<ProductPayload>> {
		return this.request.get(apiProductItem(id));
	}

	public save(payload: ProductPayload): Observable<RequestResponseModel<ProductPayload>> {
		console.log({payload});
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: ProductPayload): Observable<RequestResponseModel<ProductPayload>> {
		return this.request.put(apiProductItem(payload.id), payload);
	}

	public create(payload: ProductPayload): Observable<RequestResponseModel<ProductPayload>> {
		return this.request.post(apiProductItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<ProductPayload[]>> {
		return this.request.delete(apiProductItem(payload.toString()));
	}

	public oldList(): Observable<any[]> {
		return this.request.oldGet<any[]>(oldApiProductsList());
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<ProductPayload[]>> {
		return this.request.put(apiProductToggleItems(payload.toString()));
	}
}

