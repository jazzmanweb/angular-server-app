import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';
import { MENU_LIST } from './menu.constants';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public url$: Observable<string[]>;
	public pageTitle$: Observable<string>;
	public viewType: ViewTypesEnum = ViewTypesEnum.LIST;
	public viewType$: Observable<ViewTypesEnum>;
	public menu = MENU_LIST;

	public isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map(result => result.matches));

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public breakpointObserver: BreakpointObserver
	) {}

	public ngOnInit() {
		const snapshotData$ = this.router.events.pipe(
			filter(
				(event: any) =>
					(event &&
						event.snapshot &&
						event.snapshot.data &&
						(!!event.snapshot.data.pageTitle ||
							!!event.snapshot.data.viewType))
			),
			map((event: any) => {
				return event.snapshot;
			})
		);

		this.pageTitle$ = snapshotData$.pipe(
			filter(
				(snapshot: ActivatedRouteSnapshot) => !!snapshot.data.pageTitle
			),
			map((snapshot: ActivatedRouteSnapshot) => snapshot.data.pageTitle)
		);
		this.viewType$ = snapshotData$.pipe(
			filter(
				(snapshot: ActivatedRouteSnapshot) => !!snapshot.data.viewType
			),
			map((snapshot: ActivatedRouteSnapshot) => snapshot.data.viewType)
		);

		this.viewType$
			.pipe(take(1))
			.subscribe((viewType: ViewTypesEnum) => (this.viewType = viewType));
	}

	public handleList() {
		this.router.navigate([ViewTypesEnum.LIST], {relativeTo: this.route.firstChild});
	}

	public handleOldList() {
		this.router.navigate([ViewTypesEnum.OLD_LIST], {relativeTo: this.route.firstChild});
	}

	public handleCreate() {
		this.router.navigate([ViewTypesEnum.CREATE], {relativeTo: this.route.firstChild});
	}

	public handleEdit() {
		this.router.navigate([ViewTypesEnum.EDIT], {relativeTo: this.route.firstChild.firstChild});
	}
}
