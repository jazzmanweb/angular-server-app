import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResponseModel } from '../model/models/request-response.model';
import { ApiEnum } from '../model/enums/api.enum';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RequestHandlerService {
	constructor(private http: HttpClient) {}

	public get<T = any>(
		urn: string,
		params?: any,
		api: ApiEnum = ApiEnum.API
	): Observable<RequestResponseModel<T>> {
		const url = api + urn;
		console.log(url)
		return this.http.get<RequestResponseModel<T>>(url, { params });
	}

	public oldGet<T = any>(
		urn: string,
		params?: any,
		api: ApiEnum = ApiEnum.OLD_API
	): Observable<T> {
		const url = api + urn;
		console.log(url)
		return this.http.post<T>(url, { params });
	}

	public post<T = any>(
		urn: string,
		params?: any,
		api: ApiEnum = ApiEnum.API
	): Observable<RequestResponseModel<T>> {
		const url = api + urn;
		params.id = uuid();
		return this.http.post<RequestResponseModel<T>>(url, params);
	}

	public put<T = any>(
		urn: string,
		params?: any,
		api: ApiEnum = ApiEnum.API
	): Observable<RequestResponseModel<T>> {
		const url = api + urn;
		console.log(url)
		return this.http.put<RequestResponseModel<T>>(url, params);
	}

	public delete<T = any>(
		urn: string,
		params?: any,
		api: ApiEnum = ApiEnum.API
	): Observable<RequestResponseModel<T>> {
		const url = api + urn;
		console.log(url)
		return this.http.delete<RequestResponseModel<T>>(url, {params});
	}
}
