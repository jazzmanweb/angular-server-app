import { Injectable } from '@angular/core';
import { OrderPayload } from '../../model/payloads/order.payload';
import { apiOrdersList, apiOrderItem, oldApiOrdersList, apiOrderToggleItems } from './orders.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<OrderPayload[]>> {
		return this.request.get(apiOrdersList());
	}

	public item(id: string): Observable<RequestResponseModel<OrderPayload>> {
		return this.request.get(apiOrderItem(id));
	}

	public save(payload: OrderPayload): Observable<RequestResponseModel<OrderPayload>> {
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: OrderPayload): Observable<RequestResponseModel<OrderPayload>> {
		return this.request.put(apiOrderItem(payload.id), payload);
	}

	public create(payload: OrderPayload): Observable<RequestResponseModel<OrderPayload>> {
		return this.request.post(apiOrderItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<OrderPayload[]>> {
		return this.request.delete(apiOrderItem(payload.toString()));
	}

	public oldList(): Observable<any[]> {
		return this.request.oldGet<any[]>(oldApiOrdersList());
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<OrderPayload[]>> {
		return this.request.put(apiOrderToggleItems(payload.toString()));
	}
}

