import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesDetailsComponent } from './sizes-details.component';

describe('SizesDetailsComponent', () => {
	let component: SizesDetailsComponent;
	let fixture: ComponentFixture<SizesDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SizesDetailsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SizesDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
