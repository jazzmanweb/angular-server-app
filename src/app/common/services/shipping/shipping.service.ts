import { Injectable } from '@angular/core';
import { ShippingPayload } from '../../model/payloads/shipping.payload';
import { apiShippingList, apiShippingItem, apiShippingToggleItems } from './shipping.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
	providedIn: 'root'
})
export class ShippingService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<ShippingPayload[]>> {
		return this.request.get(apiShippingList());
	}

	public item(id: string): Observable<RequestResponseModel<ShippingPayload>> {
		return this.request.get(apiShippingItem(id));
	}

	public save(payload: ShippingPayload): Observable<RequestResponseModel<ShippingPayload>> {
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: ShippingPayload): Observable<RequestResponseModel<ShippingPayload>> {
		return this.request.put(apiShippingItem(payload.id), payload);
	}

	public create(payload: ShippingPayload): Observable<RequestResponseModel<ShippingPayload>> {
		return this.request.post(apiShippingItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<ShippingPayload[]>> {
		return this.request.delete(apiShippingItem(payload.toString()));
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<ShippingPayload[]>> {
		return this.request.put(apiShippingToggleItems(payload.toString()));
	}
}
