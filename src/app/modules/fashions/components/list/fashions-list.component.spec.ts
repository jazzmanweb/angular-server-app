import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsListComponent } from './fashions-list.component';

describe('FashionsListComponent', () => {
	let component: FashionsListComponent;
	let fixture: ComponentFixture<FashionsListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FashionsListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FashionsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
