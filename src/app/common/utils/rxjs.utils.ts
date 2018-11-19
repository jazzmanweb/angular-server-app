import { pipe } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { ViewTypesEnum } from '../model/enums/view-types.enum';
import { Data, Params } from '@angular/router';
import { IndexPayload } from '../model/payloads/index.payload';

type ViewParams = [ViewTypesEnum, string];

export const getItemViewParams = map(([data, params]: [Data, Params]) => [
	data.viewType,
	params.id
]);

export const getPageTitleFromRouteData = map((data: Data) => data.pageTitle);

export const filterEditViewParams = filter(
	([viewType, id]: ViewParams) => viewType === ViewTypesEnum.EDIT && !!id
);

export const filterDetailsViewParams = filter(
	([viewType, id]: ViewParams) => viewType === ViewTypesEnum.DETAILS && !!id
);

export const getIdFromViewParams = map(([viewType, id]: ViewParams) => id);

export const rxjsGetIdIfEdit = [
	getItemViewParams,
	filterEditViewParams,
	take(1),
	getIdFromViewParams
];

export const notEmptyList = filter((list: any[]) => list && list.length > 0);

export const getRelatedOptions = <T, K extends IndexPayload>(field: string) =>
	map(
		(list: T[]): K[] =>
			Array.from(
				list
					.reduce((uniqueMap: Map<string, K>, item: T) => {
						if (item[field]) {
							(<K[]>item[field]).forEach((fieldItem: K) => {
								uniqueMap.set(fieldItem.id, fieldItem);
							});
						}
						return uniqueMap;
					}, new Map<string, K>())
					.values()
			)
	);

export const filterListBySelected = map(([list, selected]) =>
	list.filter(item =>
		selected.some(
			selectedItem => selectedItem.id === item.id
		)
	)
)
