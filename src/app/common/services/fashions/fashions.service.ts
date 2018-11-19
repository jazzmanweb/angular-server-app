import { Injectable } from '@angular/core';
import { FashionPayload } from '../../model/payloads/fashion.payload';
import { apiFashionsList, apiFashionItem, oldApiFashionsList, apiFashionToggleItems } from './fashions.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class FashionsService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<FashionPayload[]>> {
		return this.request.get(apiFashionsList());
	}

	public item(id: string): Observable<RequestResponseModel<FashionPayload>> {
		return this.request.get(apiFashionItem(id));
	}

	public save(payload: FashionPayload): Observable<RequestResponseModel<FashionPayload>> {
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: FashionPayload): Observable<RequestResponseModel<FashionPayload>> {
		return this.request.put(apiFashionItem(payload.id), payload);
	}

	public create(payload: FashionPayload): Observable<RequestResponseModel<FashionPayload>> {
		return this.request.post(apiFashionItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<FashionPayload[]>> {
		return this.request.delete(apiFashionItem(payload.toString()));
	}

	public oldList(): Observable<any[]> {
		return this.request.oldGet<any[]>(oldApiFashionsList());
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<FashionPayload[]>> {
		return this.request.put(apiFashionToggleItems(payload.toString()));
	}
}

