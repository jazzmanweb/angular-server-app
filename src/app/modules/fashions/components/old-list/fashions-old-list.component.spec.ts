import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsOldListComponent } from './fashions-old-list.component';

describe('FashionsOldListComponent', () => {
	let component: FashionsOldListComponent;
	let fixture: ComponentFixture<FashionsOldListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FashionsOldListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FashionsOldListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
