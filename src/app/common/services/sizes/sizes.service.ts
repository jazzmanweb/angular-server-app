import { Injectable } from '@angular/core';
import { SizePayload } from '../../model/payloads/size.payload';
import { apiSizesList, apiSizeItem, apiSizeToggleItems } from './sizes.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
	providedIn: 'root'
})
export class SizesService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<SizePayload[]>> {
		return this.request.get(apiSizesList());
	}

	public item(id: string): Observable<RequestResponseModel<SizePayload>> {
		return this.request.get(apiSizeItem(id));
	}

	public save(payload: SizePayload): Observable<RequestResponseModel<SizePayload>> {
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: SizePayload): Observable<RequestResponseModel<SizePayload>> {
		return this.request.put(apiSizeItem(''), payload);
	}

	public create(payload: SizePayload): Observable<RequestResponseModel<SizePayload>> {
		return this.request.post(apiSizeItem(payload.id), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<SizePayload[]>> {
		return this.request.delete(apiSizeItem(payload.toString()));
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<SizePayload[]>> {
		return this.request.put(apiSizeToggleItems(payload.toString()));
	}
}
