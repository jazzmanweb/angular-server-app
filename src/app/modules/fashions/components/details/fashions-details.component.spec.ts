import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsDetailsComponent } from './fashions-details.component';

describe('FashionsDetailsComponent', () => {
	let component: FashionsDetailsComponent;
	let fixture: ComponentFixture<FashionsDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FashionsDetailsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FashionsDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
