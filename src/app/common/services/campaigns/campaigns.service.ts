import { Injectable } from '@angular/core';
import { CampaignPayload } from '../../model/payloads/campaign.payload';
import { apiCampaignsList, apiCampaignItem, apiCampaignToggleItems } from './campaigns.constants';
import { RequestHandlerService } from '../request-handler.service';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../../model/models/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
	constructor(private request: RequestHandlerService) {}

	public list(): Observable<RequestResponseModel<CampaignPayload[]>> {
		return this.request.get(apiCampaignsList());
	}

	public item(id: string): Observable<RequestResponseModel<CampaignPayload>> {
		return this.request.get(apiCampaignItem(id));
	}

	public save(payload: CampaignPayload): Observable<RequestResponseModel<CampaignPayload>> {
		return payload.id ? this.update(payload) : this.create(payload);
	}

	public update(payload: CampaignPayload): Observable<RequestResponseModel<CampaignPayload>> {
		return this.request.put(apiCampaignItem(payload.id), payload);
	}

	public create(payload: CampaignPayload): Observable<RequestResponseModel<CampaignPayload>> {
		return this.request.post(apiCampaignItem(''), payload);
	}

	public delete(payload: string | string[]): Observable<RequestResponseModel<CampaignPayload[]>> {
		return this.request.delete(apiCampaignItem(payload.toString()));
	}

	public toggle(payload: string | string[]): Observable<RequestResponseModel<CampaignPayload[]>> {
		return this.request.put(apiCampaignToggleItems(payload.toString()));
	}
}

